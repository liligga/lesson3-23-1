const initialState = {
    todos: []
}

const todosReducer = (state=initialState, action) => {
    if (action.type == 'ADD_TODO') {
        return {...state, todos: [...state.todos, action.payload]}
    }
    return state
}

export const addTodo = () => ({type: 'ADD_TODO'})

export default todosReducer