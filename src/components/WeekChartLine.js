import React from 'react'

// import Sun from './sun.svg'
import * as Icons from "@intern0t/react-weather-icons";
import { Rain } from "@intern0t/react-weather-icons";

import GetWeatherIcon from './GetWeatherIcon'

const WeekChartLine = (props) => {


  const myIcon = () => {
    let Icon = GetWeatherIcon(props.iconId);
    console.log(Icon)
    return     <Icon />
  }

  return (
    <>
      {/* <tr> */}
        {/* <Compo /> */}
        {/* {myIcon()} */}
        {/* <Icons.Sprinkle /> */}
        {/* {React.createElement(CustomTag)} */}
        {/* <td className="day-chart">{props.day}</td>
        <td className="temp-chart">{props.temp.toFixed(0)}º</td>
        <td className="max-chart">{props.temp_max.toFixed(0)}º</td>
        <td className="min-chart">{props.temp_min.toFixed(0)}º</td> */}
      {/* </tr> */}
    </>
  )
}

export default WeekChartLine
