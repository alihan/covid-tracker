import React from 'react'
import { Line } from 'react-chartjs-2'

export default function LineRecovered({ data }) {
  const DailyData = {
    labels: Object.keys(data),

    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: '#A2F218',
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
      <h2>Line Example Recovery Baby</h2>
      <Line data={DailyData} options={{
        tooltips: {
          intersect: false,
          backgroundColor: 'rgb(45, 47, 58)',
          cornerRadius: 2,
          bodyFontColor: '#A2F218',
          bodyAlign: 'center',
          bodyFontSize: 14,
          bodyFontStyle: 'bold',
          titleFontFamily: 'Inter',
          displayColors: false,
          xPadding: 10,
          yPadding: 10,
          callbacks: {
            title: () => '',
            label: d => `${d.value} Recovered`,
          },
        },
        maintainAspectRatio: true,
        responsive: true,
        legend: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                color: 'rgba(160, 174, 192,0.2)',
                borderDash: [0],
                lineWidth: 1,
                drawBorder: true,
                drawTicks: false,
              },
              ticks: {
                fontColor: '#fff',
                fontSize: 14,
                padding: 24,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                color: 'rgba(160, 174, 192, 0.2 )',
                borderDash: [0],
                lineWidth: 1,
                drawBorder: true,
                drawTicks: false,
              },
              ticks: {
                fontColor: '#fff',
                fontSize: 14,
                padding: 21,
              },
            },
          ],
        },
      }} />
    </div>
  )
}
