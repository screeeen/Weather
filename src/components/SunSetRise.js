import React from 'react'

export default function SunSetRise(props) {
  return (
    <div>
    <table >
      <tbody>
      <tr>
        <td>{props.sunset.toDate()}</td>
        <td>{props.sunrise.toFixed(0)}</td>
      </tr>
      </tbody>
        </table>
        
    </div>
  )
}
