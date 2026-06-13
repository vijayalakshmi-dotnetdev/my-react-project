import { createSlice } from "@reduxjs/toolkit";

export const loanslice = createSlice({
    name:"loan-app",
    initialState:{
        result:0
    },
    reducers:{
        calculateinterest:(state, action)=>{

            state.result = action.payload + (action.payload*0.08)

        },
        calcinterstfor9 :(state,action) =>{
            state.result = action.payload + (action.payload*0.09)
        }
    }
})

export const {calculateinterest,calcinterstfor9} = loanslice.actions
export default loanslice.reducer