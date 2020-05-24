import React, { useState, useEffect } from 'react';
import Location from './Location'
import WeatherDescription from './WeatherDescription'
import FeelsLike from './FeelsLike'
import Temperature from './Temperature'
import SunSetRise from './SunSetRise'
// import AnimationOfWeather from './AnimationOfWeather'
import WeekChart from './WeekChart'
import Datecomp from './Datecomp'
import Chartcompo from './Chartcompo'
import '../index.css'
import { CSSTransitionGroup } from 'react-transition-group' // ES6
import {callWeather} from './GetWeather'

const Canvas = (props) => {
  const [data, setData] = useState(props.data)
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    console.log ('canvas',props.city)
    props.city && callWeather(props.city,setData,setLoaded)
    // setData(props.data)
  }, [props]);

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
      h = "30";
      b = "40"
    }
    let mediaHex = h.toString(16) + h.toString(16) + (b).toString(16);
    let numTime = 'linear-gradient(#' + mediaHex + ',#333)';
    const divStyle = {
      background: numTime,
      height: "80vh"
    };
    return divStyle;
  }

  return (
    <>
      {loaded && data &&
        (<>
     { console.log('calling canvas',loaded)}
          <div className="weather-canvas" style={getDayColor()}>
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