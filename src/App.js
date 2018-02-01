import React, { Component } from 'react'
import './App.css'

class App extends Component {
  renderBooks(books) {
    return (
      <div>
        {
          books.map(book => {
            return (<article className="book">
              <h3 className="title">{book.name}</h3>
            </article>)
          })
        }
      </div>
      )
  }

  render() {
    const books = [
      {name: 'Implementing Microservice'},
      {name: 'Domain Driven Design'}
    ]

    return (
      <div className="container">
        <h1>Bookish</h1>
        {
          this.renderBooks(books)
        }
      </div>
    )
  }
}

export default App
