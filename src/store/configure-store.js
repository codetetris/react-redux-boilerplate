import { createStore, compose } from 'redux'
import rootReducer from './index'

const logger = () => window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (x) => x

export default ({ initialState } = {}) => {
  const enhancer = compose(logger())
  const store = createStore(rootReducer, initialState, enhancer)

  if (module.hot) {
    module.hot.accept('./index', () => {
      const nextReducer = require('./index').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
