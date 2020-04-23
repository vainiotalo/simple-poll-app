import React, { useState, useEffect } from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import pollService from './services/polls'
import Main from './containers/Main'
import Poll from './components/Poll'

const App = () => {
    const [polls, setPolls] = useState([
        { question: '', options: ['',''] }
    ])

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

    const removePoll = (id) => {
        setPolls(polls.filter(poll => poll.id !== Number(id)))
    }

    const match = useRouteMatch('/:id')
    let poll = match
        ? polls.find(poll => poll.id === Number(match.params.id))
        : { question: '', options: ['',''] }

    return(
        <Switch>
            <Route path="/:id/r">Hello World</Route>
            <Route path="/:id"><Poll poll={poll}/></Route>
            <Route path="/"><Main polls={polls}
                                onUpdate={updatePolls} onDelete={removePoll}/></Route>
        </Switch>
    )
}

export default App
