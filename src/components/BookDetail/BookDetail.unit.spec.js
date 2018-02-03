import React from 'react'
import {shallow} from 'enzyme'
import BookDetail from './BookDetail'

describe('BookDetail', () => {
    it('Show book name - author - description', () => {
        const book = {
            title: "Building Microservices", author: "Sam Newman", description: "Building Microservices"
        }
        const wrapper = shallow(<BookDetail book={book} />)
        expect(wrapper.find('.title').length).toEqual(1)
        expect(wrapper.find('.title').text()).toEqual("Building Microservices")
        expect(wrapper.find('.author').text()).toEqual("Sam Newman")
        expect(wrapper.find('.description').text()).toEqual("Building Microservices")
    })
})