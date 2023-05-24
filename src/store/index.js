import {legacy_createStore as createStore} from 'redux'
import counterReducer from './counterReducer'
import todosReducer from './todosReducer'

const store = createStore(todosReducer)

export default store