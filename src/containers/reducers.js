import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import main from './BookContainer/reducer'

export default combineReducers({
  routing: routerReducer,
  main
})