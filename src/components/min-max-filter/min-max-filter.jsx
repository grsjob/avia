import React from 'react';

const MinMaxFilter = ({setMinValue, setMaxValue}) => {
    const handleChangeMinValue = (e) => {
        setMinValue(e.target.value)
    }
    const handleChangeMaxValue = (e) => {
        setMaxValue(e.target.value)

    }
    return (
        <>
            <label>
                Min
                <input onChange={handleChangeMinValue}/>
            </label>
            <label>
                Max
                <input onChange={handleChangeMaxValue}/>
            </label>
        </>
    );
};

export default MinMaxFilter;
