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


  return (    
    <div className="settings" >
      {/* <p>we are settings, hello {props}</p> */}
      <form >
        <label>
          Name:
         <input type="text" name="name" value={city}
            onChange={e => setCity(e.target.value)} />
        </label>
        {/* <button className="button" onClick={props.handleClick}>+◊◊◊+</button> */}
      </form>
    </div>
  )
}

export default SettingsCanvas
