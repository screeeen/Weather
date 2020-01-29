import React from 'react'

import './Canvas.css'


export default function SunSetRise(props) {
  return (
    <div className="sun-desc">
        <p>Sunrise: {props.sunrise} · Sunset: {props.sunset}</p>        
    </div>
  )
}
