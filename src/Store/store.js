import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../pages/Counter/counter.slice";

export const store = configureStore({

    reducer: {
        //All components states 
        counter: counterReducer
    }
})




