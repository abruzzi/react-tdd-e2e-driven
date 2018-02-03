import React from 'react'
import './index.css'
import Book from '../Book'

function BookList({books}) {
	return (
      <div>
        {
          books.map((book, index) => <Book key={index} book={book} />)
        }
      </div>
      )
}

export default BookList