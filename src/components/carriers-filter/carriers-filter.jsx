import React from 'react';
import {useSelector} from "react-redux";

const CarriersFilter = ({setSelectedCarriers}) => {
    const carriers = useSelector(state => state.filter.carriers)

    const handleInputChange = (e) => {
        e.target.checked
            ?
            setSelectedCarriers(arr => [...arr, e.target.name])
            :
            setSelectedCarriers(arr => arr.filter(company => company !== e.target.name))
    }

    return (
        <ul>
            {
                carriers.map(carrier => {
                    return <li
                        key={carrier}>
                        <label>
                            <input type='checkbox' name={carrier} onChange={handleInputChange}/>
                            {carrier}
                        </label>
                    </li>
                })
            }
        </ul>
    );
};

export default CarriersFilter;
