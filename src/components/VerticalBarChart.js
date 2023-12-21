import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  indexAxis: 'x',
  scales: {
    x: {
      title: {
        display: true,
        text: 'Month',
      },
    },
    y: {
      title: {
        display: true,
        text: 'Amonut($)',
      },
      min: 0,
      ticks: {
        callback: (value) => `${value}%`,
      },
    },
  },

  elements: {
    bar: {
      borderWidth: 0,
      borderRadius: 5
    },
  },
  plugins: {
    legend: {
      position: 'top', // Place legends on the right side
      labels: {
        boxWidth: 8,
        boxHeight: 8, // Adjust the box width of legend items
        borderRadius: 5, // Set border radius to make them round
        color: '#475467', // Change legend text color
        font: {
          size: 14, // Change the font size of legend text
          color: '#475467'
        },
      },
    },
  },
};


const data = {
  labels: ['Janu', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Revenue',
      data: [5000, 6000, 7000, 5500, 8000, 9000, 2000, 3000, 3500, 5000, 6000, 7000],
      backgroundColor: '#2970FF',
      borderColor: '#2970FF',
      borderRadius: 5
    },
    {
      label: 'Cost',
      data: [3000, 4000, 4500, 3500, 5000, 5500,5000, 6000, 7000, 5500, 8000, 9000],
      backgroundColor: '#B2CCFF',
      borderColor: '#B2CCFF',
      borderRadius: 5
    },
    {
      label: 'Profit',
      data: [2000, 2000, 2500, 2000, 3000, 3500, 5000, 6000, 7000, 5500, 8000, 9000],
      backgroundColor: '#47CD89',
      borderColor: '#47CD89',
      borderRadius: 5
    },
    {
      label: 'Loss',
      data: [500, 1000, 1000, 500, 200, 0, 3500, 5000, 6000, 7000, 3500, 5000, 6000],
      backgroundColor: '#F97066',
      borderColorColor: '#F97066',
      borderRadius: 5
    },
  ],
};

function VerticalBarChart() {
  return <Bar options={options} data={data} />;
}

export default VerticalBarChart