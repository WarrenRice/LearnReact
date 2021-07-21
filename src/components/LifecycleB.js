import React, { Component } from 'react'


class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Rice'
        }
        console.log('LifecycleB consTructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleB getDerivedStateFromProps');
        return null
    }
    
    componentDidMount(){
        console.log('LifeCycleB component did mount');
    }

    shouldComponentUpdate() {
        console.log('LifeCycleB shouldComponentUpdate');
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifeCycleB getSnapshotBeforeUpdate');
        return null
    }

    componentDidUpdate() {
        console.log('LifeCycleB componentDidUpdate');
    }
    
    render() {
        console.log('LifeCycleB Render');
        return (
            <div>
                <div>LifeCycle B</div>
                
            </div>
        )
    }
}

export default LifeCycleB