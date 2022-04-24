import React from 'react';

const Sort = ({setSorting}) => {
    const handleSortChange = (e) => {
        setSorting(e.target.value)
    }

    return (
        <ul>
            <li>
                <label>
                    <input type='radio' name='sort' value='ascendingPrice' onChange={handleSortChange} />
                    по возрастанию цены
                </label>
            </li>
            <li>
                <label>
                    <input type='radio' name='sort' value='descendingPrice' onChange={handleSortChange}/>
                    по убыванию цены
                </label>
            </li>
            <li>
                <label>
                    <input type='radio' name='sort' value='byTime' onChange={handleSortChange}/>
                    по времени в пути
                </label>
            </li>
        </ul>
    );
};

export default Sort;
