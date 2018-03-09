import React from 'react'
import PropTypes from 'prop-types'

const DashboardTemplate = ({ children }) => (
  <div className='dashboard-template'>
    <p>Dashboard:</p>
    <div className='dashboard-template'>{children}</div>
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
