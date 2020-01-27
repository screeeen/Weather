import React from 'react'
import './Canvas.css'

export default function Temperature(props) {
  return (
      <div className="temperature-chart" >
        <p className="temperature">{props.temp}<span className="degrees">º</span></p>
        {/* <div className="temperature-min-max">
          <p className="temperature">{props.temp_max}º</p>
          <p className="temperature">{props.temp_min}º</p>
        </div> */}
      </div>
  )
}
