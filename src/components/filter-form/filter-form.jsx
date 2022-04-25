import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    priceMaxLimitFilter,
    priceMinLimitFilter,
    carriersFilter,
    withoutTransferFilter,
    severalTransfersFilter,
    ascendingPriceSorting,
    descendingPriceSorting,
    byTimeSorting
} from "../../redux/slices/filterSlice";
import PriceFilter from "../price-filter/price-filter";
import CarriersFilter from "../carriers-filter/carriers-filter";
import TransferFilter from "../transfer-filter/transfer-filter";
import Sort from "../sort/sort";
import style from "./filter-form.module.css";
import {setStatusFilteredFlightsArr} from "../../redux/slices/appSlice";

const FilterForm = () => {
    const [minValue, setMinValue] = useState('');
    const [maxValue, setMaxValue] = useState('');
    const [selectedCarriers, setSelectedCarriers] = useState([])
    const [transferCount, setTransferCount] = useState([]);
    const [sorting, setSorting] = useState('');
    const dispatch = useDispatch()
    const filteredFlights = useSelector((state) => state.filter.filteredFlights)

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

        if(transferCount.includes('withoutTransfers')){
            dispatch((withoutTransferFilter()))
        }
        if(transferCount.includes('severalTransfers')){
            dispatch((severalTransfersFilter()))
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
        <form onSubmit={handlerSubmit} className={style.filtersForm}>
            <Sort setSorting={setSorting}/>
            <TransferFilter setTransferCount={setTransferCount}/>
            <PriceFilter
                setMinValue={setMinValue}
                setMaxValue={setMaxValue}
            />
            <CarriersFilter setSelectedCarriers={setSelectedCarriers}/>

            <button className={style.filtersForm__buttonSubmit} type='submit'>Отфильтровать</button>
        </form>
    );
};

export default FilterForm;
