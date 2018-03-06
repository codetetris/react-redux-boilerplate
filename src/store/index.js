import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import authReducer from 'store/auth/reducer'

export default combineReducers({
  auth: authReducer,
  form: formReducer
})
