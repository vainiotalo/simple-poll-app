import React, { Component } from 'react'
import PollMaker from '../components/PollMaker'
import '../styles/Main.css'
import logo from './simplepoll.svg'

class Main extends Component{

    render(){
        return(
            <>
            <div id="main-header">
                <img src={logo} alt="Simple Poll" />
                <p id="main-header-txt">Polls made quick and easy.</p>
            </div>
            <div className="main">
                <div id="pollmaker-background">
                    <div id="pollmaker">
                        <PollMaker onSubmit={this.props.onSubmit}/>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default Main
