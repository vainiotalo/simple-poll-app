import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import './PollDirectory.css'

class PollDirectory extends Component{

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
                                    <td><button onClick={this.props.onDelete} id={poll.id}>delete</button></td>
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
