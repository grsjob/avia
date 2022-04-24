import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {
    priceMaxLimitFilter,
    priceMinLimitFilter,
    carriersFilter,
    withoutTransferFilter, oneTransferFilter
} from "../../redux/slices/filterSlice";
import MinMaxFilter from "../min-max-filter/min-max-filter";
import CarriersFilter from "../carriers-filter/carriers-filter";
import TransferFilter from "../transfer-filter/transfer-filter";

const FilterForm = () => {
    const [minValue, setMinValue] = useState('');
    const [maxValue, setMaxValue] = useState('');
    const [selectedCarriers, setSelectedCarriers] = useState([])
    const [transferCount, settransferCount] = useState([]);
    const dispatch = useDispatch()

    const handlerSubmit = (e) => {
        e.preventDefault()
        if (minValue.length > 0 && maxValue === '') { //TODO подумать как упростить ифы
            dispatch(priceMinLimitFilter(minValue))
        } else if (maxValue.length > 0 && minValue === '') {
            dispatch(priceMaxLimitFilter(maxValue))
        } else {
            dispatch(priceMinLimitFilter(minValue))
            dispatch(priceMaxLimitFilter(maxValue))
        }

        if(selectedCarriers.length > 0){
            dispatch(carriersFilter(selectedCarriers))
        }

        if(transferCount.includes('withoutTransfer')){
            dispatch((withoutTransferFilter()))
            console.log(transferCount)
        }
        if(transferCount.includes('oneTransfer')){
            dispatch((oneTransferFilter()))
            console.log(transferCount)
        }
    }


    return (
        <form onSubmit={handlerSubmit}>
            <MinMaxFilter
                setMinValue={setMinValue}
                setMaxValue={setMaxValue}
            />
            <CarriersFilter setSelectedCarriers={setSelectedCarriers}/>
            <TransferFilter settransferCount={settransferCount}/>
            <button type='submit'>Отфильтровать</button>
        </form>
    );
};

export default FilterForm;
