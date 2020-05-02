import React from 'react'
import '../styles/ResultBar.css'

const ResultBar = ({ percentage }) => {
    return(
        <div className="result-bar">
            <Filler percentage={percentage} />
        </div>
    )
}

const Filler = ({ percentage }) => {
    return(
        <div className="filler" style={{ width: `${percentage}%`}} />
    )
}

export default ResultBar
