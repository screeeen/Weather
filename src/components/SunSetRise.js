import React from 'react'

export default function SunSetRise(props) {
  return (
    <div>
    <table >
      <tbody>
      <tr>
        <td>Sunrise: {props.sunrise}</td>
        <td>Sunset: {props.sunset}</td>
      </tr>
      </tbody>
        </table>
        
    </div>
  )
}
