import React, { Component } from 'react'
import Location from './Location'
import WeatherDescription from './WeatherDescription'
import Temperature from './Temperature'
import AnimationOfWeather from './AnimationOfWeather'
import WeekChart from './WeekChart'
import './Canvas.css'
import Calls from '../services/Calls'

class Canvas extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      temp: 9.31,
      feels_like: 6.62,
      temp_min: 4.44,
      temp_max: 12.22,
      pressure: 1021,
      humidity: 81,
      main: "Clouds",
      description: "broken clouds",
      speed: 2.6,
      deg: 250,
      all: 83,
      sunrise: 1579849816,
      sunset: 1579884960,
      timezone: 3600,

    };
  }

  componentDidMount() {
    Calls.get(`/data/2.5/weather?q=Barcelona&units=metric&appid=${process.env.REACT_APP_ENDPOINT}`)
      .then(res => {
        console.log("DATA:", res.data);
        this.setState({
          name: res.data.name,
          temp: res.data.main.temp,
          feels_like: res.data.main.feels_like,
          temp_min: res.data.main.temp_min,
          temp_max: res.data.main.temp_max,
          pressure: res.data.main.pressure,
          humidity: res.data.main.humidity,
          main: res.data.weather[0].main,
          description: res.data.weather[0].description,
          speed: res.data.wind.speed,
          deg: res.data.wind.deg,
          all: res.data.clouds.all,
          sunrise: res.data.sys.sunrise,
          sunset: res.data.sys.sunset,
          timezone: res.data.timezone
        });
      })
  }
  render() {
    return (
      <div className="canvas">
        <Location name={this.state.name}/>
        <WeatherDescription main={this.state.main}/>
        <Temperature temp={this.state.temp.toFixed(0)} temp_max={this.state.temp_max.toFixed(0)} temp_min={this.state.temp_min.toFixed(0)} />
        <AnimationOfWeather />
        <WeekChart />
      </div>
    )
  }
}
export default Canvas