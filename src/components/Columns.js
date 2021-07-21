import React, { Fragment } from 'react'

function Columns() {
    const items = ['xx','ccc']

    return (
        <> 
            {
                items.map( (i,index) => (
                    <React.Fragment key={index}>
                        <h1>Title</h1>
                        <p>{i}</p>
                    </React.Fragment>
                ))
            }
            <td>name</td>
            <td>Ricxe</td>
        </>
    )
}

export default Columns
