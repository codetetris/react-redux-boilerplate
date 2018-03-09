import btoa from 'btoa'

import http from '../../utils/http'

// Endpoints
const signInEndpoint = '/users/auth'

export const signIn = credentials => {
  return http
    .post(signInEndpoint, {
      login: credentials.email,
      password: btoa(credentials.password)
    })
    .then(res => res.data)
}
