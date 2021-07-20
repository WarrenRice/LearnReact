import React, { Component } from 'react';

class Welcome extends Component {

    constructor() {
        super()
        this.state = {
            message: "Visitor"
        }
    }

    changeMessage() {
        this.setState ({
            message: 'Thsank!!'
        })
    }

    render(){
        return (
        <div>
            <h1>
                Message.js Class cmp {this.state.message} and {this.props.stand}
            </h1>
            <button onClick={()=> this.changeMessage()}>Click</button>
        </div>

        )
    }
}

export default Welcome