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
import faker from 'faker';
import { useController } from "../controller/dashboard"
//==================================================
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    maintainAspectRatio: true,
    plugins: {
        legend: {
            //   position: 'top' as const,
        },
        title: {
            display: true,
            //   text: 'Chart.js Bar Chart',
        },
    },
};


const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'];

// const { invoice_Query } = useController()

export const data = {
    labels,
    datasets: [
        {
            backgroundColor: "#EABE78",
            color: "red",
            borderColor: 'white',
            fill: true,
            id: "id789",
            data: [2, 1, 4, 9, 1, 2],
        },
        {
            backgroundColor: "#BC6705",
            color: "red",
            borderColor: 'white',
            fill: true,
            id: "id123",
            data: [2, 1, 4, 9, 1, 2],
        },
    ],
};
export function BarChart() {
   
    console.log("---<<<", invoice_Query.data?.data)

    return <Bar
        height="180px"
        width="250px"
        // options={{ maintainAspectRatio: false }}

        data={data}
    />;
}
