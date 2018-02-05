import React from 'react'
import {shallow} from 'enzyme'
import BookContainer from './index'
import axios from 'axios'

import {mockStore} from '../../mockStore'

describe('BookContainer Component', () => {
    it('Show loading indicator', async () => {
      const store = mockStore({ main: { loading: true } })

      axios.get = jest.fn().mockImplementation(() => Promise.resolve({data: []}))
      const wrapper = shallow(<BookContainer />, {context: {store}})
      expect(wrapper.dive().find('.loading').length).toEqual(1)
    })

  it('Dont show loading indicator', async () => {
    const store = mockStore({ main: { loading: false } })

    axios.get = jest.fn().mockImplementation(() => Promise.resolve({data: []}))
    const wrapper = shallow(<BookContainer />, {context: {store}})
    expect(wrapper.dive().find('.loading').length).toEqual(0)
  })


})