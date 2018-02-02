import React from 'react'
import './BookList.css'

function BookList({books}) {
	return (
      <div>
        {
          books.map(book => {
            return (<article className="book">
              <h3 className="title">{book.title}</h3>
            </article>)
          })
        }
      </div>
      )
}

export default BookList