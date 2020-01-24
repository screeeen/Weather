import React from 'react'
import './Canvas.css'

export default function Temperature(props) {
  return (
      <div className="temperature-chart" >
        <p className="temperature">{props.temp}</p>
        <div className="temperature-min-max">
          <p className="temperature">{props.temp_max}</p>
          <p className="temperature">{props.temp_min}</p>
        </div>
      </div>
  )
}
