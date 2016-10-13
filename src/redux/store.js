import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux'
import createLogger from 'redux-logger'
import * as reducers from './reducers'

let enhancers = () => {}

if(__DEV__){
  const Reactotron = require('reactotron-react-native').default
  const createTrackingEnhancer = require('reactotron-redux')

  enhancers = compose(
    createTrackingEnhancer(Reactotron, {}),
    applyMiddleware(createLogger())
  )
} else {
  enhancers = applyMiddleware(createLogger())
}

const reducer = combineReducers(reducers)
const store = createStore(reducer, enhancers)

export default store
