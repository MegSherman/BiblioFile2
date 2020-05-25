import React, {Component} from 'react';
import axios from 'axios'
import Results from './Results'

class Search extends Component {
    constructor () {
        super ()
        this.state = {
            potentialBooks: []
        }
    }

    componentDidMount () {
        axios.get ('/api/booklist').then (res => {
            this.setState ({
               potentialBooks: res.data 
            })
        })
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