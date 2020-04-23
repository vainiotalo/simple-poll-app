import React, { Component } from 'react'
import PollMaker from '../components/PollMaker'
import PollDirectory from '../components/PollDirectory'
import pollService from '../services/polls'
import './Main.css'

class Main extends Component{
    constructor(props){
        super(props)
        this.updatePollDirectory = this.updatePollDirectory.bind(this)
        this.removePoll = this.removePoll.bind(this)
    }

    updatePollDirectory(pollObject){
        this.props.onUpdate(pollObject)
    }

    removePoll = (event) => {
        let id = JSON.stringify([event.target.id])
        id = id.substring(2, id.length-2)

        pollService
            .remove(id)
            .then(response => {
                this.props.onDelete(id)
            })
    }
    
    render(){
        return(
            <div id="container">
                <div id="pollmaker">
                    <PollMaker onSubmit={this.updatePollDirectory}/>
                </div>
                <div id="directory">
                    <PollDirectory polls={this.props.polls} onDelete={this.removePoll}/>
                </div>
            </div>
        )
    }
}

export default Main
