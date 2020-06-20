import React, { useEffect, useReducer } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Canvas from './components/Canvas';
import SettingsCanvas from './components/SettingsCanvas';
import CityList from './components/CityList';
import CitySelector from './components/CitySelector';
import ButtonBackPlus from './components/ButtonBackPlus';
import './index.css';

const ACTIONS = {
  UPDATE_CITY: 'update_city',
  ADD_CITY: 'add_city',
  DELETE_CITY: 'delete_city',
  SET_SETTINGS_PAGE: 'set_settings_page',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case ACTIONS.ADD_CITY:
      return {
        ...state,
        cities:[...state.cities, action.payload],
      };
    case ACTIONS.DELETE_CITY:
      return {
        ...state,
        cities: action.payload,
      };
    case ACTIONS.SET_SETTINGS_PAGE:
      return {
        ...state,
        settingsPageActive: action.payload,
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    city: null,
    cities: [],
    settingsPageActive: false,
  });

  const { city, cities, settingsPageActive } = state;

  const updateCity = (newCity) => {
    dispatch({ type: ACTIONS.UPDATE_CITY, payload: newCity });
    dispatch({ type: ACTIONS.ADD_CITY, payload: newCity });
    dispatch({ type: ACTIONS.SET_SETTINGS_PAGE, payload: false });
  };

  useEffect(() => {
    if (city === null) {
      updateCity('Nuuk');
    }
  }, [city]);

  const DeleteCity = (cityToDelete) => {
    const i = cities.indexOf(cityToDelete);
    cities.splice(i, 1);
    dispatch({ type: ACTIONS.DELETE_CITY, payload: cityToDelete });
    dispatch({ type: ACTIONS.UPDATE_CITY, payload: cities[cities.length - 1] });
  };

  const setSettingsPage = () => {
    dispatch({
      type: ACTIONS.SET_SETTINGS_PAGE,
      payload: !settingsPageActive,
    });
  };

  return (
    <>
      <Router>
        <nav>
          <div id='search-widget'>
            <SettingsCanvas
              setCity={updateCity}
              changeCity={updateCity}
              addCity={updateCity}
              cityCollection={cities}
            />
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
              <CityList cityCollection={cities} DeleteCity={DeleteCity} />
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
