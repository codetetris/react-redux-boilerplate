import Login from '../pages/LoginPage'
import Home from '../pages/HomePage'

import DashboardTemplate from '../components/template/DashboardTemplate'

/**
 * Only not logged users can access these routes
 */
export const notLoggedRoutes = [
  {
    path: '/login',
    component: Login
  }
]

/**
 * Both logged and not logged users can access these routes
 */
export const publicRoutes = [
  {
    path: '/',
    component: Home
  }
]

/**
 * Only logged users can access these routes
 */
export const privateRoutes = [
  {
    path: '/private',
    component: Home,
    template: DashboardTemplate,
    default: true
  },
  {
    path: '/private2',
    component: Home
  }
]
