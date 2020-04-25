const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')
const Poll = require('./models/poll')

app.use(bodyParser.json())
app.use(cors())
app.use(express.static(__dirname + '/build'))

const formatPoll = (poll) => {
    return {
        id: poll._id,
        question: poll.question,
        options: poll.options,
        answerCount: poll.answerCount
    }
}

app.post('/api/polls', (req,res) => {
    const body = req.body

    if (body.question === undefined || body.options === undefined) {
        return res.status(400).json({ error: 'question or options missing' })
    }

    if(body.question === '' || body.options.length < 2
            || [...new Set(body.options)].length < body.options.length){
        return res.status(400).json({ error: 'question and two unique answer options required' })
    } else {
        const poll = new Poll({
            question: body.question,
            options: body.options,
            answerCount: body.options.map(option => option = 0)
        })

        poll
            .save()
            .then(formatPoll)
            .then(savedAndFormattedPoll => {
                res.json(savedAndFormattedPoll)
            })
    }
})

app.get('/:id', function (req, res){
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))    // allow page reload on poll page
})
  
app.get('/:id/r', function (req, res){
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))    // allow page reload on result page
})

app.get('/api/polls', (req, res) => {
    Poll
        .find({})
        .then(polls => {
            res.json(polls.map(formatPoll))
            })
})

app.get('/api/polls/:id', (req, res) => {
    Poll
        .findById(req.params.id)
        .then(poll => {
            if (poll) {
                res.json(formatPoll(poll))
            } else {
                res.status(404).end()
            }
        })
        .catch(error => {
            console.log(error)
            res.status(400).send({ error: 'malformatted id' })
        })
})

app.put('/api/polls/:id', (req, res) => {
    const body = req.body
    const index = req.body.id

    if(typeof index === 'undefined'){
        res.status(400).json({ error: 'missing parameter: index', data: null })
        return;
    }

    let newCount = body.answerCount
    newCount[Number(index)] += 1

    const poll = {
        question: body.question,
        options: body.options,
        answerCount: newCount
    }

    Poll
        .findByIdAndUpdate(req.params.id, poll, { new: true })
        .then(updatedPoll => {
            res.json(formatPoll(updatedPoll))
        })
        .catch(error => {
            console.log(error)
            res.status(400).send({ error: 'malformatted id' })
        })
})

app.delete('/api/polls/:id', (req, res) => {
    Poll
        .findByIdAndRemove(req.params.id)
        .then(result => {
            res.status(204).end()
        })
        .catch(error => {
            res.status(400).send({ error: 'malformatted id' })
        })
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
