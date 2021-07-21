import React, { Component } from 'react'
import FRInput from './FRInput'



export class FRParentInput extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()             
    }
    
    
    clickAct = () => {
        this.inputRef.current.focus()
        console.log(this.inputRef.current.value);
    }

    render() {
        return (
            <div>
                <FRInput ref={this.inputRef}></FRInput>
                <button onClick={this.clickAct}>Focus Input</button>
            </div>
        )
    }
}

export default FRParentInput
