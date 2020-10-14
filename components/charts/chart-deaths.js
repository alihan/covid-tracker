import React from 'react'
import { Line } from 'react-chartjs-2'

export default function LineDeaths({ data }) {
  const DailyData = {
    labels: Object.keys(data),

    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: '#E23428',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        borderWidth: 4,
        pointBorderColor: 'rgb(23, 25, 35)',
        pointBackgroundColor: 'white',
        pointBorderWidth: 5,
        pointHoverRadius: 8,
        pointHoverBackgroundColor: 'white',
        pointHoverBorderColor: 'rgb(23, 25, 35)',
        pointHoverBorderWidth: 7,
        pointStyle: 'circle',
        pointRadius: 8,
        pointDotRadius: 6,
        pointDotStrokeWidth: 2,
        datasetStrokeWidth: 3,
        responsive: true,
        data: Object.values(data),
      },
    ],
  }

  return (
    <div>
      <h2>Line Example They all dead :/ </h2>
      <Line data={DailyData} />
    </div>
  )
}
