import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {
    priceMaxLimitFilter,
    priceMinLimitFilter,
    carriersFilter,
    withoutTransferFilter,
    oneTransferFilter,
    ascendingPriceSorting,
    descendingPriceSorting,
    byTimeSorting
} from "../../redux/slices/filterSlice";
import MinMaxFilter from "../min-max-filter/min-max-filter";
import CarriersFilter from "../carriers-filter/carriers-filter";
import TransferFilter from "../transfer-filter/transfer-filter";
import Sort from "../sort/sort";

const FilterForm = () => {
    const [minValue, setMinValue] = useState('');
    const [maxValue, setMaxValue] = useState('');
    const [selectedCarriers, setSelectedCarriers] = useState([])
    const [transferCount, setTransferCount] = useState([]);
    const [sorting, setSorting] = useState('');
    const dispatch = useDispatch()

    console.log(sorting)

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
        }
        if(transferCount.includes('oneTransfer')){
            dispatch((oneTransferFilter()))
        }
        switch (sorting){
            case 'ascendingPrice':
                dispatch((ascendingPriceSorting()))
                break
            case 'descendingPrice':
                dispatch((descendingPriceSorting()))
                break
            case 'byTime':
                dispatch((byTimeSorting()))
                break
        }
    }


    return (
        <form onSubmit={handlerSubmit}>
            <MinMaxFilter
                setMinValue={setMinValue}
                setMaxValue={setMaxValue}
            />
            <CarriersFilter setSelectedCarriers={setSelectedCarriers}/>
            <TransferFilter settransferCount={setTransferCount}/>
            <Sort setSorting={setSorting}/>
            <button type='submit'>Отфильтровать</button>
        </form>
    );
};

export default FilterForm;
