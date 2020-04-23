import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import './PollDirectory.css'

class PollDirectory extends Component{
    constructor(props){
        super(props)
        this.deletePoll = this.deletePoll.bind(this)
    }

    deletePoll(event){
        this.props.onDelete(event)
    }

    render(){
        return(
            <div>
                <div>
                    <h2>Open polls:</h2>
                    <table>
                        <tbody>
                            {this.props.polls.map(poll =>
                                <tr key={poll.id + ''}>
                                    <td><Link to={`/${poll.id}`}>{poll.question}</Link></td>
                                    <td><button onClick={this.deletePoll} id={poll.id}>delete</button></td>
                            </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default PollDirectory
