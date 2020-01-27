import React, { Component } from 'react'
import Location from './Location'
import WeatherDescription from './WeatherDescription'
import FeelsLike from './FeelsLike'
import Temperature from './Temperature'
import SunSetRise from './SunSetRise'
import AnimationOfWeather from './AnimationOfWeather'
import WeekChart from './WeekChart'
import './Canvas.css'
import Calls from '../services/Calls'

class Canvas extends Component {
  constructor() {
    super();
    this.state = {
      // name: "",
      // temp: 9.31,
      // feels_like: 6.62,
      // temp_min: 4.44,
      // temp_max: 12.22,
      // pressure: 1021,
      // humidity: 81,
      // main: "Clouds",
      // description: "broken clouds",
      // speed: 2.6,
      // deg: 250,
      // all: 83,
      // sunrise: 1579849816,
      // sunset: 1579884960,
      // timezone: 3600,
      data: [],
      loaded: false
    };
  }

  componentDidMount() {
    // Calls.get(`/data/2.5/weather?q=Barcelona&units=metric&appid=${process.env.REACT_APP_ENDPOINT}`)
    Calls.get(`/data/2.5/forecast?q=Barcelona&cnt=10&units=metric&appid=${process.env.REACT_APP_ENDPOINT}`)
      // Calls.get(`/data/2.5/forecast/daily?lat=35&lon=139&cnt=10&appid=${process.env.REACT_APP_ENDPOINT}`)
      .then(res => {
        console.log("DATA:", res.data);
        this.setState({
          // name: res.data.name,
          // temp: res.data.main.temp,
          // feels_like: res.data.main.feels_like,
          // temp_min: res.data.main.temp_min,
          // temp_max: res.data.main.temp_max,
          // pressure: res.data.main.pressure,
          // humidity: res.data.main.humidity,
          // main: res.data.weather[0].main,
          // description: res.data.weather[0].description,
          // speed: res.data.wind.speed,
          // deg: res.data.wind.deg,
          // all: res.data.clouds.all,
          // sunrise: res.data.sys.sunrise,
          // sunset: res.data.sys.sunset,
          // timezone: res.data.timezone
          // name: res.data.list.main.name,
          data: res.data,
        });
        res.data.list ? this.setState({ loaded: true }) : this.setState({ loaded: false });
      })
  }

  generateForecast = () => {
    return <table >
      <tbody className="week-chart">
        {this.state.data.list.map((day, index) => {
          {/* console.log(day); */}
          return <WeekChart key={index} temp={day.main.temp} temp_max={day.main.temp_max} temp_min={day.main.temp_min} />
        })}
      </tbody>
    </table>
  }

  render() {
    this.state.loaded ?
      console.log(this.state.data, this.state.loaded, this.state.data.list[0].weather.description) : console.log("no");

    return (
      <div className="canvas">
        {this.state.loaded ?
          (<>
            <Location name={this.state.data.city.name} />
            <WeatherDescription description={this.state.data.list[0].weather[0].description} />
            <FeelsLike feelsLike={this.state.data.list[0].main.feels_like.toFixed(0)} />
            <Temperature temp={this.state.data.list[0].main.temp.toFixed(0)} temp_max={this.state.data.list[0].main.temp_max.toFixed(0)} temp_min={this.state.data.list[0].main.temp_min.toFixed(0)} />
            <SunSetRise sunset={this.state.data.city.sunset} sunrise={this.state.data.city.sunrise} />
            {/* <AnimationOfWeather /> */}
            {this.generateForecast()}

          </>)
          :
          (<p>loading...</p>)
        }
      </div>
    )
  }
}
export default Canvas