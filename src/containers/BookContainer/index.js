import React, { Component } from 'react'
import './index.css'
import BookList from '../../components/BookList'

import axios from 'axios'

class BookContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      term: '',
      books: []
    }
    this.filterBook = this.filterBook.bind(this)
  }

  fetchBooksFromRemote() {
    axios.get(`http://localhost:8080/books?q=${this.state.term}`).then(res => {
      this.setState({
        books: res.data,
        loading: false
      })
    }).catch((err) => {
      this.setState({loading: false})
    })
  }

  componentDidMount() {
    this.fetchBooksFromRemote()
  }

  filterBook(e) {
    this.setState({
      term: e.target.value,
      loading: true
    }, this.fetchBooksFromRemote)
  }

  render() {
    const {loading, books} = this.state

    return (<div>
      <input type="text" className="search" placeholder="Type to search" onChange={this.filterBook}
             value={this.state.term}/>
      {
        loading ? <div className="loading"/> : <BookList books={books}/>
      }

    </div>)
  }
}

export default BookContainer
