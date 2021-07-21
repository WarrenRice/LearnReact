import React from 'react'
import './myStyle.css'

function StyleSheet(props) {
    const cName = (props.primary ? 'primary' : 'blue')
    console.log(props.primary);
    console.log(cName);
    return (
        <div>
            <h1 className= {`${cName} font-xl`}>Stylesheets</h1>
        </div>
    )
}

export default StyleSheet
