import React, {useEffect, useState} from 'react';
import {
    StyledAirports, StyledAirportUid,
    StyledBack, StyledCarrier,
    StyledFlightCart,
    StyledForward,
    StyledHeader,
    StyledPrice,
    StyledPriceClarification, StyledSelecteButton, StyledTime,
    StyledTotalPrice, StyledTransfer
} from "./styles";

const FlightCart = ({flight}) => {
    const {carrier, price, legs} = flight
    const [transfersForwardCount, setTransfersForwardCount] = useState(0);
    const [transfersBackCount, setTransfersBackCount] = useState(0);
    const [segmentsIndexForward, setSegmentsIndexForward] = useState(0);
    const [segmentsIndexBack, setsegmentsIndexBack] = useState(0);

    useEffect(() => {
        if(legs[0].segments.length > 1){
            setSegmentsIndexForward(legs[0].segments.length - 1)
            setTransfersForwardCount(legs[0].segments.length - 1)
        } else {
            setSegmentsIndexForward(0)
            setTransfersForwardCount(0)
        }

        if(legs[1].segments.length > 1){
            setsegmentsIndexBack(legs[1].segments.length - 1)
            setTransfersBackCount(legs[1].segments.length - 1)
        } else {
            setsegmentsIndexBack(0)
            setTransfersBackCount(0)
        }
    }, [transfersForwardCount,segmentsIndexBack,transfersBackCount]);


    const calcDurationFormard = (duration) => {
        let durationInHours = Math.trunc(duration / 60)
        let durationInMinute = duration - durationInHours * 60
        return `${durationInHours} ч ${durationInMinute} мин`

    }
    return (
        <StyledFlightCart>
            <StyledHeader>
                <div>{carrier.uid}</div>
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
                            legs[0].segments[segmentsIndexForward]
                                .arrivalCity.caption
                            + ", " +
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
                    <span><span>{legs[0].segments[0].departureDate}</span><span></span></span>
                    <span>{calcDurationFormard(legs[0].duration)}</span>
                    <span><span>{legs[0].segments[segmentsIndexForward].arrivalDate}</span><span></span></span>
                </StyledTime>
                <StyledTransfer>
                    {
                        transfersForwardCount > 0 ? `${transfersForwardCount} пересадка`: null
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
                               {legs[1].segments[0].departureCity.caption
                                   + ", " +
                                   legs[1].segments[0].departureAirport.caption}
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
                    <span><span>{legs[1].segments[0].departureDate}</span><span></span></span>
                    <span>{calcDurationFormard(legs[1].duration)}</span>
                    <span><span>{legs[1].segments[segmentsIndexBack].arrivalDate}</span><span></span></span>
                </StyledTime>
                <StyledTransfer>
                    {
                        transfersBackCount > 0 ? `${transfersBackCount} пересадка`: null
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
