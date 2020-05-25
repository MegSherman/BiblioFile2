import React, {Component} from 'react';
import axios from 'axios'
import './App.css';
import Header from './components/Header.js'
import Locator from './components/Locator.js'
import Location from './components/Location.js'
import Search from './components/Search.js'
import Shelves from './components/Shelves.js'

class App extends Component {
  constructor () {
    super ()
    this.state = {
      collection: []
    }
    this.addBook = this.addBook.bind (this)
    this.editBook = this.editLocation.bind (this)
    this.deleteBook = this.deleteBook.bind (this)
  }

  componentDidMount () {
    axios.get ('/api/collection').then (res => {
      this.setState ({
        collection: res.data
      })
    })
  }

  findBook () {

  }

  addBook (title, author, location, image) {
    const body = {title, author, location, image}
    axios.post ('/api/collection', body).then (res => {
      this.setState ({
        collection: res.data
      })
    })
  }

  editLocation (id, newLocation) {
    const body = {newLocation}
    axios.put (`/api/collection/${id}`, body).then (res => {
      this.setState ({
        collection: res.data
      })
    })
  }

  deleteBook (id) {
    axios.delete (`/api/collection/${id}`).then (res => {
      this.setState ({
        collection: res.data
      })
    })
  }
  
  render () {
    return (
    <div className="App">
      <Header />
      <Locator 
      // findBook = {this.props.findBook(this.state.collection)}
      />
      <Location/>
      {/* <Search addBook = {this.addBook}/> */}
      <Shelves
      collection={this.state.collection}
      editLocation = {this.editLocation}
      deleteBook = {this.deleteBook}/>
    </div>
    )
  }
}

export default App