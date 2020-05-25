import React, {Component} from 'react';
import axios from 'axios'
import './App.css';
import Header from './components/Header.js'
import Locator from './components/Locator.js'
import Location from './components/Location.js'
import Library from './components/Library.js'
import Adder from './components/Adder.js';

class App extends Component {
  constructor () {
    super ()
    this.state = {
      collection: []
    }
    this.getBook = this.getBook.bind (this)
    this.listByLocation = this.listByLocation.bind (this)
    this.addBook = this.addBook.bind (this)
    this.editLocation = this.editLocation.bind (this)
    this.deleteBook = this.deleteBook.bind (this)
  }

  componentDidMount () {
    axios.get ('/api/collection').then (res => {
      this.setState ({
        collection: res.data
      })
    })
    .catch (error => console.log (error))
  }

  getBook (title) {
    axios.get (`/api/collection?search=${title}`).then ((res) => {
      this.setState ({
        collection: res.data
      })
    })
  }

  listByLocation (location) {
    axios.get (`api/collection?location=${location}`).then ((res) => {
      this.setState ({
        collection: res.data
      })
    })
  }

  addBook (title, author, location, image) {
    const body = {title, author, location, image}
    axios.post ('/api/collection', body).then ((res) => {
      this.setState ({
        collection: res.data
      })
    })
    .catch (error => console.log (error))
  }

  editLocation (id, newLocation) {
    const body = {newLocation}
    axios.put (`/api/collection/${id}`, body).then ((res) => {
      this.setState ({
        collection: res.data
      })
    })
    .catch (error => console.log (error))
  }

  deleteBook (id) {
    axios.delete (`/api/collection/${id}`).then ((res) => {
      this.setState ({
        collection: res.data
      })
    })
    .catch (error => console.log (error))
  }
  
  render () {
    return (
    <div className="App">
      <Header />
      <Locator getBook={this.getBook}
      />
      <Location listByLocation={this.listByLocation}/>
      <Adder addBook={this.addBook}/>
      <Library
      collection={this.state.collection}
      editLocation = {this.editLocation}
      deleteBook = {this.deleteBook}/>
    </div>
    )
  }
}

export default App