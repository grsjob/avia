import {createSlice} from "@reduxjs/toolkit";
import data from "../../assets/flights.json"

const initialState = {
    flights: data,
    carriers: [],
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        getAllCarriers: (state) =>{
            state.carriers = state.flights.result.flights.map(flight => {
                let carriersArray = new Set()
                carriersArray.add(flight.flight.carrier.caption)
                return carriersArray
            })
        }

    }
})

export const {getAllCarriers} = filterSlice.actions

export default filterSlice.reducer