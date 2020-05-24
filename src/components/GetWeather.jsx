import Calls from '../services/Calls'

export const callWeather = (cityName,setData,setLoaded) => {
  Calls.get(`/data/2.5/forecast?q=${cityName}&cnt=40&units=metric&appid=${process.env.REACT_APP_ENDPOINT}`)
    // Calls.get(`/data/2.5/forecast/daily?lat=35&lon=139&cnt=10&appid=${process.env.REACT_APP_ENDPOINT}`)
    .then(res => {
      setData(res.data);
      res.data.list ? (setLoaded(true)) : (setLoaded(false));
    })
}

// export const callCurrentSpotWeather = (coors,setData,setLoaded) => {
//   const { latitude, longitude } = coors;

//   // Calls.get(`/data/2.5/forecast?q=${cityName}&cnt=40&units=metric&appid=${process.env.REACT_APP_ENDPOINT}`)
//   Calls.get(`/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&cnt=10&appid=${process.env.REACT_APP_ENDPOINT}`)
//     .then(res => {
//       console.log("'calling: ", res.data.city);
//       setData(res.data);
//       res.data.list ? (setLoaded(true)) : (setLoaded(false));
//     })
// }