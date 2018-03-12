import React from 'react'
import PropTypes from 'prop-types'

import reduxImage from '../../assets/redux.png'

import {
  container,
  childrenContainer
} from './styles/DashboardTemplate.style'

const DashboardTemplate = ({ children }) => (
  <div className={container}>
    <div>
      <img src={reduxImage} alt='' />
    </div>
    <div className={childrenContainer}>{children}</div>
  </div>
)

DashboardTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
    PropTypes.array
  ]).isRequired
}

export default DashboardTemplate
