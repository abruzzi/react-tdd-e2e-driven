import React, { Component } from 'react'
import './BookContainer.css'
import BookList from '../components/BookList'

import axios from 'axios'

class BookContainer extends Component {
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

    return <BookList books={books} />
  }
}

export default BookContainer
