import React, { useState, useEffect } from 'react'
import { Route, Switch, Redirect, useRouteMatch } from 'react-router-dom';
import pollService from './services/polls'
import Main from './containers/Main'
import Poll from './components/Poll'
import PollResults from './components/PollResults'

const App = () => {
    const [polls, setPolls] = useState([])

    useEffect(() => {
        pollService
        .getAll()
        .then(response => {
            setPolls(response.data)
        }) 
    }, [])

    const updatePolls = (pollObject) => {
        setPolls(polls.concat(pollObject))
    }

    const removePoll = (event) => {
        let id = JSON.stringify([event.target.id])
        id = id.substring(2, id.length-2)

        if(window.confirm('Are you sure you want to delete this poll?')){
            pollService
                .remove(id)
                .then(response => {
                    setPolls(polls.filter(poll => poll.id !== id))
                })
        }
    }

    const incrementCount = (poll, index) => {
        let currentCount = poll.answerCount
        currentCount[Number(index)] += 1
        const newCount = { ...poll, answerCount: currentCount }

        pollService
            .update(newCount, poll.id)
            .then(response => {
                    setPolls(polls.map(p => p !== poll ? p : newCount))
        })
    }

    const match = useRouteMatch('/:id')
    let poll = match
        ? polls.find(poll => poll.id === match.params.id)
        : null

    return(
        <Switch>
            <Route path="/:id/r"><PollResults poll={poll} /></Route>
            <Route path="/:id"><Poll poll={poll} onAnswer={incrementCount}/></Route>
            <Route path="/"><Main polls={polls} onSubmit={updatePolls} onDelete={removePoll}/></Route>
            <Route render={() => <Redirect to="/" />} />
        </Switch>
    )
}

export default App
