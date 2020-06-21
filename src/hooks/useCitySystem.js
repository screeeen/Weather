import {useReducer } from 'react';


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
        cities: [...state.cities, action.payload],
      };
    case ACTIONS.DELETE_CITY:
      let newArray = state.cities.slice();
      const i = newArray.indexOf(action.payload);
      newArray.splice(i, 1);
      return {
        ...state,
        cities: newArray,
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

const useCitySystem = ({initialCity, initialCities, initialSettingsPage}) => {
  const [state, dispatch] = useReducer(reducer, {
    city: initialCity,
    cities: initialCities,
    settingsPageActive: initialSettingsPage,
  });

  const { city, cities, settingsPageActive } = state;

  return {
    city,
    cities,
    settingsPageActive,
    updateCity: newCity => dispatch({ type: ACTIONS.UPDATE_CITY, payload: newCity }),
    addCity: newCity => dispatch({ type: ACTIONS.ADD_CITY, payload: newCity }),
    deleteCity: cityToDelete => dispatch({ type: ACTIONS.DELETE_CITY, payload: cityToDelete }),
    setSettingsPage: settingsPageActive => dispatch({
      type: ACTIONS.SET_SETTINGS_PAGE,
      payload: !settingsPageActive,
    }),
  };
};

export default useCitySystem