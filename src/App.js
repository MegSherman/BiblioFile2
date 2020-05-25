import React, {Component} from 'react';
import './App.css';
import Header from './components/Header.js'
import Locator from './components/Locator.js'
import Location from './components/Location.js'
import Search from './components/Search.js'
import Shelves from './components/Shelves.js'

export default class App extends Component {
  constructor () {
    super ()
    this.state = {
      collection: []
    }
    this.addBook = this.addBook.bind (this)
    this.editBook = this.editLocation.bind (this)
    this.deleteBook = this.deleteBook.bind (this)
  }

  getLibrary () {}

  findBook () {

  }

  addBook () {}

  editLocation () {}

  deleteBook (id) {}
  
  render () {
    return (
    <div className="App">
      <Header />
      <Locator 
      // findBook = {this.props.findBook(this.state.collection)}
      />
      <Location/>
      <Search addBook = {this.addBook}/>
      <Shelves
      editBook = {this.editLocation}
      deleteBook = {this.deleteBook}/>
    </div>
    )
  }
}
