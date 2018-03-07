import Login from './Login'
import Home from './Home'

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
    default: true
  },
  {
    path: '/private2',
    component: Home
  }
]
