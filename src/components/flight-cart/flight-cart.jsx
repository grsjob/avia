import React, {useEffect, useState} from 'react';
import {
    StyledAirports, StyledAirportUid,
    StyledBack, StyledCarrier,
    StyledFlightCart, StyledFlightDuration,
    StyledForward,
    StyledHeader, StyledLogoBox,
    StyledPrice,
    StyledPriceClarification, StyledSelecteButton, StyledTime,
    StyledTotalPrice, StyledTransfer
} from "./styles";
import {aviaCompanes} from '/src/assets/logo/mock-carriers'


const FlightCart = ({flight}) => {
    const {carrier, price, legs} = flight
    const [transfersForwardCount, setTransfersForwardCount] = useState(0);
    const [transfersBackCount, setTransfersBackCount] = useState(0);
    const [segmentsIndexForward, setSegmentsIndexForward] = useState(0);
    const [segmentsIndexBack, setsegmentsIndexBack] = useState(0);


    useEffect(() => {
        if (legs[0].segments.length > 1) {
            setSegmentsIndexForward(legs[0].segments.length - 1)
            setTransfersForwardCount(legs[0].segments.length - 1)
        } else {
            setSegmentsIndexForward(0)
            setTransfersForwardCount(0)
        }

        if (legs[1].segments.length > 1) {
            setsegmentsIndexBack(legs[1].segments.length - 1)
            setTransfersBackCount(legs[1].segments.length - 1)
        } else {
            setsegmentsIndexBack(0)
            setTransfersBackCount(0)
        }
    }, [transfersForwardCount, segmentsIndexBack, transfersBackCount]);


    const calcDurationFormard = (duration) => {
        let durationInHours = Math.trunc(duration / 60)
        let durationInMinute = duration - durationInHours * 60
        return `${durationInHours} ч ${durationInMinute} мин`
    }

    const formatDate = (date) => {
        let newDate = new Date(date)
        return newDate.toLocaleString()
    }

    // let logos = aviaCompanes.reduce((searchCarrier, company)=>{
    //     if( company.carrier === carrier.caption){
    //         searchCarrier = company.carrier
    //     }
    //     return <img src={searchCarrier.logo} alt={searchCarrier.carrier} //TODO сделать вывод логотипа
    //                 style={{ objectFit: 'cover',}}/>
    // },{})
    // console.log(logos)
    return (
        <StyledFlightCart>
            <StyledHeader>
                <StyledLogoBox>
                    {
                        aviaCompanes
                            .filter(item => item.carrier === carrier.caption)
                            .map(item =>item.png)
                }
                </StyledLogoBox>
                <StyledPrice>
                    <StyledTotalPrice>{price.total.amount +
                        ' '
                        + price.total.currency}
                    </StyledTotalPrice>
                    <StyledPriceClarification>
                        Стоимость для одного взрослого пассажира
                    </StyledPriceClarification>
                </StyledPrice>
            </StyledHeader>
            <StyledForward>
                <StyledAirports>
                    <span>
                        <span>
                               {legs[0].segments[0].departureCity.caption
                                   + ", " +
                                   legs[0].segments[0].departureAirport.caption}
                        </span>
                        <StyledAirportUid>
                               {` (${legs[0].segments[0].departureAirport.uid})`}
                        </StyledAirportUid>
                    </span>
                    <span>
                        <span>
                        {
                            legs[0].segments[segmentsIndexForward].arrivalAirport.caption
                                ?
                                legs[0].segments[segmentsIndexForward].arrivalAirport.caption
                                :
                                ''
                        }
                        </span>
                        <span>
                        {
                            ", "
                        }
                            {
                                legs[0].segments[segmentsIndexForward]
                                    .arrivalAirport.caption
                            }
                        </span>
                        <StyledAirportUid>
                                {` (${legs[0].segments[segmentsIndexForward]
                                    .arrivalAirport.uid})`}
                        </StyledAirportUid>
                    </span>
                </StyledAirports>
                <StyledTime>
                    <span><span>{formatDate(legs[0].segments[0].departureDate)}</span><span></span></span>
                    <StyledFlightDuration>{calcDurationFormard(legs[0].duration)}</StyledFlightDuration>
                    <span><span>{formatDate(legs[0].segments[segmentsIndexForward].arrivalDate)}</span><span></span></span>
                </StyledTime>
                <StyledTransfer>
                    {
                        transfersForwardCount > 0 ? `${transfersForwardCount} пересадка` : null
                    }
                </StyledTransfer>
                <StyledCarrier>
                    {
                        `Рейс выполняет: ${carrier.caption}`
                    }
                </StyledCarrier>
            </StyledForward>
            <StyledBack>
                <StyledAirports>
                    <span>
                        <span>
                           {
                              !!legs[1].segments[0].departureCity.caption
                                   ?
                                   legs[1].segments[0].departureCity.caption //TODO проблема в отсутствии свойства
                                   : ''
                           }
                           </span>
                        <span>
                            {
                                ", " +
                                legs[1].segments[0].departureAirport.caption
                            }
                        </span>
                        <StyledAirportUid>
                               {` (${legs[1].segments[0].departureAirport.uid})`}
                        </StyledAirportUid>
                    </span>
                    <span>
                        <span>
                        {
                            legs[1].segments[segmentsIndexBack]
                                .arrivalCity.caption
                            + ", " +
                            legs[1].segments[segmentsIndexBack]
                                .arrivalAirport.caption
                        }
                        </span>
                        <StyledAirportUid>
                                {` (${legs[1].segments[segmentsIndexBack]
                                    .arrivalAirport.uid})`}
                        </StyledAirportUid>
                    </span>
                </StyledAirports>
                <StyledTime>
                    <span><span>{formatDate(legs[1].segments[0].departureDate)}</span><span></span></span>
                    <StyledFlightDuration>{calcDurationFormard(legs[1].duration)}</StyledFlightDuration>
                    <span><span>{formatDate(legs[1].segments[segmentsIndexBack].arrivalDate)}</span><span></span></span>
                </StyledTime>
                <StyledTransfer>
                    {
                        transfersBackCount > 0 ? `${transfersBackCount} пересадка` : null
                    }
                </StyledTransfer>
                <StyledCarrier>
                    {
                        `Рейс выполняет: ${carrier.caption}`
                    }
                </StyledCarrier>
            </StyledBack>
            <StyledSelecteButton>Выбрать</StyledSelecteButton>
        </StyledFlightCart>
    );
};

export default FlightCart;
