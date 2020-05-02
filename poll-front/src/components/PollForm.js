import React from 'react'
import '../styles/PollForm.css'

const PollForm = ({ handleSubmit, handleChange, handleArray, inputObject }) => {
    
    return(
        <form onSubmit={handleSubmit}>
            <div className="Poll" id="pollform">
                <input name="question" id="input-field" value={inputObject.question}
                            onChange={handleChange} placeholder="Enter your question"/>
                <br /><br /><br /><br />
                {
                    Array.from(inputObject.options).map((option, index) => {
                        return(
                            <div key={index}>
                                <input name="options" id="input-field" value={option} placeholder={`Answer option ${index+1}`}
                                                                onChange={(e) => handleArray(e, index)}/>
                            </div>
                        )
                    })
                }
                <br /><br />
                <button type="submit" id="form-button">Create Poll</button>
                <br /><br />
            </div>
        </form>
    )
}

export default PollForm
