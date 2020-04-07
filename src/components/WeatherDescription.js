import React from 'react'

export default function WeatherDescription(props) {
  return (
    <>
      <p className="weather-desc">{props.description}</p>
    </>
  )
}
