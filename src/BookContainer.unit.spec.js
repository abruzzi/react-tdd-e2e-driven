import React from 'react'
import {shallow} from 'enzyme'
import BookContainer from './BookContainer'
import axios from 'axios'

const flushPromises = () => new Promise(resolve => setImmediate(resolve))

describe('BookContainer Component', () => {
    it('Show loading indicator', async () => {
        const books = [
            {title: "Building Microservices"}
        ]
        axios.get = jest.fn().mockImplementation(() => Promise.resolve({data: books}))
        const wrapper = shallow(<BookContainer />)
        expect(wrapper.find('.loading').length).toEqual(1)
        expect(wrapper.find('BookList').length).toEqual(0)

        await flushPromises()
        wrapper.update()

        expect(wrapper.find('.loading').length).toEqual(0)
        expect(wrapper.find('BookList').length).toEqual(1)
    })
})