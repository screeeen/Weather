import React from 'react'
import Geolocation from 'react-geolocation'

const GeolocationWidget = (props) => {

  return (
    <>
      <Geolocation
        render={({
          fetchingPosition,
          position: { coords: { latitude, longitude } = {} } = {},
          error,
          getCurrentPosition
        }) =>
          <>
            <button onClick={getCurrentPosition}>Get Position</button>
            {error &&
              <div>
                {error.message}
              </div>}
            {/* <pre>
        latitude: {latitude}
        longitude: {longitude}
      </pre> */}
      <button onClick={ e => props.setCoordinatesAndShowWeather({ latitude, longitude })}>Show Weather</button>
          </>}
      />
    </>
  )
}

export default GeolocationWidget
