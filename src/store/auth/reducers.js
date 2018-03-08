import createReducer from '../createReducer'
import {
  SIGN_IN,
  SIGN_IN_SUCCESSFUL,
  SIGN_IN_FAILURE,
  LOGOUT
} from './constants'

const initialState = {
  user: {},
  isLogged: false,
  isFetching: false,
  isError: false,
  errorMessage: ''
}

const auth = createReducer(initialState, {
  [SIGN_IN]: (state, action) => ({
    ...state,
    isFetching: true,
    isLogged: false,
    isError: false,
    errorMessage: ''
  }),
  [SIGN_IN_SUCCESSFUL]: (state, action) => ({
    ...state,
    isFetching: false,
    isLogged: true,
    isError: false,
    user: action.payload,
    errorMessage: ''
  }),
  [SIGN_IN_FAILURE]: (state, action) => ({
    ...state,
    isFetching: false,
    isLogged: false,
    user: {},
    isError: true,
    errorMessage: action.payload
  }),
  [LOGOUT]: (state, action) => ({
    ...initialState
  })
})

export default auth
