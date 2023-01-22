import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from '../screens/hook/reducers'
import saga from '../screens/hook/saga'

const INITIAL_STATE = {
  username: '',
  password: '',
}
const sagaMiddleware = createSagaMiddleware()
const Store = createStore(
  reducers,
  INITIAL_STATE,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(saga)
export default Store