import React from 'react'
import {shallow} from 'enzyme'
import BookList from './BookList'

describe('BookList', () => {
    it('Show book list', () => {
        const books = [
            {title: "Implementing Microservice", author: "Sam Newman"},
            {title: "Test Driven Development", author: "Martin Follow"}
        ]

        const wrapper = shallow(<BookList books={books} />)
        expect(wrapper.find('.book').length).toEqual(2)

        expect(wrapper.find('.book .title').length).toEqual(2)
        expect(wrapper.find('.book .title').at(0).text()).toEqual("Implementing Microservice")
        expect(wrapper.find('.book .author').at(0).text()).toEqual("Sam Newman")
    })
})