import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PublicRoute from 'utils/PublicRoute'
import PrivateRoute from 'utils/PrivateRoute'
import { routesPublics, routesPrivates } from './pathUrls'

const Routes = () => ([
  <PublicRoute>
    <Switch>
      {
        routesPublics.map((route, index) => (
          <Route key={index} path={route.path} component={route.component} exact />
        ))
      }
    </Switch>
  </PublicRoute>,
  <PrivateRoute>
    <Switch>
      {
        routesPrivates.map((route, index) => (
          <Route key={index} path={route.path} component={route.component} exact />
        ))
      }
    </Switch>
  </PrivateRoute>
])

export default Routes
