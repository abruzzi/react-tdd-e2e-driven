import React from 'react'

function BookDetail({book}) {
    return (<article className="book">
        <h3 className="title">{book.title}</h3>
        <h3 className="author">{book.author}</h3>
        <p className="description">{book.description}</p>
    </article>)
}

export default BookDetail