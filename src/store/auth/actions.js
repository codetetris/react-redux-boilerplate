import {
  SIGN_IN,
  SIGN_IN_SUCCESSFUL,
  SIGN_IN_FAILURE,
  LOGOUT
} from './constants'

export const signIn = (credentials) => ({
  type: SIGN_IN,
  payload: credentials
})

export const signInSuccessful = (user) => ({
  type: SIGN_IN_SUCCESSFUL,
  payload: user
})

export const signInFailure = (error) => ({
  type: SIGN_IN_FAILURE,
  payload: error
})

export const logout = () => ({
  type: LOGOUT
})
