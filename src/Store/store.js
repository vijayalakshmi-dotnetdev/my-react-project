import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../pages/Counter/counter.slice";
import loandataReducer from "../pages/LoanData/loandata.slice";


export const store = configureStore({

    reducer: {
        //All components states 
        counter: counterReducer,
        loandata: loandataReducer
    }
})




