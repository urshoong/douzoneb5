import {configureStore} from "@reduxjs/toolkit";
import countSlice from "../reducers/countSlice";
import todoSlice from "../reducers/todoSlice";

const store = configureStore({
    //root Store는 하나
    //reducer에 사용할 reducer를 등록하여 사용한다
    reducer: {
        count: countSlice,
        todoReducer: todoSlice
    }
})

export default store