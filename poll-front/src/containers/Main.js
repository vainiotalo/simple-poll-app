import React, { Component } from 'react'
import PollMaker from '../components/PollMaker'
import '../styles/Main.css'
import { ReactComponent as SimpleLogo } from './simplepoll.svg'

class Main extends Component{

    render(){
        return(
            <div className="main">
                <div id="logo">
                    <SimpleLogo style={{width: '40vw'}} />
                    <p id="logo-txt">Polls made quick and easy.</p>
                </div>
                <div id="pollmaker-container">
                    <div id="pollmaker-background">
                        <div id="pollmaker">
                            <PollMaker onSubmit={this.props.onSubmit}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main
