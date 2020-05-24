import React from 'react';
import Books from './Books'

function Shelves (props) {
    console.log (props)
    return (
        <div>Shelves.js</div>
        <Books changeLocation = {this.changeLocation}
        deleteBook = {this.deleteBook}/>
    )
}

export default Shelves