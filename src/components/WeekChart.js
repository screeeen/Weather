import React from 'react'
import WeekChartLine from './WeekChartLine'
import {GetDay} from './Utils'
import '../index.css'

const WeekChart = ({ data }) => {

  const dayIndexToDisplay = 6;
  return (
    <div>
      <table cellSpacing="0" cellPadding="0" className="week-chart">
        <tbody>
          {data.list.map((day, index) => {
            if (index % dayIndexToDisplay === 0) {
              return <WeekChartLine key={index} iconId={day.weather[0].icon} day={GetDay(day.dt)} temp={day.main.temp} temp_max={day.main.temp_max} temp_min={day.main.temp_min} />
            }
          })}
        </tbody>
      </table>
    </div>
  )
}

export default WeekChart