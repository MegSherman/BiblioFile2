import React, {Component} from 'react';
import Results from './Results'

class Search extends Component {
    constructor () {
        super ()
        this.state = {
            book: {}
        }
    }

    componentDidMount () {

    }

    render () {
        return (
            <>
            <div>Search.js</div>
            <Results addBook = {this.props.addBook}/>
            </>
        )
    }
}

export default Search