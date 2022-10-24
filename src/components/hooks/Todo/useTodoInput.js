import axios from "axios";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {changeRefresh} from "../../../reducers/todoSlice";

const initState = {
    title: '',
    author: ''
}

const postTodo = async (todo) => {
    const {data} = await axios.post('http://localhost/todos', todo)
    return data
}

function UseTodoInput(props) {
    const dispatch = useDispatch()

    const [todo, setTodo] = useState({...initState})

    const changeProp = (prop, value) => {
        todo[prop] = value
        setTodo({...todo})
    }

    const clickSave = () => {
        postTodo(todo).then(() => {
            setTodo({...initState})
            dispatch(changeRefresh())
        })
    }

    return {todo, changeProp, clickSave}
}

export default UseTodoInput;