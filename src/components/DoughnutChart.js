import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJs } from 'chart.js/auto';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ['Denied', 'Received', 'Paid', 'Paid partial', 'Pending'],
  datasets: [
    {
      data: [20, 40, 10, 10, 20],
      backgroundColor: ['#F97066', '#2970FF', '#528BFF', '#84ADFF', '#B2CCFF'],
      hoverBackgroundColor: ['#F97066', '#2970FF', '#528BFF', '#84ADFF', '#B2CCFF'],
      borderColor: ['#F97066', '#2970FF', '#528BFF', '#84ADFF', '#B2CCFF'],
      borderRadius: 0,
    },
  ],
};

const DoughnutChart = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: true,
    title: {
      display: true,
      text: 'Custom Doughnut Chart',
      fontSize: 10,
    },
    legend: {
      display: false,
      position: 'bottom',
      borderRadius: 50,
      fontSize: 40
    },
    plugins: {
      legend: {
        position: 'right', // Place legends on the right side
        labels: {
          generateLabels: function (chart) {
            const labels = chart.data.labels;
            const datasets = chart.data.datasets;
            return labels.map((label, index) => ({
              text: label,
              fillStyle: datasets[0].backgroundColor[index],
              hidden: false,
              lineCap: 'round',
              lineDash: [],
              lineDashOffset: 0,
              lineJoin: 'round',
              lineWidth: 1, // Adjust the width of the circle
              strokeStyle: datasets[0].backgroundColor[index],
              pointStyle: 'round', // Use a circular point style
              borderRadius: 4,
              rotation: 0,
            }));
          },
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

  // Custom plugin to draw text in the center
  const doughnutLabelPlugin = {
    id: 'doughnutLabel',
    beforeDraw: function (chart) {
      const width = chart.width;
      const height = chart.height;
      const ctx = chart.ctx;
      ctx.restore();
      const text = 'Center'; // Your text to be displayed in the center
      const fontSize = 16; // Font size for the text
      ctx.font = fontSize + 'px';
      while (ctx.measureText(text).width > width) {
        fontSize--; // Reduce font size until it fits within available width
        ctx.font = `${fontSize}px`;
      }
      ctx.textBaseline = 'middle';
      const textX = chart.getDatasetMeta(0).data[0].x;
      const textY = chart.getDatasetMeta(0).data[0].y;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle'
      ctx.fillStyle = '#333'; // Color of the text
      ctx.fillText(text, textX, textY);

      ctx.save();
    },
    afterDraw: function (chart) {
      const ctx = chart.ctx;
      const datasets = chart.data.datasets[0].data;
      const meta = chart.getDatasetMeta(0);

      ctx.restore();
      ctx.fillStyle = 'white';
      ctx.font = '14px';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      meta.data.forEach((element, index) => {
        const model = element.getProps();
        const midAngle = model.startAngle + (model.endAngle - model.startAngle) / 2;
        const posX = model.x + 0.5 * (model.outerRadius + model.innerRadius) * Math.cos(midAngle);
        const posY = model.y + 0.5 * (model.outerRadius + model.innerRadius) * Math.sin(midAngle);

        const dataValue = datasets[index];
        ctx.fillText(dataValue, posX, posY);
      });

      ctx.save();
    },


  };


  return <Doughnut data={data} options={options} plugins={[doughnutLabelPlugin]} />;
};

export default DoughnutChart;
