import React from 'react'

function NameList1() {
        const names = ['Jojo', 'Jotaro', 'Dio', 'Dio', 'Jotaro']
        const nameList = names.map( (x, index ) => <h2 key={index}> {index} {x}</h2>)

    return <div>{nameList}</div>
}

export default NameList1
