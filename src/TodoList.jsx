import {useSelector, useDispatch} from 'react-redux'
import { useState } from 'react'
import {addTodo, deleteTodo} from './store/todosReducer'


const TodoList = () => {
    const [newtodo, setNewTodo] = useState('')
    const todos = useSelector(state => state.todos.todos)
    const dispatch = useDispatch()


    const handleClick = () => {
        if (newtodo.trim() !== '') {
            dispatch(addTodo(newtodo))
            setNewTodo('')
        }
    }

    const onDeleteTodo = (todo) => {
        dispatch(deleteTodo(todo))
    }

    return (
        <div>TodoList 
            <input type="text" onChange={e => setNewTodo(e.target.value)} value={newtodo} />
            <button 
                onClick={handleClick}
            >Добавить</button>
            <ul>
                {todos && todos.map( t => 
                    <li onClick={
                        () => onDeleteTodo(t)
                    }>{t}</li>                
                )}
            </ul>
        </div>
    )
}
export default TodoList