import React, {Component} from 'react';
import axios from 'axios'

class Adder extends Component {
    constructor () {
        super ()
        this.state = {
            userTitle: '',
            userAuthor: '',
            userLocation: '',
            userImage: ''
        }
    }

    componentDidMount () {
        axios.get ('/api/collection').then (res => {
            this.setState ({
               collection: res.data 
            })
        })
    }

    handleUserTitle (e) {
        this.setState ({
            userTitle: e.target.value
        })
    }
    
    handleUserAuthor (e) {
        this.setState ({
            userAuthor: e.target.value
        })
    }

    handleUserLocation (e) {
        this.setState ({
            userLocation: e.target.value
        })
    }

    handleUserImage (e) {
        this.setState ({
            userImage: e.target.value
        })
    }

    render () {
        return (
            <>
            <h2>Add a Book:</h2>
            <input onChange={e => this.handleUserTitle (e)} class="input-box-2" type="text" placeholder="  Enter Title Here"/>
            <input onChange={e => this.handleUserAuthor (e)} class="input-box-2" type="text" placeholder="  Enter Author Here"/>
            <input onChange={e => this.handleUserLocation (e)}class="input-box-2" type="text" placeholder="  Enter Location Here"/>
            <input onChange={e => this.handleUserImage (e)} class="input-box-2" type="text" placeholder="  Enter Image Address Here"/>
            <button class="button" onClick= { () => this.props.addBook (this.state.userTitle, this.state.userAuthor, this.state.userLocation, this.state.userImage)}>ADD</button>
            </>
        )
    }
}

export default Adder