import React, { Component} from 'react'
//import RegComp from './RegComp'
//import PureComp from './PureComp'
import MemoComp from './MemoComp'

export class ParentComp extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Rice'
        }
    }
    
    componentDidMount() {
        setInterval(()=>{
            this.setState({
                name: 'Rice'
            })
        },2000)
    }

    render() {
        console.log('-----------------Parent');
        return (
            <div>
                <MemoComp name={this.state.name}></MemoComp>

            </div>
        )
    }
}

export default ParentComp
