import {createSlice} from "@reduxjs/toolkit";

//Slice : store를 정의하는 함수
const countSlice = createSlice({
    name: 'count',
    //initialState : 전역으로 쓰일 값을 저장 할 수 있다 -> 전역변수 선언(state)
    initialState: {
        count: 10
    },
    //들어오는 action에 따라서 해당 요청 처리해주는 함수 선언부
    reducers: {
        //여기서 state는 initialState
        plus: state => {
            console.log('plus')
            state.count++
        },
        minus: state => {
            console.log('minus')
            state.count--
        }
    }
    //extraReducer 은 비동기 처리를 위한 reducer
})
//선언한 action을 외부에서 사용하기 위하여 export
export const {plus, minus} = countSlice.actions
//하나의 스토어는 여러개의 reducer를 반환한다
export default countSlice.reducer