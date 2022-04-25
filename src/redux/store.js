import {configureStore} from "@reduxjs/toolkit";
import filterReducer from './slices/filterSlice'
import appReducer from "./slices/appSlice";

export const store = configureStore({
    reducer: {
        filter: filterReducer,
        app: appReducer,
    },

})