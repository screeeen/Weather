import React from 'react'

const CitySelector = (props) => {

console.log(props);

  return (
    <>
      <p className="weather-desc">{props.CityCollection}·····</p>
      { props.cityCollection.map((e,i) => {
      return (

        //callback on setcity para que pueda hacer el call???
        <button key={i} onClick={() => {props.setCity(e);props.callWeather()}}>{e}</button>
      )
    })}
    </>
  )
}

export default CitySelector