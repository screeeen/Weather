import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Canvas from './components/Canvas'
import SettingsCanvas from './components/SettingsCanvas';
import Calls from './services/Calls'
import CitySelector from './components/CitySelector'
import ButtonBackPlus from './components/ButtonBackPlus'
// import './reset.css'
import './components/Canvas.css'
import './index.css'



const App = () => {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [cityCollection, addCity] = useState(["Barcelona"])
  const [city, setCity] = useState("Barcelona");
  const [settingsPageActive, setSettingsPageActive] = useState(false);

  useEffect(() => {
    callWeather(city)
  }, []);

  const ChangeCity = (cityName) => {
    setCity(cityName);
    callWeather(cityName);
  }

  const callWeather = (cityName) => {
    Calls.get(`/data/2.5/forecast?q=${cityName}&cnt=40&units=metric&appid=${process.env.REACT_APP_ENDPOINT}`)
      // Calls.get(`/data/2.5/forecast/daily?lat=35&lon=139&cnt=10&appid=${process.env.REACT_APP_ENDPOINT}`)
      .then(res => {
        console.log("'calling: ", res.data.city);
        setData(res.data);
        res.data.list ? (setLoaded(true)) : (setLoaded(false));
      })
  }


  const setSettingsPage = () => {
    settingsPageActive ? setSettingsPageActive(false) : setSettingsPageActive(true)
  }

  return (
    <div>
      <Router>
        <nav>
          <div id="search-widget">
            <SettingsCanvas city={city} setLoaded={setLoaded} callWeather={callWeather} setCity={setCity} ChangeCity={ChangeCity} addCity={addCity} cityCollection={cityCollection} />
            <ButtonBackPlus setSettingsPageActive={setSettingsPageActive} settingsPageActive={settingsPageActive} />
          </div>
          <ul>
            {/* tiene que ser scrollable */}
            <CitySelector ChangeCity={ChangeCity} cityCollection={cityCollection} />
            <li>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/settings" component={() => <SettingsCanvas city={city} setLoaded={setLoaded} callWeather={callWeather} setCity={setCity} ChangeCity={ChangeCity} addCity={addCity} cityCollection={cityCollection} />} />
          <Route exact path="/" component={() => <Canvas data={data} loaded={loaded} cityCollection={cityCollection} callWeather={callWeather} ChangeCity={ChangeCity} setCity={setCity} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
