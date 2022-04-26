import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import style from './flight-list.module.css'
import FlightCart from "../flight-cart/flight-cart";
import ErrorFallback from '../ErrorFallback/ErrorFallback'
import {ErrorBoundary} from "react-error-boundary";
import {resetFilteredArray} from "../../redux/slices/filterSlice";


const FlightList = () => {
    const [count, setCount] = useState(1)
    let [visibleFlights, setvisibleFlights] = useState([])
    const flights = useSelector((state) => state.filter.flights.result.flights)
    const filteredFlights = useSelector((state) => state.filter.filteredFlights)
    const dispatch = useDispatch()
    useEffect(() => {
        filteredFlights.length > 0 ?
            setvisibleFlights(filteredFlights.filter((item, index) => index <= count))
            :
            setvisibleFlights(flights.filter((item, index) => index <= count))

    }, [count, flights, filteredFlights]);


    return (
        <>
            {
                    <ErrorBoundary
                        FallbackComponent={ErrorFallback}
                        onReset={() => {
                            dispatch(resetFilteredArray())
                        }}
                    >
                        <ul className={style.flightList}>
                            {
                                visibleFlights.map(route => {
                                    return <li key={route.flightToken}><FlightCart flight={route.flight}/></li>
                                })
                            }
                            {
                                filteredFlights.length === visibleFlights.length
                                    ?
                                    null
                                    :
                                    <button onClick={() => setCount(count + 2)}>Показать еще</button>
                            }
                        </ul>
                    </ErrorBoundary>
            }
        </>
    );
};

export default FlightList;
