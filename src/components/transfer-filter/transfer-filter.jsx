import React from 'react';

const TransferFilter = ({setTransferCount}) => {

    const handleInputChange = (e) => {
        e.target.checked
        ?
            setTransferCount(arr => [...arr, e.target.name])
            :
            setTransferCount(arr => arr.filter(transferCount => transferCount !== e.target.name ))
    }


    return (
        <ul>
            <li>
                <label>
                    <input type='checkbox' name='oneTransfer' onChange={handleInputChange}/>
                    1 пересадка
                </label>
            </li>
            <li>
                <label>
                    <input type='checkbox' name='withoutTransfer' onChange={handleInputChange}/>
                    без пересадок
                </label>
            </li>
        </ul>
    );
};

export default TransferFilter;
