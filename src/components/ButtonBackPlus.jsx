import React from 'react';
import {
  Link
} from "react-router-dom";

const ButtonBackPlus = (props) => {

  console.log(props);
  

return (
  <div>
    {props.settingsPageActive ? 
    <Link onClick={()=>props.setSettingsPageActive(false)} id="add-button" to="/"><button>back</button></Link>
    :
    <Link onClick={()=>props.setSettingsPageActive(true)} id="add-button" to="/settings"><button>+</button></Link>
    }
  </div>
)
}

export default ButtonBackPlus
