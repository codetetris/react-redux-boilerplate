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

export const routesPrivates = []
