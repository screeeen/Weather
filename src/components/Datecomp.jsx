import React, { useState, useEffect } from 'react'
import Moment from 'react-moment'

const Datecomp = (props) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  const tick = () => {
    setDate(new Date());
  }

  return (
    <>
      <Moment className='weather-desc' format='MMMM Do YYYY'></Moment>
      <Moment className='weather-desc' format='hh:mm:ss'>{date}</Moment>
    </>
  )
}

export default Datecomp