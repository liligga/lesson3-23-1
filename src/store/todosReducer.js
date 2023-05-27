import axios from "axios"

const initialState = {
    todos: []
}

const todosReducer = (state=initialState, action) => {
    if (action.type == 'ADD_TODO') {
        return {...state, todos: [...state.todos, action.payload]}
    }
    if (action.type == 'REMOVE_TODO') {
        return state
    }
    if (action.type == 'SET_TODOS') {
        return {...state, todos: action.payload}
    }
    return state
}

export const fetchTodos = () => {
    return async (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(
                resp => dispatch(setTodos(resp.data))
            )
    }
}


const setTodos = payload => ({type: 'SET_TODOS', payload})


export const addTodo = payload => (
    {type: 'ADD_TODO', payload}
)

export const deleteTodo = payload => (
    {type: 'REMOVE_TODO', payload}
)



export default todosReducer