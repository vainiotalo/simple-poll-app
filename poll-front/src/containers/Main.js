import React from 'react'
import PollMaker from '../components/PollMaker'
import PollDirectory from '../components/PollDirectory'
import pollService from '../services/polls'
import './Main.css'

class Main extends React.Component{
    constructor(props){
        super(props)
        this.updatePollDirectory = this.updatePollDirectory.bind(this)
        this.removePoll = this.removePoll.bind(this)
        this.state = { polls: [] }
    }

    componentDidMount(){
        pollService
            .getAll()
            .then(response => {
                this.setState({ polls: response.data })
        })
    }

    updatePollDirectory(pollObject){
        this.setState({
            polls: this.state.polls.concat(pollObject) 
        })
    }

    removePoll = (event) =>{
        console.log([event.target.id])
        let id = JSON.stringify([event.target.id])
        id = id.substring(2, id.length-2)

        pollService
            .remove(id)
            .then(response => {
                this.setState({
                    polls: this.state.polls.filter(poll => poll.id !== Number(id))
                })
            })
    }
    
    render(){
        return(
            <div id="container">
                <div id="pollmaker">
                    <PollMaker onSubmit={this.updatePollDirectory}/>
                </div>
                <div id="catalog">
                    <PollDirectory polls={this.state.polls} onDelete={this.removePoll}/>
                </div>
            </div>
        )
    }
}

export default Main
