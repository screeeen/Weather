import React from 'react'
import IconChart from './IconChart'
import * as Icons from "@intern0t/react-weather-icons";


const icons = Object.keys(IconChart);
const values = Object.values(IconChart);

const GetWeatherIcon = (iconId) => {
  let Tag="";
  const k = `${iconId}`;
  icons.map((icon, i) => {
    if (icon.includes(k)) {
      const IconName = values[i].charAt(0).toUpperCase() + values[i].slice(1);
      console.log (Tag)
      Tag = `${IconName}`;
      return null;
    }
  })
  console.log(Tag);
  
  return Tag
}



export default GetWeatherIcon