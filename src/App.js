import React, { Component } from 'react'
import './App.css'
import BookList from './BookList'

import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8080/books').then(res => {
      this.setState({
        books: res.data
      })
    })
  }

  render() {
    const {books} = this.state

    return (
      <div className="container">
        <h1>Bookish</h1>
        <BookList books={books} />
      </div>
    )
  }
}

export default App
