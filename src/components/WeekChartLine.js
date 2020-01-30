import React from 'react'

import Sun from './sun.svg'
import './Canvas.css'

export default function WeekChartLine(props) {

  return (
    <>
      <tr>
        <td className="day-chart">{props.day}</td>
        <td className="temp-chart">   {props.temp.toFixed(0)}º</td>
        <td className="icon-chart"><img src={Sun} alt="sun" /></td>
        <td className="max-chart">{props.temp_max.toFixed(0)}º</td>
        <td className="min-chart">{props.temp_min.toFixed(0)}º</td>
      </tr>
    </>
  )
}
