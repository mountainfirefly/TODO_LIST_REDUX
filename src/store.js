import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { TodoReducer } from './reducers'

const reducers = combineReducers({
  todos: TodoReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store
