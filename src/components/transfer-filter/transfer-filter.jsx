import React from 'react';
import {useSelector} from "react-redux";

const TransferFilter = ({settransferCount}) => {

    const flights = useSelector(state => state.filter.flights.result.flights)

    const handleInputChange = (e) => {
        e.target.checked
        ?
            settransferCount(arr => [...arr, e.target.name])
            :
            settransferCount(arr => arr.filter(transferCount => transferCount !== e.target.name ))
    }


    return (
        <ul>
            <li>
                <label>
                    <input type='checkbox' name='oneTransfer' onChange={handleInputChange}/>
                    1 пересадка
                </label>
            </li>
            <li>
                <label>
                    <input type='checkbox' name='withoutTransfer' onChange={handleInputChange}/>
                    без пересадок
                </label>
            </li>
        </ul>
    );
};

export default TransferFilter;
