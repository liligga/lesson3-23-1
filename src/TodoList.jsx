import {useSelector, useDispatch} from 'react-redux'
import { useState } from 'react'

const TodoList = () => {
    const [newtodo, setNewTodo] = useState('')
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(
            {type: 'ADD_TODO', payload: 2}
        )
    }
    return (
        <div>TodoList 

            <button 
                onClick={handleClick}
            >add</button>
            <ul>
            {todos.map( t => 
                <li>{t}</li>                
            )}
            </ul>
        </div>
    )
}
export default TodoList