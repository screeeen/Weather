import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Canvas from './components/Canvas';
import SettingsCanvas from './components/SettingsCanvas';
import CityList from './components/CityList';
import CitySelector from './components/CitySelector';
import ButtonBackPlus from './components/ButtonBackPlus';
import './index.css';
import useCitySystem from './hooks/useCitySystem'

const App = ({initialCity = null,initialCities = [],initialSettingsPage = false}) => {
  
  const {city,cities,settingsPageActive,updateCity,addCity,deleteCity,setSettingsPage} = useCitySystem({initialCity, initialCities, initialSettingsPage});

  useEffect(() => {
     !city && updateCity('Nuuk');
  }, [city]);

  return (
    <>
      <Router>
        <nav>
          <div id='search-widget'>
            <SettingsCanvas addCity={addCity} cityCollection={cities} />
            <ButtonBackPlus
              setSettingsPageActive={setSettingsPage}
              settingsPageActive={settingsPageActive}
            />
          </div>
          <ul>
            {console.log(cities)}
            <CitySelector updateCity={updateCity} cities={cities} />
            <li />
          </ul>
        </nav>
        <Switch>
          <Route
            exact
            path='/settings'
            component={() => (
              <CityList cityCollection={cities} deleteCity={deleteCity} />
            )}
          />
          <Route
            exact
            path='/'
            component={() => <Canvas city={city} updateCity={updateCity} />}
          />
        </Switch>
      </Router>
    </>
  );
};

export default App;
