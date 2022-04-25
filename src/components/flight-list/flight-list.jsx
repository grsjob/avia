import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import style from './flight-list.module.css'
import FlightCart from "../flight-cart/flight-cart";


const FlightList = () => {
    const [count, setCount] = useState(1)
    let [visibleFlights, setvisibleFlights] = useState([])
    const flights = useSelector((state) => state.filter.flights.result.flights)
    const filteredFlights = useSelector((state) => state.filter.filteredFlights)
    const statusFilteredFlightsArr = useSelector((state) => state.app.statusFilteredFlightsArr)

    useEffect(() => {

        if (statusFilteredFlightsArr === 'filterError') {
            console.log(statusFilteredFlightsArr)
            return (
                <div className="alert alert-warning" role="alert">
                    Некорректный фильтр. Нет элементов, соответствующих выбранным параметрам.
                </div>
            )
        }

        filteredFlights.length > 0 ?
            setvisibleFlights(filteredFlights.filter((item, index) => index <= count))
            :
            setvisibleFlights(flights.filter((item, index) => index <= count))

    }, [count, flights, filteredFlights, statusFilteredFlightsArr]);


    return (
        <>
            {
                statusFilteredFlightsArr === 'filterError'
                    ?
                    <div >
                        <div className={style.alertTitle + 'alert alert-danger'} role="alert">
                            Некорректный фильтр. Нет элементов, соответствующих выбранным параметрам.
                        </div>
                    </div>

                    :
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
            }

        </>
    )
        ;
};

export default FlightList;
