import axios from 'axios'

export const performSearch = (term) => {
  return {
    type: 'PERFORM_SEARCH',
    term
  }
}

export const fetchBooksFromRemote = () => {
  return (dispatch, getState) => {
    dispatch({type: 'FETCH_BOOKS'})
    const state = getState()
    return axios.get(`http://localhost:8080/books?q=${state.main.term}`).then((res) => {
      dispatch({type: 'FETCH_BOOKS_FULFILLED', payload: res.data})
    }).catch((err) => {
      dispatch({type: 'FETCH_BOOKS_REJECTED', err})
    })
  }
}