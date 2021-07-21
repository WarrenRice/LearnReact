import React, { Component } from 'react'

class RegComp extends Component {
    
    render() {
        console.log('PURE');
        return (
            
            <div>
                Regular Comp {this.props.name}
            </div>
        )
    }
}

export default RegComp
