import React from 'react';
import Books from './Books'
import { findByLabelText } from '@testing-library/react';

function Shelves (props) {
    const bookMap = props.collection.map (book => (
        <Books key={book.id} editLocation = {props.editLocation} deleteBook = {props.deleteBook} data = {book} />))
    return (
        <div>
            <h2>My Library</h2>
            <div style={{display: 'flex', justifyContent: 'center'}}>{bookMap}</div>
        </div>
    )
}

export default Shelves