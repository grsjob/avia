import React from 'react';
import style from './sort.module.css'

const Sort = ({setSorting}) => {
    const handleSortChange = (e) => {
        setSorting(e.target.value)
    }

    return (
        <fieldset className='sorting'>
            <p className={style.sorting__title}>Сортировать</p>
            <ul className={style.sorting__list}>
                <li>
                    <label>
                        <input className={style.sorting__input} type='radio' name='sort' value='ascendingPrice' onChange={handleSortChange} />
                        - по возрастанию цены
                    </label>
                </li>
                <li>
                    <label>
                        <input className={style.sorting__input} type='radio' name='sort' value='descendingPrice' onChange={handleSortChange}/>
                        - по убыванию цены
                    </label>
                </li>
                <li>
                    <label>
                        <input className={style.sorting__input} type='radio' name='sort' value='byTime' onChange={handleSortChange}/>
                        - по времени в пути
                    </label>
                </li>
            </ul>
        </fieldset>

    );
};

export default Sort;
