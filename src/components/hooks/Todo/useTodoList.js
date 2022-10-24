import {useEffect, useState} from 'react';
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";

const fetchList = async () => {
    const res = await axios.get('http://localhost/todos')
    return res.data
}

function UseTodoList(props) {
    const dispatch = useDispatch()

    //실제로는 state가 broadcast 된다 -> 비효율적
    //내부에 작성하는 함수는 필터하는 조건이다
    const refresh = useSelector(state => state.todoReducer.refresh)

    //비동기 처리하는 방법으로 react query 사용하는 방법이 있으나
    //추가적인 다른 문제가 발생한다
    const [todos, setTodos] = useState([])

    useEffect(() => {

        fetchList().then(arr => setTodos(arr))

    }, [refresh])

    return {todos, dispatch}
}

export default UseTodoList;