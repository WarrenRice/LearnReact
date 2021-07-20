import React from 'react'

// function Greet() {
//     return <h1>from Greet.js</h1>
// }
// const Greet = () => {return <h1>from Greet.js</h1>}

// const Greet = (props) => { //props can be any name
// const Greet = props => { //props can be any name
//     console.log(props)
//     return (
//     <div>
        // <h1>Greet.js FnCmp {props.name} st {props.stand}</h1>
//        {/*this will render children*/}
//          {props.children} 
//     </div>
//     )
// } 

//const Greet = props => { 
    //const {name,stand,children} = props

const Greet = ({name,stand,children}) => { //props can be any name
    return (
    <div>
        <h1>Greet.js FnCmp {name} st {stand}</h1>
        {/*this will render children*/}
        {children} 
    </div>
    )
}


// const Greet = () => <div><button>Click me</button><button>Click me</button></div>

export default Greet //import any name
// export const Greet = () => <h1>from Greet.js</h1> //export same name { Greet }