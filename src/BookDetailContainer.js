import React, {Component} from 'react'
import axios from 'axios'

import Book from './Book'

class BookDetailContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            book: {}
        }
    }

    componentDidMount() {
        console.log(this.props)
        const id = this.props.match.params.id
        axios.get(`http://localhost:8080/books/${id}`).then((res) => {
            this.setState({
                book: res.data
            })
        })
    }

    render() {
        console.log(this.props)
        const {book} = this.state
        return <Book book={book} />
    }
}

export default BookDetailContainer