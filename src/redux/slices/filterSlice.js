import {createSlice} from "@reduxjs/toolkit";
import data from "../../assets/flights.json"

const initialState = {
    flights: data,
    carriers: [...new Set(data.result.flights.map(item => item.flight.carrier.caption))],
    filteredFlights: []

}

const checkingFilteredState = (state, newFilteredFlights, initialFilteredFlight) => {

    if (state.filteredFlights.length > 0) {
        if (newFilteredFlights.length === state.filteredFlights.length) {
            state.filteredFlights = initialFilteredFlight
        } else {
            state.filteredFlights = newFilteredFlights
        }
    } else {
        state.filteredFlights = initialFilteredFlight
    }

}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        priceMinLimitFilter: (state, action) => {
            let newFilteredFlights = state.filteredFlights.filter(
                item => Number(item.flight.price.total.amount) >= Number(action.payload))

            let initialFilteredFlight = state.flights.result.flights.filter(
                item => Number(item.flight.price.total.amount) >= Number(action.payload))

            checkingFilteredState(state, newFilteredFlights, initialFilteredFlight)
        },
        priceMaxLimitFilter: (state, action) => {
            let newFilteredFlights = state.filteredFlights.filter(
                item => Number(item.flight.price.total.amount) <= Number(action.payload))

            let initialFilteredFlight = state.flights.result.flights.filter(
                item => Number(item.flight.price.total.amount) <= Number(action.payload))


            checkingFilteredState(state, newFilteredFlights, initialFilteredFlight)
        },
        carriersFilter: (state, action) => {
            let newFilteredFlights = state.filteredFlights.filter(
                item => action.payload.includes(item.flight.carrier.caption))

            let initialFilteredFlight = state.flights.result.flights.filter(
                item => action.payload.includes(item.flight.carrier.caption))

            checkingFilteredState(state, newFilteredFlights, initialFilteredFlight)
        },
        withoutTransferFilter: (state) => {
            let newFilteredFlights = state.filteredFlights.filter(
                route => route.flight.legs[0].segments.length === 1
                    && route.flight.legs[1].segments.length === 1)

            let initialFilteredFlight = state.flights.result.flights.filter(
                route => route.flight.legs[0].segments.length === 1
                    && route.flight.legs[1].segments.length === 1)


            checkingFilteredState(state, newFilteredFlights, initialFilteredFlight)
        },
        severalTransfersFilter: (state) => {
            let newFilteredFlights = state.filteredFlights.filter(
                route => route.flight.legs[0].segments.length > 1
                    && route.flight.legs[1].segments.length > 1)

            let initialFilteredFlight = state.flights.result.flights.filter(
                route => route.flight.legs[0].segments.length > 1
                    && route.flight.legs[1].segments.length > 1)

            checkingFilteredState(state, newFilteredFlights, initialFilteredFlight)
        },
        ascendingPriceSorting: (state) => {
            if (state.filteredFlights.length > 0) {
                state.filteredFlights = state.filteredFlights.sort((a, b) =>
                    a.flight.price.total.amount - b.flight.price.total.amount)
            } else {
                state.filteredFlights = state.flights.result.flights.sort((a, b) =>
                    a.flight.price.total.amount - b.flight.price.total.amount)
            }
        },
        descendingPriceSorting: (state) => {
            if (state.filteredFlights.length > 0) {
                state.filteredFlights = state.filteredFlights.sort((a, b) =>
                    b.flight.price.total.amount - a.flight.price.total.amount)
            } else {
                state.filteredFlights = state.flights.result.flights.sort((a, b) =>
                    b.flight.price.total.amount - a.flight.price.total.amount)
            }
        },
        byTimeSorting: (state) => {
            if (state.filteredFlights.length > 0) {
                state.filteredFlights = state.filteredFlights.sort((a, b) =>
                    a.flight.legs.reduce((item, current) => item.duration + current.duration)
                    -
                    b.flight.legs.reduce((item, current) => item.duration + current.duration))
            } else {
                state.filteredFlights = state.flights.result.flights.sort((a, b) =>
                    a.flight.legs.reduce((item, current) => item.duration + current.duration)
                    -
                    b.flight.legs.reduce((item, current) => item.duration + current.duration))
            }
        },
        resetFilteredArray: (state) => {
            state.filteredFlights = []
        }


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
    byTimeSorting,
    resetFilteredArray,
} = filterSlice.actions

export default filterSlice.reducer