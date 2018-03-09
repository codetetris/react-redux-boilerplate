import React from 'react'
import { shallow } from 'enzyme'

import LoginPage from '../LoginPage'

import configureStore from '../../store/configureStore'

describe('(Component) LoginPage', () => {
  it('renders without crash', () => {
    const store = configureStore({}).store
    const wrapper = shallow(<LoginPage store={store} />)

    expect(wrapper).toHaveLength(1)
  })
})
