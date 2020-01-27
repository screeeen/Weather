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
    return <table >
      <tbody className="week-chart">
        {this.state.data.list.map((day, index) => {
          return <WeekChart key={index} day={this.getDay(day.dt)} temp={day.main.temp} temp_max={day.main.temp_max} temp_min={day.main.temp_min} />
        })}
      </tbody>
    </table>
  }

  convertTimestamp(timestamp) {
    console.log('time', new Date(timestamp * 1000));
    var d = new Date(timestamp * 1000), // Convert the passed timestamp to milliseconds
      mm = ('0' + (d.getMonth() + 1)).slice(-2),  // Months are zero based. Add leading 0.
      hh = d.getHours(),
      timehhmm = hh + ':' + mm;
    return timehhmm;
  }

  getDay(timestamp) {
    var d = new Date(timestamp * 1000) // Convert the passed timestamp to milliseconds
    var dd = (d.toDateString()).slice(0,3);         // Add leading 0.
    console.log('dd', dd);
    return dd;
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
            {/* <AnimationOfWeather /> */}
            <SunSetRise sunset={this.convertTimestamp(this.state.data.city.sunset)} sunrise={this.convertTimestamp(this.state.data.city.sunrise)} />
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