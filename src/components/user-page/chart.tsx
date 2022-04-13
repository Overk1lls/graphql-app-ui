import React from 'react';
import { Line } from 'react-chartjs-2';
import { CategoryScale, Chart as Chartjs, LinearScale, LineElement, PointElement } from 'chart.js';

Chartjs.register(CategoryScale, LinearScale, PointElement, LineElement);

const data = {
    datasets: [
        {
            label: 'Solves',
            data: [0, 2, 1, 4],
            fill: false,
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgb(255, 99, 132)',
        },
        {
            label: 'Problems',
            data: [1, 3, 0, 2],
            fill: false,
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
};

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Student Analysis',
        },
    },
    scales: {
        yAxes: {
            ticks: {
                beginAtZero: true,
                precision: 0,
            },
        },
    },
};

export const Chart = () => (
    <div className="container chart">
        <h3 className="text-center my-5 pt-5">Графік рішень</h3>
        <Line className="my-5" data={data} options={options} />
    </div>
);
