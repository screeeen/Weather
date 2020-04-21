import React from 'react'
import { GetDay } from './Utils'
import { Doughnut, Bar } from 'react-chartjs-2';

const Chartcompo = ({ data }) => {
  const labels = data.list.map(e => GetDay(e.main.dt));
  const temperatureDataset = data.list.map(e => e.main.temp);

  console.log(temperatureDataset);
  const cosa = {
    labels: labels,
    datasets: [
      {
        label: 'Forecast',
        barPercentage: 0.5,
        barThickness: 3,
        maxBarThickness: 8,
        minBarLength: 2,
        backgroundColor: 'white',
        borderSkipped: 'top',
        borderColor: 'white',
        data: temperatureDataset
      }
    ],
    options: {
      legend: {
        labels: {
          // This more specific font property overrides the global property
          fontColor: 'white'
        },
        scales: {
          xAxes: [{
            display: true,
            gridLines: {
              display: false
            }
          }],
          yAxes: [{
            display: true,
            gridLines: {
              display: false
            }
          }]
        }
      }
    }
  }




  return (
    <>
      <Bar data={cosa} />
    </>
  )
}

export default Chartcompo