import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Canvas from './components/Canvas'
import SettingsCanvas from './components/SettingsCanvas';
import CityList from './components/CityList';
import {callWeather,callCurrentSpotWeather} from './GetWeather'
import CitySelector from './components/CitySelector'
import ButtonBackPlus from './components/ButtonBackPlus'
// import GeolocationWidget from './components/GeolocationWidget'
import './index.css'



const App = () => {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [cityCollection, addCity] = useState(["Barcelona"])
  const [city, setCity] = useState("Barcelona");
  const [settingsPageActive, setSettingsPageActive] = useState(false);
  const [coordinates, setCoordinates] = useState(null)


  useEffect(() => {
    callWeather(city,setData,setLoaded)
  }, []);

  const changeCity = (cityName) => {
    setCity(cityName);
    callWeather(cityName,setData,setLoaded);
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

  const setCoordinatesAndShowWeather = (coors) => {
    setCoordinates(coors);
    console.log(coors);
    callCurrentSpotWeather(coors,setData,setLoaded);
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
          <Route exact path="/" component={() => <Canvas data={data} loaded={loaded} cityCollection={cityCollection} callWeather={callWeather} changeCity={changeCity} setCity={setCity} />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
