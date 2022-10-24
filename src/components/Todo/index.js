import React from 'react';
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";
import TodoMod from "./TodoMod";

function Index(props) {
    return (
        <>
            <TodoInput></TodoInput>
            <TodoList></TodoList>
            <TodoMod></TodoMod>
        </>
    );
}

export default Index;