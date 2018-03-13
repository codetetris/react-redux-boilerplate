import { all, call, takeLatest, put } from 'redux-saga/effects'

import * as actions from './actions'
import * as types from './constants'
import * as services from './services'

export function * signIn ({ payload }) {
  try {
    const userData = yield call(services.signIn, payload)
    yield put(actions.signInSuccessful(userData))
  } catch (error) {
    yield put(actions.signInFailure(error))
  }
}

// Watchers
export function * watchSignIn () {
  yield takeLatest(types.SIGN_IN, signIn)
}

export default function * authSagas () {
  yield all([watchSignIn()])
}
