import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const mapStateToProps = (state) => {
  return {
    isLogged: state.auth.isLogged
  }
}

class PrivateRoute extends Component {
  render () {
    const { isLogged, children } = this.props
    return (
      !isLogged ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: '/hello'
          }}
        />
      )
    )
  }
}

export default connect(mapStateToProps)(PrivateRoute)
