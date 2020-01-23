import React from 'react'

import './Canvas.css'

export default function Temperature() {
  return (
    <div className="temperature-chart">
      <p className="temperature">30º</p>
      <div className="temperature-min-max">
        <p className="temperature">50º</p>
        <p className="temperature">3º</p>
      </div>
    </div>
  )
}
