import React, { Component } from 'react'
import LifeCycleB from './LifecycleB';

class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Rice'
        }
        console.log('LifecycleA consTructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleA getDerivedStateFromProps');
        return null
    }
    
    componentDidMount(){
        console.log('LifeCycleA component did mount');
    }

    shouldComponentUpdate() {
        console.log('LifeCycleA shouldComponentUpdate');
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifeCycleA getSnapshotBeforeUpdate');
        return null
    }

    componentDidUpdate() {
        console.log('LifeCycleA componentDidUpdate');
    }

    changeState = () => {
        this.setState({
            name: 'Warren'
        })
    }

    render() {
        console.log('LifeCycleA Render');
        return (
            <div>
                <div>LifeCycle A </div>
                <button onClick={this.changeState}>click</button>
                <LifeCycleB></LifeCycleB>
            </div>
        )
    }
}

export default LifeCycleA