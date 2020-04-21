import React from 'react'
import Icons from './Icons'
import './weather-icons.min.css'

const GetWeatherIcon = ({ iconId }) => {

  if (!iconId) {
    return 'na';
  }

  const icoClass = Icons.icons[iconId];
  console.log(Icons.icons[iconId]);
  
  if (icoClass) {
    return <i className={icoClass}></i> ;
  }
  
  return 'na';
}

export default GetWeatherIcon

