import React from 'react';
import useTodoMod from "../hooks/Todo/useTodoMod";

function TodoMod(props) {

    const {todo, targetId, changeProp, updateTodo, removeTodo} = useTodoMod()

    if(targetId === 0){
        return <></>
    }

    return (
        <>
            <div>
                {todo.id}
            </div>
            <div>
                <input type={'text'} value={todo.title} onChange={(e) => {changeProp('title', e.target.value)}}/>
            </div>
            <div>
                <input type={'text'} value={todo.author} onChange={(e) => {changeProp('author', e.target.value)}}/>
            </div>
            <div>
                <button onClick={() => updateTodo()}>UDPATE</button>
                <button onClick={() => removeTodo()}>REMOVE</button>
            </div>
        </>
    );
}

export default TodoMod;