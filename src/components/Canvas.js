import React, { Component } from 'react'
import Location from './Location'
import WeatherDescription from './WeatherDescription'
import FeelsLike from './FeelsLike'
import Temperature from './Temperature'
import SunSetRise from './SunSetRise'
import AnimationOfWeather from './AnimationOfWeather'
import WeekChart from './WeekChart'
import Calls from '../services/Calls'

import './Canvas.css'

class Canvas extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loaded: false
    };
  }

  componentDidMount() {
    // Calls.get(`/data/2.5/weather?q=Barcelona&units=metric&appid=${process.env.REACT_APP_ENDPOINT}`)
    Calls.get(`/data/2.5/forecast?q=Vigo&cnt=40&units=metric&appid=${process.env.REACT_APP_ENDPOINT}`)
      // Calls.get(`/data/2.5/forecast/daily?lat=35&lon=139&cnt=10&appid=${process.env.REACT_APP_ENDPOINT}`)
      .then(res => {
        console.log("DATA:", res.data);
        this.setState({
          data: res.data,
        });
        res.data.list ? this.setState({ loaded: true }) : this.setState({ loaded: false });
      })
  }

  generateForecast = () => {
    return <table cellSpacing="0" cellPadding="0" className="week-chart">
      <tbody >
        {this.state.data.list.map((day, index) => {
          return <WeekChart key={index} day={this.getDay(day.dt)} temp={day.main.temp} temp_max={day.main.temp_max} temp_min={day.main.temp_min} />
        })}
      </tbody>
    </table>
  }

  convertTimestamp(timestamp) {
    var d = new Date(timestamp * 1000), // Convert the passed timestamp to milliseconds
      mm = ('0' + (d.getMonth() + 1)).slice(-2),  // Months are zero based. Add leading 0.
      hh = d.getHours(),
      timehhmm = hh + ':' + mm;
    return timehhmm;
  }

  getDay(timestamp) {
    var d = new Date(timestamp * 1000) // Convert the passed timestamp to milliseconds
    var dd = (d.toDateString()).slice(0, 3);         // Add leading 0.
    return dd;
  }

  getDayColor = () => {
    //clear sky: #409cff
    //high noon: fffffb
    //snow: #ddddd
    //rainy: 6d6d6d
    //overcast: #c9e2ff

    let time = "153030"//new Date().toTimeString().slice(0, 9).split(':').join('');
    let h = time.slice(0, 4)// light map to sunset and sunrise 0 to 23

    let start = this.convertTimestamp(this.state.data.city.sunrise).toString().slice(0, 9).split(':').join('');
    let end = this.convertTimestamp(this.state.data.city.sunset).toString().slice(0, 9).split(':').join('');

    start = checkDigits(start);
    end = checkDigits(end);

    function checkDigits(num) {
      if (num.toString().length < 4) {
        return '0' + num
      } else {
        return num;
      }
    }

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
    let numTime = "#" + mediaHex;

    console.log('numtime', numTime, typeof numTime);

    const divStyle = {
      backgroundColor: numTime,
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: '10vh'
    };
    return divStyle;
  }

  range = (start, stop, step) => {
    if (typeof stop == 'undefined') {
      // one param defined
      stop = start;
      start = 0;
    }

    if (typeof step == 'undefined') {
      step = 1;
    }

    if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
      return [];
    }

    var result = [];
    for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
      result.push(i);
    }

    return result;
  };

  render() {
    return (
      <>
        {(this.state.loaded && this.state.data.city.sunrise) ?
          (<>

            <div style={this.getDayColor()}>
              <Location name={this.state.data.city.name} />
              <WeatherDescription description={this.state.data.list[0].weather[0].description} />
              <FeelsLike feelsLike={this.state.data.list[0].main.feels_like.toFixed(0)} />
              <Temperature temp={this.state.data.list[0].main.temp.toFixed(0)} temp_max={this.state.data.list[0].main.temp_max.toFixed(0)} temp_min={this.state.data.list[0].main.temp_min.toFixed(0)} />
              <AnimationOfWeather />
              <SunSetRise sunset={this.convertTimestamp(this.state.data.city.sunset)} sunrise={this.convertTimestamp(this.state.data.city.sunrise)} />
              {this.generateForecast()}
            </div>
          </>)
          :
          (<p>loading...</p>)
        }
      </>
    )
  }
}
export default Canvas