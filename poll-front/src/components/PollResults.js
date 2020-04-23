import React from 'react'
import { Link } from 'react-router-dom'

const PollResults = ({ poll }) => {
    if(poll ===  undefined){        // allows page reload
        return null
    }
    return(
        <div>
        <Link to={`/${poll.id}/`}><button>back</button></Link>
            <h2>{poll.question}</h2>
                <table>
                    <tbody>
                    {poll.options.map((option, index) =>
                    <tr key={index}>
                        <td>{option}</td>
                        <td>{poll.answerCount[index]}</td>
                    </tr>)
                    }
                    </tbody>
                </table>
        </div>
    )
}

export default PollResults
