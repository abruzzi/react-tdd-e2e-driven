import React from 'react'
import {shallow} from 'enzyme'
import Book from './index'

describe('Book', () => {
    it('Show book name & book author', () => {
        const book = {
            title: "Building Microservices", author: "Sam Newman"
        }
        const wrapper = shallow(<Book book={book} />)
        expect(wrapper.find('.title').length).toEqual(1)
        expect(wrapper.find('.title').text()).toEqual("Building Microservices")
        expect(wrapper.find('.author').text()).toEqual("Sam Newman")
    })
})