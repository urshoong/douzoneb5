import React from 'react'
import {setTargetId} from "../../reducers/todoSlice";
import useTodoList from "../hooks/Todo/useTodoList";

function TodoList(props) {

    const {todos, dispatch} = useTodoList()

    return (
        <>
            <ul>
                {todos?.map(({id, title, author}) => <li key={id} onClick={() => { dispatch(setTargetId(id)) }}>{id} --- {title} --- {author}</li>)}
            </ul>
        </>
    );
}

export default TodoList;