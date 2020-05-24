import React from 'react';
import Books from './Books'

function Shelves (props) {
    console.log (props)
    return (
        <>
        <p>Shelves.js</p>
        <Books changeLocation = {props.changeLocation}
        deleteBook = {props.deleteBook}/>
        </>
    )
}

export default Shelves