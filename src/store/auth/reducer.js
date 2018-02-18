import createReducer from '../create-reducer'
import {
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
  LOGOUT,
  LOGOUT_SUCCESS,
  IS_LOGGED_IN,
  IS_LOGGED_OUT
} from './actions'

const initialState = {
  user: {},
  isLogged: null,
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
  [SIGN_IN_SUCCESS]: (state, action) => ({
    ...state,
    isFetching: false,
    isLogged: true,
    isError: false,
    user: action.payload,
    errorMessage: ''
  }),
  [SIGN_IN_ERROR]: (state, action) => ({
    ...state,
    isFetching: false,
    isLogged: false,
    user: {},
    isError: true,
    errorMessage: action.payload
  }),
  [LOGOUT]: (state, action) => ({
    ...state,
    isFetching: true,
    isLogged: false,
    isError: false,
    errorMessage: ''
  }),
  [LOGOUT_SUCCESS]: (state, action) => ({
    ...state,
    user: {},
    isFetching: false,
    isLogged: false,
    errorMessage: ''
  }),
  [IS_LOGGED_IN]: (state, action) => ({
    ...state,
    isFetching: false,
    isLogged: true,
    user: action.payload,
    errorMessage: ''
  }),
  [IS_LOGGED_OUT]: (state, action) => ({
    ...state,
    isFetching: false,
    isLogged: false,
    errorMessage: '',
    user: {}
  })
})

export default auth
