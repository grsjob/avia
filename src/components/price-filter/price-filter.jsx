import React from 'react';
import style from './price-filter.module.css'

const PriceFilter = ({setMinValue, setMaxValue}) => {
    const handleChangeMinValue = (e) => {
        setMinValue(e.target.value)
    }
    const handleChangeMaxValue = (e) => {
        setMaxValue(e.target.value)

    }
    return (
        <fieldset className={style.priceFilter}>
            <p className={style.priceFilter__title}>Цена</p>
            <label className={style.priceFilter__description}>
                От
                <input className={style.priceFilter__input} onChange={handleChangeMinValue}/>
            </label>
            <label className={style.priceFilter__description}>
                До
                <input className={style.priceFilter__input} onChange={handleChangeMaxValue}/>
            </label>
        </fieldset>
    );
};

export default PriceFilter;
