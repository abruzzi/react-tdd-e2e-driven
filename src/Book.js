import React from 'react'
import {Link} from 'react-router-dom'

function Book({book}) {
    return (<article className="book">
        <h3 className="title">{book.title}</h3>
        <h3 className="author">{book.author}</h3>
        <Link to={`/books/${book.id}`} className="view-detail">View Detail</Link>
    </article>)
}

export default Book