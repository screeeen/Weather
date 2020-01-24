import React from 'react'

import Sun from './sun.svg'
import './Canvas.css'

export default function WeekChart() {

  return (
    <>
      <table className="week-chart">
      <tbody>
        <tr>
          <td>Monday</td>
          <td><img src={Sun} alt="sun"/></td>
          <td>30º</td>
          <td>0º</td>
        </tr>
        <tr>
          <td>Tuesday</td>
          <td><img src={Sun} alt="sun"/></td>
          <td>30º</td>
          <td>0º</td>
        </tr>
        <tr>
          <td>Wednesday</td>
          <td><img src={Sun} alt="sun"/></td>
          <td>30º</td>
          <td>0º</td>
        </tr>
        <tr>
          <td>Thursday</td>
          <td><img src={Sun} alt="sun"/></td>
          <td>30º</td>
          <td>0º</td>
        </tr>
        <tr>
          <td>Friday</td>
          <td><img src={Sun} alt="sun"/></td>
          <td>30º</td>
          <td>0º</td>
        </tr>
        <tr>
          <td>Saturday</td>
          <td><img src={Sun} alt="sun"/></td>
          <td>30º</td>
          <td>0º</td>
        </tr>
        <tr>
          <td>Sunday</td>
          <td><img src={Sun} alt="sun"/></td>
          <td>30º</td>
          <td>0º</td>
        </tr>
        </tbody>
      </table>
    </>
  )
}
