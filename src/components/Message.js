import React, { Component } from 'react';

class Message extends Component {
    
    render(){
        const {name, stand} = this.props
        return (
        <h1>
            {/* Message.js Class cmp {this.props.name} and {this.props.stand} */}
            Message.js Class cmp {name} and {stand}
        </h1>
        )
    }
}

export default Message