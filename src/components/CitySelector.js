import React from 'react'
import { Link } from 'react-router-dom';

const CitySelector = ({updateCity,cities}) => {
  return (
    <>
    {console.log(cities)}
      {cities.map((cityName, i) => {
        return (
          <li key={i}>
            <Link to="/">
            <button autoFocus onClick={() => {
              updateCity(cityName);
            }}>{cityName}</button>
            </Link>
          </li >
        )
      })}
    </>
  )
}

export default CitySelector