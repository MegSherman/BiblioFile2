import React, {Component} from 'react';
import './App.css';
import Header from './components/Header.js'
import Search from './components/Search.js'
import Shelves from './components/Shelves.js'

export default class App extends Component {
  constructor () {
    super ()
    this.state = {
      collection: []
    }
    this.addBook = this.addBook.bind (this)
    this.changeLocation = this.changeLocation.bind (this)
    this.deleteBook = this.deleteBook.bind (this)
  }

  componentDidMount () {}
  addBook () {}
  changeLocation (id, location) {}
  deleteBook (id) {}
  
  render () {
    return (
    <div className="App">
      <p>App.js</p>
      <Header />
      <Search addBook = {this.addBook}/>
      <Shelves
      collection = {this.state.collection}
      changeLocation = {this.changeLocation}
      deleteBook = {this.deleteBook}/>
    </div>
    )
  }
}
