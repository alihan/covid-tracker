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
        borderColor: 'black',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'red',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 7,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
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
