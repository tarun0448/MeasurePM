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
import { fa, faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ['Billable', 'Nonbillable'], // X-axis labels
  datasets: [
    {
      label: 'Rendered',
      data: [33, 10], // Billable percentage (e.g., 60%)
      backgroundColor: '#FECDCA',
      barThickness: 48,
      borderRadius: 4
    },
    {
      label: 'Confirmed',
      data: [10, 20], // Billable percentage (e.g., 60%)
      backgroundColor: '#B2CCFF',
      barThickness: 48,
      borderRadius: 4
    },
    {
      label: 'Unconfirmed',
      data: [13, 20], // Billable percentage (e.g., 60%)
      backgroundColor: '#84ADFF',
      barThickness: 48,
      borderRadius: 4
    },
    {
      label: 'Cancelled',
      data: [39, 50], // Billable percentage (e.g., 60%)
      backgroundColor: '#2970FF',
      barThickness: 48,
      borderRadius: 4
    },

  ],
};

const options = {
  scales: {
    x: {
      stacked: true,
      title: {
        display: true,
        text: 'Billable v. Non-billable',
      },
    },
    responsive: true,
    maintainAspectRatio: true,
    y: {
      stacked: true,
      title: {
        display: true,
        text: 'All Status (%)',
      },
      min: 0,
      ticks: {
        callback: (value) => `${value}%`,
      },
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

function StackedBarChart() {
  return <Bar options={options} data={data} />;
}

export default StackedBarChart