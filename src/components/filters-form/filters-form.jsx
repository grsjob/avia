import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllCarriers} from "../../redux/slices/filterSlice";


const FiltersForm = () => {
    const [count, setCount] = useState(1)
    let [visibleFlights, setvisibleFlights] = useState([])
    const flights = useSelector((state) => state.filter.flights.result.flights)

    useEffect(() => {
        setvisibleFlights(flights.filter((item, index) => index <= count))
    }, [count]);


    return (
        <div>
            <button onClick={() => setCount(count + 2)}>Показать еще</button>
        </div>
    );
};

export default FiltersForm;
