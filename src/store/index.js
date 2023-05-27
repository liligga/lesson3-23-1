import {combineReducers, legacy_createStore as createStore} from 'redux'
import counterReducer from './counterReducer'
import todosReducer from './todosReducer'

const rootReducer = combineReducers({
    todos: todosReducer,
    counter: counterReducer
})

const store = createStore(
    rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store