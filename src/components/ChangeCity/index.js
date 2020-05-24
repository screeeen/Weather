import React from 'react'

export default function index() {
  const [city, setCity] = useState("Barcelona");
  const changeCity = (cityName) => {
    setCity(cityName);
    // callWeather(cityName, setData, setLoaded);
    setSettingsPageActive(false);
  }
  return (
    <div>
      
    </div>
  )
}
