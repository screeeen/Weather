import React from 'react'

import Sun from './sun.svg'
import './Canvas.css'

export default function WeekChart() {

  return (
    <>
      <table className="week-chart">
        {/* <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
  </tr> */}
        <tr>
          <td>Monday</td>
          <img src={Sun} alt="sun"/>
          <td>30º</td>
          <td>0º</td>
        </tr>
        <tr>
          <td>Tuesday</td>
          <img src={Sun} alt="sun"/>

          <td>30º</td>
          <td>0º</td>
        </tr>
        <tr>
          <td>Wednesday</td>
          <img src={Sun} alt="sun"/>

          <td>30º</td>
          <td>0º</td>
        </tr>
        <tr>
          <td>Thursday</td>
          <img src={Sun} alt="sun"/>

          <td>30º</td>
          <td>0º</td>
        </tr>
        <tr>
          <td>Friday</td>
          <img src={Sun} alt="sun"/>

          <td>30º</td>
          <td>0º</td>
        </tr>
        <tr>
          <td>Saturday</td>
          <img src={Sun} alt="sun"/>

          <td>30º</td>
          <td>0º</td>
        </tr>
        <tr>
          <td>Sunday</td>
          <img src={Sun} alt="sun"/>

          <td>30º</td>
          <td>0º</td>
        </tr>
      </table>
    </>
  )
}
