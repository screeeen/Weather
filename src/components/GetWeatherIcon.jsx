import React from 'react'
import Icons from './Icons'
import './weather-icons.min.css'

const GetWeatherIcon = ({ iconId }) => {
  if (!iconId) {
    return 'na';
  }

  const icoClass = Icons.icons[iconId];  
  return icoClass ?  <i className={icoClass}></i> : 'na';
}

export default GetWeatherIcon

