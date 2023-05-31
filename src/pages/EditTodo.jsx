import { useState } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { asyncEditTodo } from "../store/todosReducer"


const EditTodo = () => {
    const [title, setTitle] = useState('')
    const {id} = useParams()
    const dispatch = useDispatch()

    const buttonClick = () => {
        dispatch(asyncEditTodo(id))
    }

    return (
        <div>EditTodo
            <input 
                type="text"
                placeholder="title"
                onChange={e => setTitle(e.target.value)}
                />
                <button onClick={buttonClick}>Изменить</button>
        </div>
    )
}
export default EditTodo