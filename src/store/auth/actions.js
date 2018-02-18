export const SIGN_IN = 'auth:SIGN_IN'
export const SIGN_IN_SUCCESS = 'auth:SIGN_IN_SUCCESS'
export const SIGN_IN_ERROR = 'auth:SIGN_IN_ERROR'

export const LOGOUT = 'auth:LOGOUT'
export const LOGOUT_SUCCESS = 'auth:LOGOUT_SUCCESS'

export const IS_LOGGED_IN = 'auth:IS_LOGGED_IN'
export const IS_LOGGED_OUT = 'auth:IS_LOGGED_OUT'

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
