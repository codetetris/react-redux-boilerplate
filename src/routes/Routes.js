import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { privateRoutes, publicRoutes, notLoggedRoutes } from './pathUrls'

import LoginPage from '../pages/LoginPage'

const mapStateToProps = (state) => {
  return {
    isLogged: state.auth.isLogged
  }
}

const Routes = ({ isLogged }) => {
  const defaultPrivateRoute = privateRoutes.find(route => route.default)

  const setRoute = route => (
    <Route
      key={route.path}
      path={route.path}
      component={route.component}
      exact
    />
  )

  /**
   * This preserves the path to redirect to wished page after login
   * @param {*} route
   */
  const setPrivateRoute = route => (
    <Route
      key={route.path}
      path={route.path}
      component={isLogged ? route.component : LoginPage}
      exact
    />
  )

  const setRedirect = route => (
    <Redirect
      key={route.path}
      from={route.path}
      to={defaultPrivateRoute.path}
      exact
    />
  )

  return (
    <Switch>
      {notLoggedRoutes.map(isLogged ? setRedirect : setRoute)}
      {publicRoutes.map(setRoute)}
      {privateRoutes.map(setPrivateRoute)}
    </Switch>
  )
}

Routes.propTypes = {
  isLogged: PropTypes.bool.isRequired
}

export default withRouter(connect(mapStateToProps)(Routes))
