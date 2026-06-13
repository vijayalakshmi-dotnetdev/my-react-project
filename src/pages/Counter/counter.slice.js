import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter-app",
    initialState: {
        count: 0
    },
    reducers: {
        add: (state, action) => {
            state.count += 1
        },
        sub: (state, action) => {
            state.count -= 1
        },
        addBy10: (state, action) => {
            console.log("action==>",action)
            state.count += action.payload.input
        }
    }

})

export const { add,sub,addBy10 } = counterSlice.actions;
export default counterSlice.reducer;
