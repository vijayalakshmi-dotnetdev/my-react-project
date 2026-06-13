import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter-app",
    initialState: {},
    reducers: {
        calculate: (state, action) => {
            const { first, second, operator } = action.payload;
            switch (operator) {
                case '+':
                    state.result = first + second;
                    break;
                case '-':
                    state.result = first - second;
                    break;
                case '*':
                    state.result = first * second;
                    break;
                case '/':
                    if (second == 0)
                        state.result = 'Cannot divide by 0';
                    else
                        state.result = first - second;
                    break;

            }
        },
        clearResult: (state) => { state.result = '' }
    }

})

export const { calculate, clearResult } = counterSlice.actions;
export default counterSlice.reducer;
