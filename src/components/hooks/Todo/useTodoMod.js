import {useEffect, useState} from 'react';
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {changeRefresh, setTargetId} from "../../../reducers/todoSlice";

const initState = {
    id: 0,
    title: '',
    author: ''
}

const getTodo = async (id) => {
    if(id === 0) return {...initState}
    const {data} = await axios.get(`http://localhost/todos/${id}`)
    return data
}

const putTodo = async (todo) => {
    const {data} = await axios.put(`http://localhost/todos/${todo.id}`, todo)
    return data
}

const delTodo = async (id) => {
    const {data} = await axios.delete(`http://localhost/todos/${id}`)
    return data
}

function UseTodoMod(props) {
    const dispatch = useDispatch()

    const [todo, setTodo] = useState({...initState})

    const targetId = useSelector(state => state.todoReducer.targetId)

    const changeProp = (prop, value) => {
        todo[prop] = value
        setTodo({...todo})
    }

    const updateTodo = () => {
        putTodo(todo).then((data) => {
            setTodo({...initState})
            dispatch(changeRefresh())
            dispatch(setTargetId(0))
        })
    }

    const removeTodo = () => {
        delTodo(targetId).then(() => {
            setTodo({...initState})
            dispatch(changeRefresh())
            dispatch(setTargetId(0))
        })
    }

    useEffect(() => {
        getTodo(targetId).then(todo => {
            setTodo(todo)
        }).catch(() => {

        })
    }, [targetId])

    return {todo, targetId, changeProp, updateTodo, removeTodo}
}

export default UseTodoMod;