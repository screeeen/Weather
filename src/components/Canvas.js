import React from 'react'
import Location from './Location'
import Temperature from './Temperature'
import AnimationOfWeather from './AnimationOfWeather'
import WeekChart from './WeekChart'
import './Canvas.css'

export default function Canvas() {
  return (
    <div className="canvas">
      <Location />
      <Temperature />
      <AnimationOfWeather />
      <WeekChart />
    </div>
  )
}
