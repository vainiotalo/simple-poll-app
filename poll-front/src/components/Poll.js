import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'

class Poll extends Component{
    constructor(props){
        super(props)
        this.state = { selectedOption: '', selectedIndex: 0, redirect: false }
    }

    updateValue = (event) => {
        this.setState({
            selectedOption: event.target.value,
            selectedIndex: event.target.id
        })
    }

    saveAnswer = (event) => {
        event.preventDefault()
        this.props.onAnswer(this.props.poll, this.state.selectedIndex)
        this.setState({ redirect: true })
    }

    render(){
        const poll = this.props.poll
        const smiley = <span role="img" aria-label="smiley">&#128578;</span>
        if(poll === undefined){ return null } // allows page reload when user is on poll page
        if(this.state.redirect) return <Redirect to={`/${poll.id}/r`} />;
        else return(
            <div className="poll">
                <Link to="/"><button>back</button></Link>
                <form onSubmit={this.saveAnswer}>
                    <h2>{poll.question}{smiley}</h2>
                    <table>
                        <tbody>
                            {poll.options.map((option, index) =>
                            <tr key={index}>
                                <td>
                                    <label>
                                        <input type="radio" value={option} id={index}
                                                checked={this.state.selectedOption === option}
                                                onChange={this.updateValue} />
                                        {`  ${option}` }
                                    </label>
                                </td>
                            </tr>)
                            }
                        </tbody>
                    </table>
                    <br></br>
                    <button type="submit"><strong>Answer!</strong></button>
                    <Link to={`/${poll.id}/r`}><button>Results</button></Link>
                </form>
            </div>
        )
    }
}

export default Poll
