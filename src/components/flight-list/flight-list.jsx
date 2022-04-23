import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllCarriers} from "../../redux/slices/filterSlice";


const FlightList = () => {
    // const [count, setCount] = useState(1)
    // let [visibleFlights, setvisibleFlights] = useState([])
    const flights = useSelector((state) => state.filter.flights.result.flights)
    const filteredFlights = useSelector((state) => state.filter.filteredFlights)

    // useEffect(() => {
    //     setvisibleFlights(flights.filter((item, index) => index <= count))
    // }, [count]);


    return (
        <ol>
            {
                filteredFlights.length > 0 ?
                    filteredFlights.map(route => {
                        return <li key={route.flightToken}>{route.flight.price.total.amount}</li>
                    })
                    :
                    flights.map(route => {
                        return <li key={route.flightToken}>{route.flight.price.total.amount}</li>
                    })
            }


            {/*<button onClick={() => setCount(count + 2)}>Показать еще</button>*/}
        </ol>
    );
};

export default FlightList;
