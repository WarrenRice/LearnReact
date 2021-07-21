import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            username: '',
            comment: '',
            mode:'manual'
        }
    }
    
    onChangeUsername = (event) => {
        this.setState({
            username: event.target.value             
        }) 
    }

    onChangeComment = (event) => {
        this.setState({
            comment: event.target.value             
        }) 
    }

    onChangeMode = (event) => {
        this.setState({
            mode: event.target.value             
        }) 
    }

    handleSubmit = (event) => {
        console.log(`${this.state.username} ${this.state.comment} ${this.state.mode}`);
        event.preventDefault()
    }
    
    render() {
        const {username, comment, mode} = this.state
        return (           
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>User Name</label>
                    <input  type='text' 
                            value={username} 
                            onChange={this.onChangeUsername}
                    />
                </div>
                <div>
                    <label>Text Area</label>
                    <textarea value={comment} onChange={this.onChangeComment}></textarea>
                </div>
                <div>
                    <label>Mode</label>
                    <select value={mode} onChange={this.onChangeMode}>
                        <option value='manual'>Manual</option>
                        <option value='auto'>Auto</option>
                        <option value='timer'>Timer</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>

        )
    }
}

export default Form
