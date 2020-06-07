import React from 'react'
import ResultBar from './ResultBar'
import '../styles/PollResults.css'

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

    return(
        <div className="poll-results">
            <div id="results-table">
                <h2 id="results-header">{poll.question}</h2>
                <table id="results">
                    <tbody>
                    {poll.options.map((option, index) =>
                    <tr key={index}>
                        <td id="result">
                            <div id="answer-info">
                                <strong id="info-option">{option}</strong><p>{`${poll.answerCount[index]} votes`}</p>
                            </div>
                            <ResultBar percentage={calcPercentage(poll.answerCount[index])} />
                        </td>
                        <td id="percentage">
                            {`${Math.round(calcPercentage(poll.answerCount[index]))}%`}</td>  
                    </tr>)
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PollResults
