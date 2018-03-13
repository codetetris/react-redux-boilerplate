import React from 'react'
import { shallow } from 'enzyme'

import LoginPage from '../LoginPage'

import configureStore from 'redux-mock-store'

const mockStore = configureStore([])

describe('(Component) LoginPage', () => {
  it('renders without crash', () => {
    const store = mockStore({})
    const wrapper = shallow(<LoginPage store={store} />)

    expect(wrapper).toHaveLength(1)
  })
})
