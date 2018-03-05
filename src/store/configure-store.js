import { createStore, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer from './index'

const logger = () => window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (x) => x

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default ({ initialState } = {}) => {
  const enhancer = compose(logger())
  let store = createStore(persistedReducer, initialState, enhancer)
  let persistor = persistStore(store)
  return { store, persistor }
}
