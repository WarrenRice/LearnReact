import React, { Component } from 'react';

class Counter extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
           count: 0
        }

    }

    // plus(){
    //     this.setState({
    //         count : this.state.count+1
    //     }, () => {console.log('call back value', this.state.count)})
    // }
    
    plus(){
         this.setState( (previosState, props)=>({
             count : previosState.count+ parseInt(this.props.va)
         }), () => {console.log('call back value', this.state.count)})
    }   

    plusx5() {
        this.plus()
        this.plus()
        this.plus()
        this.plus()
        this.plus()
    }

    render(){
        return (
            <div>
                <div>Count : {this.state.count}</div>
                <button onClick={()=>this.plusx5()}>plusx</button>
            </div>
        )
    }
}

export default Counter