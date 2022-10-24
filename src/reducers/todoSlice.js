import {createSlice} from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        refresh: false,
        targetId: 0
    },
    reducers: {
        changeRefresh: (state) => {
            state.refresh = !state.refresh
        },
        setTargetId: (state, action) => {
            state.targetId = action.payload
        }
    }
})

export const {changeRefresh, setTargetId} = todoSlice.actions
export default todoSlice.reducer