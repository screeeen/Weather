import React from 'react'

export default function FeelsLike(props) {
  return (
    <>
      <p className="weather-desc">Feels like {props.feelsLike}º</p>
    </>
  )
}
