import React from 'react';
import update from 'immutability-helper';

class Poll extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            question: '',
            options: ['','','']
        }
    }

    addQuestion = (event) => {
        event.preventDefault()

        const optionsFiltered = this.state.options.filter(option => option !== '')
        const optionsSize = optionsFiltered.length
        const optionsCheck = Boolean(optionsSize < 2
                                    || [...new Set(optionsFiltered)].length < optionsSize)
        const resetState = () => {
            this.setState({
                question: '',
                options: ['','','']
            })
        }
        
        switch(this.state.question){
            case '':
                alert("Please enter a question")
                if(optionsCheck){
                    alert("Please enter at least two unique answer options")
                }
                break;
            default:
                if(optionsCheck){
                    alert("Please enter at least two unique answer options")
                } else { resetState() }
        }
    }

    handleQuestion = (event) => {
        this.setState({ question: event.target.value })
    }

    handleOptions = (event, index) => {
        const updateField  = (array) => {
            return update(array, {[index]: {$set: event.target.value}})
        }
        const newField  = (array) => {
            return update(array, {$push: ['']})
        }

        this.setState({
            options: updateField(this.state.options)
        })
        if(index === this.state.options.length - 1 && index <= 28){
            this.setState({
                options: updateField(newField(this.state.options))
            })
        }
    }

    render() {
        return (
            <form onSubmit={this.addQuestion}>
                <div className="Poll">
                    <h1>Simple poll app!</h1>
                    <h2>Enter your question:</h2>
                    <input name="question" value={this.state.question} onChange={this.handleQuestion}/>
                    <h2>Enter answer options:</h2>
                    {
                        Array.from(this.state.options).map((option, index) => {
                            return(
                                <div key={index}>
                                    <input name="options" value={option} onChange={(e) => 
                                                                            this.handleOptions(e, index)}/>
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
}

export default Poll;
