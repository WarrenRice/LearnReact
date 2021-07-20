import React from 'react'

function FnClick() {

    function clickHandler() {
        console.log('Button Function Clicked');
    }

    return (
        <div>
            <button onClick={clickHandler}>Function Click</button>
        </div>
    )
}

export default FnClick
