import React from 'react'
import Person from './Person'


function NameList() {
        // const names = ['Jojo', 'Jotaro', 'Dio']
        // const nameList = names.map( x => <h2>{x}</h2>)
        const persons = [
            {
                id: 1,
                name: 'Rock',
                age: 400,
                skill: 'buster'
            },
            {
                id: 2,
                name: 'Roll',
                age: 398,
                skill: 'House'
            }
        ]
        const personList = persons.map( xx => <Person key={xx.id} personx = {xx}/>)

    return <div>{personList}</div>
}

export default NameList
