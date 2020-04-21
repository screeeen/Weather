import React from 'react'
import GetWeatherIcon from './GetWeatherIcon'
import '../index.css'

const WeekChartLine = (props) => {
  return (
    <>
      <tr>
        <td className="day-chart">{props.day}</td>
        {/* <td className="temp-chart">{props.temp.toFixed(0)}º</td> */}
        <td className="icon-chart"><GetWeatherIcon iconId={props.iconId} /></td>
        <td className="max-chart">{props.temp_max.toFixed(0)}º</td>
        <td className="min-chart">{props.temp_min.toFixed(0)}º</td>
      </tr>
    </>
  )
}

export default WeekChartLine
