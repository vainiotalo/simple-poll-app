import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/PollDirectory.css'

const PollDirectory = ({ polls, onDelete }) => {
    if (polls.length > 0) {
        return(
        <div className="poll-directory">
            <div id="poll-dir-table">
                <h2 id="dir-header">Open polls:</h2>
                <table class="dir-table">
                    <tbody>
                        {polls.map(poll =>
                            <tr key={poll.id + ''}>
                                <td><Link to={`/polls/${poll.id}`}>{poll.question}</Link></td>
                                <td><button class="del-button" onClick={onDelete} id={poll.id}>delete</button></td>
                        </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
        )
    } else return (
    <div className="poll-directory">
        <div id="poll-dir-table">
            <h2 id="dir-header">Open polls:</h2>
            <p id="no-polls">No polls yet!</p>
        </div>
    </div>)   
}

export default PollDirectory
