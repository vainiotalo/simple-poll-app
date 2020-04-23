import React, { Component } from 'react'
import PollMaker from '../components/PollMaker'
import PollDirectory from '../components/PollDirectory'
import './Main.css'

class Main extends Component{
    render(){
        return(
            <div id="container">
                <div id="pollmaker">
                    <PollMaker onSubmit={this.props.onSubmit}/>
                </div>
                <div id="directory">
                    <PollDirectory polls={this.props.polls} onDelete={this.props.onDelete}/>
                </div>
            </div>
        )
    }
}

export default Main
