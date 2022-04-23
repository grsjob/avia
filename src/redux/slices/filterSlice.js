import {createSlice} from "@reduxjs/toolkit";
import data from "../../assets/flights.json"

const initialState = {
    flights: data,
    carriers: [...new Set(data.result.flights.map(item => item.flight.carrier.caption))],
    filteredFlights: []

}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        priceMitLimitFilter: (state, action) => {
            state.filteredFlights = state.flights.result.flights.filter(
                item => item.flight.price.total.amount >= action.payload)
        }

    }
})

export const {getAllCarriers} = filterSlice.actions

export default filterSlice.reducer