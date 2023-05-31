import {useSelector, useDispatch} from 'react-redux'
import { useEffect, useState } from 'react'
import {addTodo, deleteTodo, fetchTodos} from '../store/todosReducer'
import { Link } from 'react-router-dom'


const TodoList = () => {
    const [newtodo, setNewTodo] = useState('')
    const todos = useSelector(state => state.todos.todos)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch])
    

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
                    <Link 
                        key={t.id} 
                        to={`/${t.id}`}
                        >{t.title}
                    </Link>                
                )}
            </ul>
        </div>
    )
}
export default TodoList