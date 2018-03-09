import React from 'react'
import PropTypes from 'prop-types'

import reduxImage from '../../assets/redux.png'

import './styles/DashboardTemplate.scss'

const DashboardTemplate = ({ children }) => (
  <div className='dashboard-template'>
    <div>
      <img src={reduxImage} alt='' />
    </div>
    <div className='dashboard-template__children'>{children}</div>
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
