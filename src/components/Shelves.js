import React from 'react';
import Books from './Books'

function Shelves (props) {
    return (
        <>
        <p>Shelves.js</p>
        <Books
        editLocation = {props.editLocation}
        deleteBook = {props.deleteBook}/>
        </>
    )
}

export default Shelves