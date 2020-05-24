import React from 'react'

export default function WeatherDescription(props) {
  console.log('times claled')
  return (
    <>
      <p className="weather-desc">{props.description}</p>
    </>
  )
}
