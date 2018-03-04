import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PublicRoute from 'utils/PublicRoute'
import { routesPublics } from './pathUrls'

const Routes = () => (
  <Switch>
    <PublicRoute>
      {
        routesPublics.map((route, index) => (
          <Route key={index} path={route.path} component={route.component} exact />
        ))
      }
    </PublicRoute>
  </Switch>
)

export default Routes
