import React from 'react'

const CitySelector = (props) => {
  return (
    <>
      {props.cityCollection.map((e, i) => {
        return (
          //callback on setcity para que pueda hacer el call???
          <li key={i}>
            <button onClick={() => {
              props.ChangeCity(e);
            }}>{e}</button>
          </li>
        )
      })}
    </>
  )
}

export default CitySelector