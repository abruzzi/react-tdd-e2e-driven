import React, { Component } from 'react'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Bookish</h1>
        <article className="book">
          <h3 className="title">Implementing Microservice</h3>
        </article>
        <article className="book">
          <h3 className="title">Domain Driven Design</h3>
        </article>
      </div>
    )
  }
}

export default App
