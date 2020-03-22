import React, { useState, useEffect } from 'react';
import './Canvas.css'

const SettingsCanvas = props => {
  useEffect(() => {
    console.log(props);
    
  }, []);

  const {
    city: [city, setCity],
    showSettings: [showSettings,setShowSettings]
  } = {
    city: useState(props),
    showSettings : useState(props),
    ...(props.state || {})
  };

  const handleSubmit = event => {
    event.preventDefault();
    // setCity(event.target.value);
    console.log('props',props);
    console.log('hola',city,event.target.value);
    props.callWeather();
  }

  return (    
    <div className="settings" >
      {/* <p>we are settings, hello {props}</p> */}
      <form >
        <label>
          Name:
         <input type="text" name="name" value={city}
            onChange={e => setCity(e.target.value)} />
        </label>
        <input type="submit" value="Submit" onSubmit={handleSubmit} />
      </form>
    </div>
  )
}

export default SettingsCanvas
