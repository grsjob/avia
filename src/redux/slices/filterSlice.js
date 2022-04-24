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
        priceMinLimitFilter: (state, action) => {
            if(state.filteredFlights.length > 0){
                state.filteredFlights = state.filteredFlights.filter(
                    item => Number(item.flight.price.total.amount) >= Number(action.payload))
            } else {
                state.filteredFlights = state.flights.result.flights.filter(
                    item => Number(item.flight.price.total.amount) >= Number(action.payload))
            }
        },
        priceMaxLimitFilter: (state, action) => {
            if(state.filteredFlights.length > 0){
                state.filteredFlights = state.filteredFlights.filter(
                    item => Number(item.flight.price.total.amount) <= Number(action.payload))
            } else {
                state.filteredFlights = state.flights.result.flights.filter(
                    item => Number(item.flight.price.total.amount) <= Number(action.payload))
            }
        },
        carriersFilter: (state, action) => {
            if(state.filteredFlights.length > 0){
                state.filteredFlights = state.filteredFlights.filter(
                    item => action.payload.includes(item.flight.carrier.caption)
                )
            } else {
                state.filteredFlights = state.flights.result.flights.filter(
                    item => action.payload.includes(item.flight.carrier.caption)
                )
            }
        },


    }
})

export const {priceMinLimitFilter, priceMaxLimitFilter, carriersFilter} = filterSlice.actions

export default filterSlice.reducer