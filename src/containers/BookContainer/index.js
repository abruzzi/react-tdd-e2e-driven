import React, { Component } from 'react'
import './index.css'
import BookList from '../../components/BookList'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {performSearch, fetchBooksFromRemote} from './action'

class BookContainer extends Component {
  constructor(props) {
    super(props)
    this.filterBook = this.filterBook.bind(this)
  }

  componentDidMount() {
    this.props.fetchBooksFromRemote()
  }

  filterBook(e) {
    this.props.performSearch(e.target.value)
    this.props.fetchBooksFromRemote()
  }

  render() {
    const {loading, books} = this.props
    return (<div>
      <input type="text" className="search" placeholder="Type to search" onChange={this.filterBook}
             value={this.props.term}/>
      {
        loading ? <div className="loading"/> : <BookList books={books}/>
      }
    </div>)
  }
}

const mapStateToProps = state => ({
  loading: state.main.loading,
  books: state.main.books,
  term: state.main.term
})

const mapDispatchToProps = dispatch => bindActionCreators({
  performSearch,
  fetchBooksFromRemote
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BookContainer)
