import React from 'react'
import {shallow} from 'enzyme'
import BookList from './BookList'

describe('BookList', () => {
    it('Show empty book list when no data given', () => {
        const books = []

        const wrapper = shallow(<BookList books={books} />)
        expect(wrapper.find('Book').length).toEqual(0)
    })

    it('Show book list', () => {
        const books = [
            {title: "Implementing Microservice", author: "Sam Newman"},
            {title: "Test Driven Development", author: "Martin Follow"}
        ]

        const wrapper = shallow(<BookList books={books} />)
        expect(wrapper.find('Book').length).toEqual(2)
    })
})