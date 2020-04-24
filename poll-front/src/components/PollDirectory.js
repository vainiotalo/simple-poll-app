import React from 'react'
import { Link } from 'react-router-dom';
import './PollDirectory.css'

const PollDirectory = ({ polls, onDelete }) => {
    return(
        <div className="poll-directory">
            <h2>Open polls:</h2>
            <table>
                <tbody>
                    {polls.map(poll =>
                        <tr key={poll.id + ''}>
                            <td><Link to={`/${poll.id}`}>{poll.question}</Link></td>
                            <td><button onClick={onDelete} id={poll.id}>delete</button></td>
                    </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default PollDirectory
