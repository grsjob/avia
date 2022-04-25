import React from 'react';
import style from './transfer-filter.module.css'

const TransferFilter = ({setTransferCount}) => {

    const handleInputChange = (e) => {
        e.target.checked
        ?
            setTransferCount(arr => [...arr, e.target.name])
            :
            setTransferCount(arr => arr.filter(transferCount => transferCount !== e.target.name ))
    }


    return (
        <fieldset className='transfersFilters'>
            <p className={style.transfersFilters__title}>Фильтровать</p>
            <ul className={style.transfersFilters__list}>
                <li>
                    <label>
                        <input className={style.transfersFilters__input} type='checkbox' name='severalTransfers' onChange={handleInputChange}/>
                        - 1 пересадка
                    </label>
                </li>
                <li>
                    <label>
                        <input className={style.transfersFilters__input} type='checkbox' name='withoutTransfers' onChange={handleInputChange}/>
                        - без пересадок
                    </label>
                </li>
            </ul>
        </fieldset>
    );
};

export default TransferFilter;
