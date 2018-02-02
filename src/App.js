import React, { Component } from 'react'
import './App.css'
import BookList from './BookList'

import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      books: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8080/books').then(res => {
      this.setState({
        books: res.data,
        loading: false
      })
    }).catch((err) => {
      this.setState({loading: false})
    })
  }

  render() {
    const {loading, books} = this.state

    if(loading) {
      return <div className="loading" />
    }

    return (
      <div className="container">
        <h1>Bookish</h1>
        <BookList books={books} />
      </div>
    )
  }
}

export default App
