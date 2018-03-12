import React from 'react'
import { shallow } from 'enzyme'

import LoginForm from '../LoginForm'

const wrapper = shallow(<LoginForm />)

describe('(Component) LoginForm', () => {
  it('renders without crash', () => {
    expect(wrapper).toHaveLength(1)
  })
})
