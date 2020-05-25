import React from 'react';
import Books from './Books'

function Library (props) {
    const bookMap = props.collection.map (book => (
        <Books key={book.id} 
        editLocation = {props.editLocation}
        deleteBook = {props.deleteBook}
        data = {book} />))
    return (
        <div>
            <h2 class="my-library">My Library</h2>
            <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>{bookMap}</div>
        </div>
    )
}

export default Library