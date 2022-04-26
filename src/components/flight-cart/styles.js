import styled from "styled-components";
import clock from '../../assets/clock.png'

export const StyledFlightCart = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  color: #000000;
`

export const StyledHeader = styled.header`
  background-color: blue;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #FFFFFF;
`

export const StyledPrice = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`
export const StyledTotalPrice = styled.p`
  font-size: 20px;
  line-height: 30px;
  margin: 0;
`
export const StyledPriceClarification = styled.p`
  font-size: 10px;
  line-height: 15px;
  margin: 0;
`

export const StyledForward = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`

export const StyledLogoBox = styled.div`
  width: 320px;
  height: 60px;
`

export const StyledBack = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`
export const StyledAirports = styled.p`
  padding: 0 40px;
  font-size: 18px;
  line-height: 27px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`
export const StyledAirportUid = styled.span`
  color: cadetblue;
`
export const StyledTime = styled.p`
  padding: 0 40px;
  font-size: 18px;
  line-height: 27px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 0;
`

export const StyledTransfer = styled.p`
  font-size: 18px;
  line-height: 27px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  color: orange;
  margin: 0;
`


export const StyledCarrier = styled.p`
  padding: 0 40px;
  font-size: 18px;
  line-height: 27px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  position: relative;

  &:after {
    content: '';
    width: 100%;
    height: 2px;
    background-color: blue;
    position: absolute;
    bottom: -10px;
    left: 0;
  }
`
export const StyledSelecteButton = styled.button`
  border: none;
  background-color: orange;
  color: #FFFFFF;
  font-size: 20px;
  line-height: 30px;
  text-transform: uppercase;
  font-weight: 400;
  padding: 5px 20px;
`

export const StyledFlightDuration = styled.span`
  position: relative;

  &:before {
    content: '';
    width: 20px;
    height: 20px;
    position: absolute;
    left: -25px;
    top: 3px;
    background-image: url(${clock});
    background-size: cover;
  }
`