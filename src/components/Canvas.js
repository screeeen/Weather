import React, { useState, useEffect } from 'react';
import Location from './Location'
import WeatherDescription from './WeatherDescription'
import FeelsLike from './FeelsLike'
import Temperature from './Temperature'
import SunSetRise from './SunSetRise'
import WeekChart from './WeekChart'
import Datecomp from './Datecomp'
import Chartcompo from './Chartcompo'
import '../index.css'
import { CSSTransitionGroup } from 'react-transition-group' // ES6
import {callWeather} from './GetWeather'
import {getDayColor,convertTimestamp} from './Utils'

const Canvas = (props) => {
  const [data, setData] = useState({})
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    props.city && callWeather(props.city,setData,setLoaded)
    console.log ('canvas ef',data, props.city)
  }, [props.city]);

  return (
    <>
      {loaded && data &&
        (<>
     { console.log('calling canvas',loaded,data)}
          <div className="weather-canvas" style={getDayColor(data.city.sunrise,data.city.sunset)}>
            <div className="details">
              <CSSTransitionGroup
                transitionName="example"
                transitionAppear={true}
                transitionAppearTimeout={4000}
                transitionEnter={false}
                transitionLeave={false}>
                <Location name={data.city.name} />
                <Datecomp date={data.list[0].dt} />
                <WeatherDescription description={data.list[0].weather[0].description} />
                <Temperature temp={data.list[0].main.temp.toFixed(0)} temp_max={data.list[0].main.temp_max.toFixed(0)} temp_min={data.list[0].main.temp_min.toFixed(0)} />
                <FeelsLike feelsLike={data.list[0].main.feels_like.toFixed(0)} />
                {/* <AnimationOfWeather /> */}
                <SunSetRise sunset={convertTimestamp(data.city.sunset)} sunrise={convertTimestamp(data.city.sunrise)} />
              </CSSTransitionGroup>
            </div>
            <div className="chart">
            <Chartcompo data={data}/>
            </div>
            <div className="table">
              <WeekChart data={data} />
            </div>
          </div>
        </>)
      }
    </>
  )
}
export default Canvas