import React from 'react'
import WeekChartLine from './WeekChartLine'


import './Canvas.css'


export default function WeekChart({ data }) {
  const getDay = timestamp => {
    var d = new Date(timestamp * 1000) // Convert the passed timestamp to milliseconds
    var dd = (d.toDateString()).slice(0, 3);         // Add leading 0.
    return dd;
  }

  const dayIndexToDisplay = 6;
  return (
    <div>
      <table cellSpacing="0" cellPadding="0" className="week-chart">
        <tbody>
          {data.list.map((day, index) => {
            if (index % dayIndexToDisplay === 0) {
              return <WeekChartLine key={index} day={getDay(day.dt)} temp={day.main.temp} temp_max={day.main.temp_max} temp_min={day.main.temp_min} />
            }
          })}

        </tbody>
      </table>
    </div>
  )
}
