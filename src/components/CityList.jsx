import React from 'react'
import '../index.css';

const CityList = (props) => {
  return (
    <>
      <ul className="delete-list">
        {props.cityCollection.map((e, i) => {
          return (
            <li className="delete-bar"key={i}>
              <p>{e}</p>
              {props.cityCollection.length > 1 &&
                <button onClick={() => { props.DeleteCity(e) }}><p>Delete</p></button>
              }
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default CityList
