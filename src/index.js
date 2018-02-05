import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'

const mount = document.getElementById('root')

const entry = () => {
    return (<Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>)
}
ReactDOM.render(entry(), mount)
