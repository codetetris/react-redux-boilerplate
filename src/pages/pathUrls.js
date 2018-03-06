import Login from './Login/index'
import Home from './Home/index'

export const routesPublics = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    component: Home
  }
]

export const routesPrivates = [
  {
    path: '/login_private',
    component: Login
  }
]
