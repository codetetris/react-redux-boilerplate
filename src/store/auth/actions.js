import {
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
  LOGOUT,
  LOGOUT_SUCCESS,
  IS_LOGGED_IN,
  IS_LOGGED_OUT
} from './constants'

export const signin = () => (
  {
    type: SIGN_IN
  }
)

export const signinSuccessful = (user) => ({
  type: SIGN_IN_SUCCESS,
  payload: user

})

export const signinRejected = (error) => ({
  type: SIGN_IN_ERROR,
  payload: error
})

export const logout = () => (
  {
    type: LOGOUT
  }
)

export const logoutSuccessful = () => (
  {
    type: LOGOUT_SUCCESS
  }
)

export const isLoggedInSuccess = (user) => (
  {
    type: IS_LOGGED_IN,
    payload: user
  }
)

export const isLoggedInFailure = () => (
  {
    type: IS_LOGGED_OUT
  }
)
