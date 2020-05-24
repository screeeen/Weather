import React from 'react'
import { GetDay } from './Utils'
import { Bar } from 'react-chartjs-2';

const Chartcompo = ({ data }) => {
  const labels = data.list.map(e => GetDay(e.main.dt));
  const temperatureDataset = data.list.map(e => e.main.temp);
  console.log(data.list);
  

  const config = {
    labels: labels,
    datasets: [
      {
        label: 'Forecast',
        barPercentage: 0.5,
        barThickness: 3,
        maxBarThickness: 80,
        minBarLength: 2,
        backgroundColor: 'white',
        borderSkipped: 'top',
        borderColor: 'white',
        data: temperatureDataset
      }
    ],
  }

  const options = {
    responsive: true,
    scales: {
      xAxes: [{
        ticks : {
          fontColor: '#fff'
        },
        gridLines: {
          display: true,
          color: '#bcbcf600'
        },

      }],
      yAxes: [{
        ticks: {
          fontColor: '#fff',
          callback: function (value, index, values) {
            return value + ' º';
          }
        },
        stacked: true,
        gridLines: {
          display: true,
          color: '#bcbcf6',
          drawOnChartArea: false,
        }
      }]
    },
    legend: {
      display: false,
      labels: {
        fontColor: 'white'
      },
    }
  }

  return (
    <Bar data={config} options={options} />
  )
}

export default Chartcompo
