import React from 'react'
import './BookList.css'
import Book from '../Book/Book'

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