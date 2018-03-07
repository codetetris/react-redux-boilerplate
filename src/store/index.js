import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { all } from 'redux-saga/effects'

// Reducers
import authReducer from 'store/auth/reducers'

// Sagas
import authSagas from './auth/sagas'

export function * rootSaga () {
  yield all([
    authSagas()
  ])
}

export default combineReducers({
  auth: authReducer,
  form: formReducer
})
