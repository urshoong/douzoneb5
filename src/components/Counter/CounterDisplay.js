import React from 'react'
import {useSelector} from "react-redux";

const CounterDisplay = (props) => {

    // const state = useSelector(state => state.count.count)
    //useSelector() : 선언한 state를 꺼내서 사용
    const {count} = useSelector(state => state.count)

    //처음 실행시키면 object하나만 잡힌다
    // -> count
    console.log("COUNT : ", count)

    return(
        <>
            <h1>{count}</h1>
        </>
    )
}

export default CounterDisplay