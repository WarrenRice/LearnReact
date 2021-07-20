import React from 'react'

function Person({personx}) {
    return (
        <div>
            <h2>
                I am {personx.name} I am {personx.age} I can {personx.skill}
            </h2>
        </div>
    )
}

export default Person
