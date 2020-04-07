import React, { useState, useEffect } from 'react';
import './Canvas.css'
import {
 Link
} from "react-router-dom";

function SettingsCanvas (props) {
  const [city,setCity] = useState(props.city)
  const [cityCollection, addCity] = useState(props.cityCollection)

  useEffect(() => {
    populateHook();
  }, []);

  const populateHook = () => {
    // setCity("");
    addCity(props.cityCollection);
    console.log(city,cityCollection);
  }


  const handleSubmit = (event)=> {
    event.preventDefault();
    (!props.cityCollection.includes(city)) && 
    props.addCity(cityCollection => [...cityCollection,city]);
    props.setCity(city);
  }


  return (
    <React.Fragment>
    <div >
      {/* <p>we are settings, hello {props}</p> */}
      <form onSubmit={handleSubmit}>
      <label>
        Name:
         <input type="text" name="name" value={city} onChange={e => setCity(e.target.value)} />
      </label>
      <input type="submit" value="Done" />
      <Link to="/" 
      onClick={() => props.callWeather()}>
      back
      </Link>
      </form>
    </div>
    </React.Fragment>
  )
}

export default SettingsCanvas
