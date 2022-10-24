import React from 'react'
import {useDispatch} from "react-redux";
import {minus, plus} from "../../reducers/countSlice";

function CounterButtons(){
    //
    //plus나 minus를 실행하면 내가 바꿔야 되는 상태가 나온다
    //그 상태를 store에 dispatch 시켜준다
    // -> 새로운 상태를 리턴한다
    const dispatch = useDispatch()

    return (
        <>
            <button onClick={() => { dispatch(plus()) }}>PLUS</button>
            <button onClick={() => { dispatch(minus()) }}>MINUS</button>
        </>
    )
}

export default CounterButtons