import React from 'react'
import {shallow} from 'enzyme'
import BookContainer from './index'
import axios from 'axios'

import {mockStore} from '../../mockStore'

describe('BookContainer Component', () => {
  it('Show loading indicator', () => {
    const store = mockStore({main: {loading: true}})

    axios.get = jest.fn().mockImplementation(() => Promise.resolve({data: []}))
    const wrapper = shallow(<BookContainer />, {context: {store}}).dive()
    expect(wrapper.find('.loading').length).toEqual(1)
  })

  it('Dont show loading indicator', () => {
    const store = mockStore({main: {loading: false}})

    axios.get = jest.fn().mockImplementation(() => Promise.resolve({data: []}))
    const wrapper = shallow(<BookContainer />, {context: {store}}).dive()
    expect(wrapper.find('.loading').length).toEqual(0)
  })
})