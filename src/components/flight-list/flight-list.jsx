import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import style from './flight-list.module.css'
import FlightCart from "../flight-cart/flight-cart";


const FlightList = () => {
    const [count, setCount] = useState(1)
    let [visibleFlights, setvisibleFlights] = useState([])
    const flights = useSelector((state) => state.filter.flights.result.flights)
    const filteredFlights = useSelector((state) => state.filter.filteredFlights)

    useEffect(() => {

        filteredFlights.length > 0 ?
            setvisibleFlights(filteredFlights.filter((item, index) => index <= count))
            :
            setvisibleFlights(flights.filter((item, index) => index <= count))

    }, [count, flights, filteredFlights]);


    return (
        <ul className={style.flightList}>
            {
                visibleFlights.map(route => {
                        return<li key={route.flightToken}><FlightCart flight={route.flight}/></li>
                    })
            }


            <button onClick={() => setCount(count + 2)}>Показать еще</button>
        </ul>
    );
};

export default FlightList;
