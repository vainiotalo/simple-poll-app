import React, { Component } from 'react'
import PollMaker from '../components/PollMaker'
import '../styles/Main.css'

class Main extends Component{

    render(){
        return(
            <div className="main">
                <div id="pollmaker-background">
                    <div id="pollmaker">
                        <PollMaker onSubmit={this.props.onSubmit}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main
