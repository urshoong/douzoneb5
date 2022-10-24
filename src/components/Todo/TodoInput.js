import React from 'react';
import useTodoInput from "../hooks/Todo/useTodoInput";


function TodoInput(props) {

    const {todo, changeProp, clickSave} = useTodoInput()

    return (
        <>
            <div>
                <input type={'text'} value={todo.title} onChange={(e) => {changeProp('title', e.target.value)}}/>
            </div>
            <div>
                <input type={'text'} value={todo.author} onChange={(e) => {changeProp('author', e.target.value)}}/>
            </div>
            <div>
                <button onClick={() => clickSave()}>SAVE</button>
            </div>
        </>
    );
}

export default TodoInput;