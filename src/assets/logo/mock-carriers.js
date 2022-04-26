import React from "react";
import {ReactComponent as AirFrance} from './airFrance.svg'
import {ReactComponent as Klm} from './klm.svg'
import {ReactComponent as Aeroflot} from './Aeroflot.svg'
import {ReactComponent as TurkHava} from './turkHava.svg'
import {ReactComponent as FinnairOyj} from './finnairOyj.svg'
import {ReactComponent as AirBaltic} from './airBaltic.svg'
import {ReactComponent as Alitalia} from './alitalia.svg'
import {ReactComponent as PegasusHava} from './pegasusHava.svg'
import {ReactComponent as BrusselsAirlines} from './brusselsAirlines.svg'
import {ReactComponent as LotPolishAirlines} from './lotPolishAirlines.svg'



export const aviaCompanes = [
    {
        carrier: 'Air France',
        logo: '/src/assets/logo/airFrance.png',
        png: <AirFrance width={320} height={60}/>
    },
    {
        carrier: 'KLM',
        logo: '/src/assets/logo/klm.png',
        png: <Klm width={320} height={60}/>
    },
    {
        carrier: 'Аэрофлот - российские авиалинии',
        logo: "/src/assets/logo/aeroflot.png",
        png: <Aeroflot width={320} height={60}/>
    },
    {
        carrier: 'TURK HAVA YOLLARI A.O.',
        logo: "/src/assets/logo/turkHava.png",
        png: <TurkHava width={320} height={60}/>
    },
    {
        carrier: 'Finnair Oyj',
        logo: '/src/assets/logo/finnairOyj.png',
        png: <FinnairOyj width={320} height={60}/>
    },
    {
        carrier: 'Air Baltic Corporation A/S',
        logo: '/src/assets/logo/airBaltic.png',
        png: <AirBaltic width={320} height={60}/>
    },
    {
        carrier: 'Alitalia Societa Aerea Italiana',
        logo: '/src/assets/logo/alitalia.png',
        png: <Alitalia width={320} height={60}/>
    },
    {
        carrier: 'Pegasus Hava Tasimaciligi A.S.',
        logo: '/src/assets/logo/pegasusHava.png',
        png: <PegasusHava width={320} height={60}/>
    },
    {
        carrier: 'Brussels Airlines',
        logo: '/src/assets/logo/brusselsAirlines.png',
        png: <BrusselsAirlines width={320} height={60}/>
    },
    {
        carrier: 'LOT Polish Airlines',
        logo: '/src/assets/logo/lotPolishAirlines.png',
        png: <LotPolishAirlines width={320} height={60}/>
    },
]
