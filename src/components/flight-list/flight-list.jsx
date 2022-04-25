import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllCarriers} from "../../redux/slices/filterSlice";
import style from './flight-list.module.css'


const FlightList = () => {
    // const [count, setCount] = useState(1)
    // let [visibleFlights, setvisibleFlights] = useState([])
    const flights = useSelector((state) => state.filter.flights.result.flights)
    const filteredFlights = useSelector((state) => state.filter.filteredFlights)

    // useEffect(() => {
    //     setvisibleFlights(flights.filter((item, index) => index <= count))
    // }, [count]);


    return (
        <ul className={style.flightList}>
            {
                filteredFlights.length > 0 ?
                    filteredFlights.map(route => {
                        return <li
                            key={route.flightToken}>
                            {route.flight.price.total.amount}
                            {route.flight.carrier.caption}
                        </li>
                    })
                    :
                    flights.map(route => {
                        return <li
                            key={route.flightToken}>
                            {route.flight.price.total.amount}
                            {route.flight.carrier.caption}
                        </li>
                    })
            }


            {/*<button onClick={() => setCount(count + 2)}>Показать еще</button>*/}
        </ul>
    );
};

export default FlightList;
