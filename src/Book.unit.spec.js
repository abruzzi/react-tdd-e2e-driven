import React from 'react'
import {shallow} from 'enzyme'
import Book from './Book'

describe('Book', () => {
    it('Show book name & book author', () => {
        const book = {
            title: "Implementing Microservice", author: "Sam Newman"
        }
        const wrapper = shallow(<Book book={book} />)
        expect(wrapper.find('.title').length).toEqual(1)
        expect(wrapper.find('.title').text()).toEqual("Implementing Microservice")
        expect(wrapper.find('.author').text()).toEqual("Sam Newman")
    })
})