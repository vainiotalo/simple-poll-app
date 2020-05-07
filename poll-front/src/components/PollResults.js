import React, { useState, useEffect } from 'react'
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
                            <p class="split-para"><strong>{option}</strong>
                                <span id="answer-count">{`${poll.answerCount[index]} votes`}</span></p>
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
