import React from 'react'
import { shallow } from 'enzyme'

import HomePage from '../HomePage'

const wrapper = shallow(<HomePage />)

describe('(Component) HomePage', () => {
  it('renders without crash', () => {
    expect(wrapper).toHaveLength(1)
  })
})
