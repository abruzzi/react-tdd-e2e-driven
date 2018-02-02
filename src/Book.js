import React from 'react'

function Book({book}) {
    return (<article className="book">
        <h3 className="title">{book.title}</h3>
        <h3 className="author">{book.author}</h3>
    </article>)
}

export default Book