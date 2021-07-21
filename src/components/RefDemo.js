import React, { Component } from 'react'

class RefDemo extends Component {
    constructor(props) {
        super(props)
    
        this.inputRef = React.createRef()
        this.cbRef = null
        this.setCbRef = (element) => {
            this.cbRef = element
        }
    }

    componentDidMount() {
        if (this.cbRef) {
            this.cbRef.focus()
        }
        //this.inputRef.current.focus()
        //console.log('here ', this.inputRef);
    }

    clickHandler = () => {
        console.log(this.inputRef.current.value);
    }
    

    render() {
        return (
            <div>
                <input type='text' ref={this.inputRef}></input>
                <input type='text' ref={this.setCbRef}></input>
                <button onClick={this.clickHandler}>click</button>
            </div>
        )
    }
}

export default RefDemo