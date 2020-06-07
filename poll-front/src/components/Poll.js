import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Checkbox from './Checkbox'
import '../styles/Poll.css'

class Poll extends Component{
    constructor(props){
        super(props)
        this.state = { selectedOption: '', selectedIndex: null, redirect: false }
    }

    updateValue = (event) => {
        this.setState({
            selectedOption: event.target.value,
            selectedIndex: event.target.id
        })
    }

    saveAnswer = (event) => {
        event.preventDefault()
        if(this.state.selectedIndex === null) {
            alert("Please pick an answer")
        } else {
            this.props.onAnswer(this.props.poll, this.state.selectedIndex)
            this.setState({ redirect: true })
        }
    }

    render(){
        const poll = this.props.poll
        if(poll === undefined){ return null } // allows page reload when user is on poll page
        if(this.state.redirect) return <Redirect to={`/polls/${poll.id}/r`} />;
        else return(
            <div className="poll">
                <form id="voteform" method="POST" action={`/api/polls/${poll.id}`} onSubmit={this.saveAnswer}>
                    <div id="poll-table">
                        <h2 id="poll-header">{poll.question}</h2>
                        <table className="poll-table">
                            <tbody>
                                {poll.options.map((option, index) =>
                                <tr key={index}>
                                    <td>
                                        {option}
                                    </td>
                                    <td>
                                        <label id="checkbox">
                                            <input
                                                type="radio"
                                                className="choice-button"
                                                value={option}
                                                id={index}
                                                checked={this.state.selectedOption === option}
                                                onChange={this.updateValue}
                                            />
                                            <Checkbox selectedOption={this.state.selectedOption} option={option} />
                                        </label>
                                    </td>
                                </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                    <br></br>
                    <div id="poll-button-container">
                        <button id="answer-button" type="submit"><strong>Answer!</strong></button>
                        <Link to={`/polls/${poll.id}/r`}><button id="result-button">Results</button></Link>
                    </div>
                </form>
            </div>
        )
    }
}

export default Poll
