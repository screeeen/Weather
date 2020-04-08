import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";

import Canvas from './components/Canvas'
import SettingsCanvas from './components/SettingsCanvas';
import Calls from './services/Calls'

const App = () => {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [cityCollection, addCity] = useState(["Barcelona", "Berlin"])
  const [city, setCity] = useState("Barcelona");

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

  return (
    <div>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/settings">settings</Link>
            </li>
          </ul>
        </nav>
        <button onClick={callWeather}>call </button>
        <Switch>
          <Route exact path="/settings" component={() => <SettingsCanvas city={city} setLoaded={setLoaded} callWeather={callWeather} setCity={setCity} addCity={addCity} cityCollection={cityCollection} />} />
          <Route exact path="/" component={() => <Canvas data={data} loaded={loaded} cityCollection={cityCollection} callWeather={callWeather} ChangeCity={ChangeCity} setCity={setCity} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
