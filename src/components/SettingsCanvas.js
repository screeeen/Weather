import React, { useState, useEffect } from 'react';
import './Canvas.css';

function SettingsCanvas (props) {
  const [city,setCity] = useState("Write a city name...")
  const [cityCollection, addCity] = useState(props.cityCollection)

  useEffect(() => {
    populateHook();
  }, []);

  const populateHook = () => {
    addCity(props.cityCollection);
    console.log(city,cityCollection);
  }


  const handleSubmit = (event)=> {
    event.preventDefault();
    (!props.cityCollection.includes(city)) && 
    props.addCity(cityCollection => [...cityCollection,city]);
    props.ChangeCity(city);
  }


  return (
    <React.Fragment>
    <div >
      {/* <p>we are settings, hello {props}</p> */}
      <form onSubmit={handleSubmit}>
         <input type="text" placeholder="Write a city here..." name="name" value={city} onChange={e => setCity(e.target.value)} />
      <input type="submit" value="Done" />
      </form>
    </div>
    </React.Fragment>
  )
}

export default SettingsCanvas
