import React from 'react';
import {useSelector} from "react-redux";
import style from "./carriers-filter.module.css"

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
        <fieldset className={style.carriersFilter}>
            <p className={style.carriersFilter__title}>Авиакомпании</p>
            <ul className={style.carriersFilter__list}>
                {
                    carriers.map(carrier => {
                        return <li
                            key={carrier}>
                            <label>
                                <input className={style.carriersFilter__input} type='checkbox' name={carrier} onChange={handleInputChange}/>
                                {carrier}
                            </label>
                        </li>
                    })
                }
            </ul>
        </fieldset>

    );
};

export default CarriersFilter;
