import React, { useState, useEffect } from 'react';
import Location from './Location'
import WeatherDescription from './WeatherDescription'
import FeelsLike from './FeelsLike'
import Temperature from './Temperature'
import SunSetRise from './SunSetRise'
import AnimationOfWeather from './AnimationOfWeather'
import WeekChart from './WeekChart'
import SettingsCanvas from './SettingsCanvas'

import Calls from '../services/Calls'
import './Canvas.css'

function Canvas() {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [city, setCity] = useState("Barcelona");

  useEffect(() => {
    callWeather();
  }, []);


  const callWeather = () => {
    // Calls.get(`/data/2.5/weather?q=Barcelona&units=metric&appid=${process.env.REACT_APP_ENDPOINT}`)
    //Calls.get(`/data/2.5/forecast?q=Barcelona&cnt=40&units=metric&appid=${process.env.REACT_APP_ENDPOINT}`)
    Calls.get(`/data/2.5/forecast?q=${city}&cnt=40&units=metric&appid=${process.env.REACT_APP_ENDPOINT}`)
      // Calls.get(`/data/2.5/forecast/daily?lat=35&lon=139&cnt=10&appid=${process.env.REACT_APP_ENDPOINT}`)
      .then(res => {
        console.log("DATA:", res.data);
        setData(res.data);
        res.data.list ? (setLoaded(true)) : (setLoaded(false));
      })
  }


  const convertTimestamp = timestamp => {
    var d = new Date(timestamp * 1000), // Convert the passed timestamp to milliseconds
      mm = ('0' + (d.getMonth() + 1)).slice(-2),  // Months are zero based. Add leading 0.
      hh = d.getHours(),
      timehhmm = hh + ':' + mm;
    return timehhmm;
  }



  const getDayColor = () => {
    //clear sky: #409cff
    //high noon: fffffb
    //snow: #ddddd
    //rainy: 6d6d6d
    //overcast: #c9e2ff

    let time = new Date().toTimeString().slice(0, 9).split(':').join('');
    let h = time.slice(0, 4)// light map to sunset and sunrise 0 to 23

    let start = convertTimestamp(data.city.sunrise).toString().slice(0, 9).split(':').join('');
    let end = convertTimestamp(data.city.sunset).toString().slice(0, 9).split(':').join('');


    const checkDigits = (num) => {
      if (num.toString().length < 4) {
        return '0' + num
      } else {
        return num;
      }
    }

    start = checkDigits(start);
    end = checkDigits(end);


    let b = 0
    if (h >= start && h <= end) {
      h = 190
      b = 250
    } else {
      console.log('dentro', h);
      h = "30";
      b = "40"
    }
    console.log('components', h, start, end);
    let mediaHex = h.toString(16) + h.toString(16) + (b).toString(16);
    let numTime = 'linear-gradient(#' + mediaHex + ',#333)';
    console.log('numtime', numTime, typeof numTime);
    const divStyle = {
      background: numTime,
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: '10vh'
    };
    return divStyle;
  }


  const handleClick = () => {
    if (showSettings) {
      callWeather();
      setShowSettings(false)
    } 
    else {
      setShowSettings(true);
    }
  }

  // const newCity = lacity => {
  //   setCity(lacity);
  // }


  return (
    <>
      {(loaded && !showSettings) ?

        (<>
          {console.log('load settings', loaded, showSettings)}
          <div style={getDayColor()}>
            <Location name={data.city.name} />
            <WeatherDescription description={data.list[0].weather[0].description} />
            <FeelsLike feelsLike={data.list[0].main.feels_like.toFixed(0)} />
            <Temperature temp={data.list[0].main.temp.toFixed(0)} temp_max={data.list[0].main.temp_max.toFixed(0)} temp_min={data.list[0].main.temp_min.toFixed(0)} />
            {/* <AnimationOfWeather /> */}
            <SunSetRise sunset={convertTimestamp(data.city.sunset)} sunrise={convertTimestamp(data.city.sunrise)} />
            <WeekChart data={data} />
          </div>
        </>)
        :
        (<p>loading...</p>)
      }
      {showSettings ?
        (<>
          <SettingsCanvas state={{ city: [city, setCity], showSettings: [showSettings, setShowSettings] }} callWeather={{callWeather}} />
          {/* <SettingsCanvas setCity={setCity} manolo={"manoelitoor"}/> */}
        </>
        ) : (<></>)}
      <button className="button" onClick={handleClick}>+◊◊◊+</button>
    </>
  )
}
export default Canvas