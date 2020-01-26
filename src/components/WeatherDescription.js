import React from 'react'

export default function WeatherDescription(props) {
  return (
    <>
      <p className="weather-desc">Fucking {props.description}</p>
    </>
  )
}
