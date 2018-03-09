import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { privateRoutes, publicRoutes, notLoggedRoutes } from './pathUrls'

import RouteWithTemplate from './RouteWithTemplate'
import LoginPage from '../pages/LoginPage'

const mapStateToProps = (state) => {
  return {
    isLogged: state.auth.isLogged
  }
}

const Routes = ({ isLogged }) => {
  const defaultPrivateRoute = privateRoutes.find(route => route.default)

  const setRoute = (route) => route.template
    ? <RouteWithTemplate {...route} key={route.path} />
    : (
      <Route
        key={route.path}
        {...route}
        exact
      />
    )

  /**
   * This preserves the path for redirect to wished page after login
   * @param {*} route
   */
  const setPrivateRoute = route => setRoute({
    ...route,
    component: isLogged ? route.component : LoginPage
  })

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
