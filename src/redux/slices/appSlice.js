import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    statusFilteredFlightsArr: '',
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setStatusFilteredFlightsArr: (state, action) => {
            state.statusFilteredFlightsArr = action.payload
        }
    }
})

export const {
    setStatusFilteredFlightsArr,
} = appSlice.actions

export default appSlice.reducer