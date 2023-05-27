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
    return state
}

export const addTodo = payload => (
    {type: 'ADD_TODO', payload}
)

export const deleteTodo = payload => (
    {type: 'REMOVE_TODO', payload}
)



export default todosReducer