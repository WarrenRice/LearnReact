import React from 'react'

// function FRInput() {
//     return (
//         <div>
//             <input type='text'></input>
//         </div>
//     )
// }

const FRInput = React.forwardRef((props, ref) => {
    return (
        <div>
            <input type='text' ref={ref} value={5}/>
        </div>
    )
})

export default FRInput
