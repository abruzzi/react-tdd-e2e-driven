import React, { Component } from 'react'
import './App.css'
import BookList from './BookList'

class App extends Component {

  render() {
    const books = [
      {name: 'Implementing Microservice'},
      {name: 'Domain Driven Design'}
    ]

    return (
      <div className="container">
        <h1>Bookish</h1>
        <BookList books={books} />
      </div>
    )
  }
}

export default App
