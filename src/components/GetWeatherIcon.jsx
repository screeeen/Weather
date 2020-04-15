import React from 'react'
import Icons from './Icons'
import './weather-icons.min.css'

const GetWeatherIcon = ({ iconId }) => {

  console.log(iconId);

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


  // getIcon(iconId);
  // let Tag="";
  // const k = `${iconId}`;
  // icons.map((icon, i) => {
  //   if (icon.includes(k)) {
  //     const IconName = values[i].charAt(0).toUpperCase() + values[i].slice(1);
  //     console.log (Tag)
  //     Tag = `${IconName}`;
  //     return null;
  //   }
  // })
  // console.log(Tag);

  // return Tag