import React from 'react'

const Poll = ({ poll }) => {
    if(poll === undefined){ //allows page reload when user is on poll page
        return null
    }
    return(
        <div>
            <h2>{poll.question}</h2>
        </div>
    )
}

export default Poll
