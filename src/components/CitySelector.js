import React from 'react'
import { Link } from 'react-router-dom';

const CitySelector = ({changeCity,cityCollection}) => {
  return (
    <>
      {cityCollection.map((cityName, i) => {
        return (
          <li key={i}>
            <Link to="/">
            <button autoFocus onClick={() => {
              changeCity(cityName);
            }}>{cityName}</button>
            </Link>
          </li >
        )
      })}
    </>
  )
}

export default CitySelector