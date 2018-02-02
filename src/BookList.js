import React from 'react'
import './BookList.css'
import Book from './Book'

function BookList({books}) {
	return (
      <div>
        {
          books.map(book => <Book book={book} />)
        }
      </div>
      )
}

export default BookList