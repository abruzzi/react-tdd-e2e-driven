import React from 'react'
import {Route} from 'react-router-dom'

import './App.css'
import BookContainer from './BookContainer'
import BookDetailContainer from './BookDetailContainer'

function App () {
    return (
        <div className="container">
            <h1>Bookish</h1>
            <main>
                <Route exact path="/books" component={BookContainer} />
                <Route path="/books/:id" component={BookDetailContainer} />
            </main>
        </div>
    )
}

export default App
