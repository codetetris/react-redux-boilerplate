import { combineReducers } from 'redux'
import authReducer from 'store/auth/reducer'

export default combineReducers({
  auth: authReducer
})
