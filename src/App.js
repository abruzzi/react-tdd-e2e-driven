import React from 'react'
import {Route} from 'react-router-dom'

import './App.css'
import BookContainer from './containers/BookContainer'
import BookDetailContainer from './containers/BookDetailContainer'

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
