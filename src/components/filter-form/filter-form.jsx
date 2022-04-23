import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {priceMaxLimitFilter, priceMinLimitFilter} from "../../redux/slices/filterSlice";
import MinMaxFilter from "../min-max-filter/min-max-filter";

const FilterForm = () => {
    const [minValue, setMinValue] = useState('');
    const [maxValue, setMaxValue] = useState('');
    const dispatch = useDispatch()

    const handlerSubmit = (e) => {
        e.preventDefault()
        if (minValue.length > 0 && maxValue === '') {
            dispatch(priceMinLimitFilter(minValue))
        } else if (maxValue.length > 0 && minValue === '') {
            dispatch(priceMaxLimitFilter(maxValue))
        } else {
            dispatch(priceMinLimitFilter(minValue))
            dispatch(priceMaxLimitFilter(maxValue))
        }
    }


    return (
        <form onSubmit={handlerSubmit}>
            <MinMaxFilter
                setMinValue={setMinValue}
                setMaxValue={setMaxValue}
            />
            <button type='submit'>Отфильтровать</button>
        </form>
    );
};

export default FilterForm;
