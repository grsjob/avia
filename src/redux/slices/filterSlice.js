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
            if (state.filteredFlights.length > 0) {
                state.filteredFlights = state.filteredFlights.filter(
                    item => Number(item.flight.price.total.amount) >= Number(action.payload))
            } else {
                state.filteredFlights = state.flights.result.flights.filter(
                    item => Number(item.flight.price.total.amount) >= Number(action.payload))
            }
        },
        priceMaxLimitFilter: (state, action) => {
            if (state.filteredFlights.length > 0) {
                state.filteredFlights = state.filteredFlights.filter(
                    item => Number(item.flight.price.total.amount) <= Number(action.payload))
            } else {
                state.filteredFlights = state.flights.result.flights.filter(
                    item => Number(item.flight.price.total.amount) <= Number(action.payload))
            }
        },
        carriersFilter: (state, action) => {
            if (state.filteredFlights.length > 0) {
                state.filteredFlights = state.filteredFlights.filter(
                    item => action.payload.includes(item.flight.carrier.caption) //TODO если добавить галочку в уже отфильтрованный массив, то найти эту компанию невозможно
                )
            } else {
                state.filteredFlights = state.flights.result.flights.filter(
                    item => action.payload.includes(item.flight.carrier.caption)
                )
            }
        },
        withoutTransferFilter : (state) =>{
            if (state.filteredFlights.length > 0) {
                state.filteredFlights = state.filteredFlights.filter(
                    route => route.flight.legs[0].segments.length === 1
                        &&  route.flight.legs[1].segments.length === 1)
            } else {
                state.filteredFlights = state.flights.result.flights.filter(
                    route => route.flight.legs[0].segments.length === 1
                        &&  route.flight.legs[1].segments.length === 1)
            }
        },
        severalTransfersFilter : (state) =>{
            if (state.filteredFlights.length > 0) {
                state.filteredFlights = state.filteredFlights.filter(
                    route => route.flight.legs[0].segments.length > 1
                        &&  route.flight.legs[1].segments.length > 1)
            } else {
                state.filteredFlights = state.flights.result.flights.filter(
                    route => route.flight.legs[0].segments.length > 1
                        &&  route.flight.legs[1].segments.length > 1)
            }
        },
        ascendingPriceSorting: (state) =>{
            if(state.filteredFlights.length > 0){
                state.filteredFlights = state.filteredFlights.sort((a, b)=>
                    a.flight.price.total.amount - b.flight.price.total.amount)
            } else {
                state.filteredFlights = state.flights.result.flights.sort((a, b)=>
                    a.flight.price.total.amount - b.flight.price.total.amount)
            }
        },
        descendingPriceSorting: (state) =>{
            if(state.filteredFlights.length > 0){
                state.filteredFlights = state.filteredFlights.sort((a, b)=>
                    b.flight.price.total.amount - a.flight.price.total.amount)
            } else {
                state.filteredFlights = state.flights.result.flights.sort((a, b)=>
                    b.flight.price.total.amount - a.flight.price.total.amount)
            }
        },
        byTimeSorting: (state) =>{
            if(state.filteredFlights.length > 0){
                state.filteredFlights = state.filteredFlights.sort((a, b)=>
                    a.flight.legs.reduce((item, current) => item.duration + current.duration)
                    -
                    b.flight.legs.reduce((item, current) => item.duration + current.duration))
            } else {
                state.filteredFlights = state.flights.result.flights.sort((a, b)=>
                    a.flight.legs.reduce((item, current) => item.duration + current.duration)
                    -
                    b.flight.legs.reduce((item, current) => item.duration + current.duration))
            }
        },


    }
})

export const {
    priceMinLimitFilter,
    priceMaxLimitFilter,
    carriersFilter,
    withoutTransferFilter,
    severalTransfersFilter,
    ascendingPriceSorting,
    descendingPriceSorting,
    byTimeSorting
} = filterSlice.actions

export default filterSlice.reducer