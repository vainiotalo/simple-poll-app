import React from 'react'
import { Link } from 'react-router-dom'
import ResultBar from './ResultBar'
import './PollResults.css'

const PollResults = ({ poll }) => {
    if(poll ===  undefined){        // allows page reload
        return null
    }

    const calcPercentage = (count) => {
        if(count === 0 || count === undefined){
            return 0
        } else {
            return (count / poll.answerCount.reduce((pv, cv) => pv + cv, 0))*100
        }
    }

    const smiley = <span role="img" aria-label="smiley">&#128578;</span>

    return(
        <div className="poll-results">
            <Link to={`/${poll.id}/`}><button>back</button></Link>
                <h2>{poll.question}{smiley}</h2>
                <table id="results">
                    <tbody>
                    {poll.options.map((option, index) =>
                    <tr key={index}>
                        <td id="result">
                            <p class="split-para"><strong>{option}</strong>
                                <span>{`${poll.answerCount[index]} votes`}</span></p>
                            <ResultBar percentage={calcPercentage(poll.answerCount[index])} />
                        </td>
                        <td id="percentage">
                            {`${Math.round(calcPercentage(poll.answerCount[index]))}%`}</td>  
                    </tr>)
                    }
                    </tbody>
                </table>
        </div>
    )
}

export default PollResults
