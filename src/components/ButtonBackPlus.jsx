import React from 'react';
import {
  Link
} from "react-router-dom";
import settingsIcon from './settingsIcon.svg'; 

const ButtonBackPlus = (props) => {


return (
  <>
    {props.settingsPageActive ? 
    <Link onClick={()=>props.setSettingsPageActive(false)} to="/"><img src={settingsIcon} alt="settingsIcon"/></Link>
    :
    <Link onClick={()=>props.setSettingsPageActive(true)} to="/settings"><img src={settingsIcon} alt="settingsIcon"/></Link>
    }
  </>
)
}

export default ButtonBackPlus
