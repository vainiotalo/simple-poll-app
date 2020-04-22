import React from 'react'

const PollForm = ({ handleSubmit, handleChange, handleArray, inputObject }) => {
    const smiley = <span role="img" aria-label="smiley">&#128578;</span>
    return(
        <form onSubmit={handleSubmit}>
            <div className="Poll">
                <h1>SIMPLE P{smiley}LL APP</h1>
                <h2>Enter your question:</h2>
                <input name="question" value={inputObject.question} onChange={handleChange} placeholder="Question"/>
                <h2>Enter answer options:</h2>
                {
                    Array.from(inputObject.options).map((option, index) => {
                        return(
                            <div key={index}>
                                <input name="options" value={option} placeholder={`Option ${index+1}`} onChange={(e) => 
                                                                        handleArray(e, index)}/>
                            </div>
                        )
                    })
                }
                <br></br>
                <button type="submit">Create Poll</button>
            </div>
        </form>
    )
}

export default PollForm
