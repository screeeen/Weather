import React from 'react'
import { Link } from 'react-router-dom';

const CitySelector = (props) => {
  return (
    <>
      {props.cityCollection.map((e, i) => {
        return (
          <li key={i}>
            <Link to="/">
            <button onClick={() => {
              props.ChangeCity(e);
            }}>{e}</button>
            </Link>
          </li >
        )
      })}
    </>
  )
}

export default CitySelector