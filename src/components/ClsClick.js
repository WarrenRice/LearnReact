import React, { Component } from 'react'

class ClsClick extends Component {

    clickHandler = () => console.log('class clicked!!');

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Class Click</button>
            </div>
        )
    }
}

export default ClsClick
