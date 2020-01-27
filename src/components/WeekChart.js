import React from 'react'

import Sun from './sun.svg'
import './Canvas.css'

export default function WeekChart(props) {

  return (
    <>
      <tr>
        <td>{props.temp.toFixed(0)}</td>
        <td><img src={Sun} alt="sun" /></td>
        <td>{props.temp_max.toFixed(0)}</td>
        <td>{props.temp_min.toFixed(0)}</td>
      </tr>
    </>
  )
}
