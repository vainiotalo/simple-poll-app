import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './containers/Main'

const App = () => {
    return(
        <Router>
            <Switch>
                <Route path="/polls/:id/r"><p>Hello World</p></Route>
                <Route path="/polls/:id"><p>Hello World</p></Route>
                <Route path="/polls/"><p>Hello World</p></Route>
                <Route path="/"><Main /></Route>
            </Switch>
        </Router>
    )
}

export default App
