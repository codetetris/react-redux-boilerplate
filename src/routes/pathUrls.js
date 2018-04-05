import React from 'react'

import DashboardTemplate from '../components/template/DashboardTemplate'

import Login from '../pages/LoginPage'
import Home from '../pages/HomePage'

/**
 * Only logged users can access these routes
 *
 * - Major precedence when user IS LOGGED:
 *    Overwrites the same paths of the public routes
 * - No match when user IS NOT LOGGED:
 *    Render LoginPage component by default
 */
export const privateRoutes = [
  {
    path: '/private1',
    component: Home,
    template: DashboardTemplate,
    default: true
  },
  {
    path: '/private2',
    component: () => <p>private version of /private2</p>
  },
  {
    path: '/private3',
    component: () => <p>private version of /private3</p>
  }
]

/**
 * Only not logged users can access these routes
 *
 * - Precedence over same paths of private routes when user IS NOT LOGGED:
 *    Overwrites the login rendering
 * - No match when user IS LOGGED
 *    Redirect to default private route
 */
export const notLoggedRoutes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/private2',
    component: () => <p>Not logged version</p>
  }
]

/**
 * Both logged and not logged users can access these routes
 *
 * - Minor precedence when user IS LOGGED
 *    Is overwritten by the private route with same paths
 * - Major precedence when user IS NOT LOGGED
 *    Overwrites the same paths of the private and not logged routes
 */
export const publicRoutes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/private3',
    component: () => <p>public version</p>
  }
]
