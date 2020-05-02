import React, { Component } from 'react';
import update from 'immutability-helper';
import PollForm from './PollForm'
import pollService from '../services/polls'

class PollMaker extends Component{
    constructor(props){
        super(props)
        this.state = {
            question: '',
            options: ['','']
        }
    }

    addQuestion = (event) => {
        event.preventDefault()
        const optionsFiltered = this.state.options.filter(option => option !== '')
        const counterInit = optionsFiltered.map(option => option = 0)
        const optionsCheck = Boolean(optionsFiltered.length < 2                                       // Check minimum amount of options
                                    || [...new Set(optionsFiltered)].length < optionsFiltered.length) // Check for duplicates
        const resetState = () => {
            this.setState({
                question: '',
                options: ['','']
            })
        }
        const pollObject = {
            question: this.state.question,
            options: optionsFiltered,
            answerCount: counterInit
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
                } else { 
                    if(window.confirm("Save this poll?")){
                        pollService
                            .create(pollObject)
                            .then(response => {
                                this.props.onSubmit(response.data)
                                resetState()
                            })  
                    }   
                }
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
        if(index === this.state.options.length - 1 && index <= 28){     // Max amount of answer options is set to 30
            this.setState({
                options: updateField(newField(this.state.options))
            })
        }
    }

    render() {
        return (
            <div className="poll-maker">
                <PollForm
                handleSubmit={this.addQuestion}
                handleChange={this.handleQuestion}
                handleArray={this.handleOptions} 
                inputObject={this.state}
                />
            </div>
        )
    }
}

export default PollMaker;
