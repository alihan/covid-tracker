import React from 'react';
import { Line } from 'react-chartjs-2';

export default function LineExample({ data }) {
  const DailyData = {
    labels: Object.keys(data),

    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'red',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        borderWidth: 4,
        pointBorderColor: 'white',
        pointBackgroundColor: 'red',
        pointBorderWidth: 7,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointStyle: 'circle',
        pointRadius: 10,
        pointDotRadius: 6,
        pointDotStrokeWidth: 2,
        datasetStrokeWidth: 3,
        responsive: true,
        data: Object.values(data),
      },
    ],
  };

  return (
    <div>
      <h2>Line Example</h2>
      <Line data={DailyData} />
    </div>
  );
}
