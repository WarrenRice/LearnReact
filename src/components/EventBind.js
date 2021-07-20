import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            message: "Hella"
        }

        this.clickHandler = this.clickHandler.bind(this) //3-4
    }

    clickHandler() {
        this.setState({
            message: "Good boi"
        })
    } //1-3

    // clickHandler = () => {
    //     this.setState({
    //         message: "Good boi2"
    //     })
    // } 4
        
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Event Click</button> */}
                {/* <button onClick={() => this.clickHandler() }>Event Click</button> */}
                <button onClick={this.clickHandler}>Event Click</button>
            
            </div>
        )
    }
}

export default EventBind
