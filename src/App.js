import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Canvas from './components/Canvas'
import SettingsCanvas from './components/SettingsCanvas';
import CityList from './components/CityList';
import CitySelector from './components/CitySelector'
import ButtonBackPlus from './components/ButtonBackPlus'
import './index.css'

const App = () => {
  // const [data, setData] = useState([]);
  // const [loaded,setLoaded] = useState(false);
  const [city, setCity] = useState("Barcelona");
  const [cityCollection, addCity] = useState(["Barcelona"])
  const [settingsPageActive, setSettingsPageActive] = useState(false);


  useEffect(() => {
    console.log('app ef',city);
  }, [city]);

  const changeCity = (cityName) => {
    setCity(cityName);
    setSettingsPageActive(false);
  }

  const DeleteCity = (cityToDelete) => {
    let i = cityCollection.indexOf(cityToDelete);
    cityCollection.splice(i, 1);
    addCity(cityCollection);
    changeCity(cityCollection[cityCollection.length - 1])
  }

  const setSettingsPage = () => {
    settingsPageActive ? setSettingsPageActive(false) : setSettingsPageActive(true)
  }

  return (
    <>
      <Router>
        <nav>
          <div id="search-widget">
            {/* <GeolocationWidget setCoordinates={setCoordinates} setCoordinatesAndShowWeather={setCoordinatesAndShowWeather}/> */}
            <SettingsCanvas setCity={setCity} changeCity={changeCity} addCity={addCity} cityCollection={cityCollection} />
            <ButtonBackPlus setSettingsPageActive={setSettingsPageActive} settingsPageActive={settingsPageActive} />
          </div>
          <ul>
            <CitySelector changeCity={changeCity} cityCollection={cityCollection} />
            <li>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/settings" component={() => <CityList cityCollection={cityCollection} DeleteCity={DeleteCity} />} />
          <Route exact path="/" component={() => <Canvas city={city} cityCollection={cityCollection} changeCity={changeCity} setCity={setCity} />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
