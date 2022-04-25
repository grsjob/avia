import React, {useState} from 'react';
import style from './flight-cart.module.css'

const FlightCart = ({carrier, price, legs}) => {
    const [isTransferForward, setIsTransferForward] = useState(false);
    const [isTransferBack, setIsTransferBack] = useState(false);

    legs[0].segments.length > 1
        ?
        setIsTransferForward(true)
        :
        setIsTransferForward(false)

    legs[1].segments.length > 1
        ?
        setIsTransferBack(true)
        :
        setIsTransferBack(false)

    return (
        <div className={style.flightList__item + style.flightCart}>
            <header className={style.flightCart__header}>
                <div>{carrier.uid}</div>
                <div className={style.flightCart__price + 'price'}>
                    <p className={style.price__totalPrice}>{price.total.amount +
                        ' '
                        + price.total.currency}</p>
                    <p className={style.price__clarification}>Стоимость для одного взрослого пассажира</p>
                </div>
            </header>
            <div className={style.flightCart__forward}>
                <p className={style.flightCart__airports}>
                    <div className='departure'>
                       <span>
                           {legs[0].segments[0].departureCity.caption
                               +
                               legs[0].segments[0].departureAirport.caption}
                       </span>
                        <span
                            className={style.departure__airportUid}>
                           {legs[0].segments[0].departureAirport.uid}
                       </span>
                    </div>
                    <div className='arrival'>
                                <span>
                                    {
                                        legs[0].segments[segments.length - 1]
                                        .arrivalCity.caption
                                    +
                                        legs[0].segments[segments.length - 1]
                                            .arrivalAirport.caption
                                    }
                                </span>
                        <span className={style.arrival__airportUid}>
                            {legs[0].segments[segments.length - 1]
                                .arrivalAirport.uid}
                        </span>
                    </div>

                </p>
                <p>

                </p>
                <p>

                </p>
                <p>

                </p>
            </div>
            <div className={style.flightCart__back}>
                <p>

                </p>
                <p>

                </p>
                <p>

                </p>
                <p>

                </p>
            </div>
            <button></button>
        </div>
    );
};

export default FlightCart;
