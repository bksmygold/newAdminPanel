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
import { Grid, Box, Typography } from '@mui/material';
import { useController } from "../controller/dashboard"
import { useTheme } from '@mui/styles'

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





export default function BarChart() {
    //============================================================
    const { invoice_Query } = useController()
    const theme = useTheme()
    console.log("---<<<", invoice_Query.data?.data)



    const data = {
        datasets: [
            {
                backgroundColor: "#905E0F",
                barPercentage: 0.5,
                barThickness: 12,
                borderRadius: 4,
                categoryPercentage: 0.5,
                data: [1, 2, 3],
                label: "Custody",
                maxBarThickness: 80,
            },
            {
                backgroundColor: "#EABE78",
                barPercentage: 0.5,
                barThickness: 12,
                borderRadius: 4,
                categoryPercentage: 0.5,
                data: [3,2,1],
                label: "Release",
                maxBarThickness: 80,
            },
        ],
        labels: ["Jan", "Feb", "Mar"],
    };

    const options = {
        animation: false,
        cornerRadius: 20,
        layout: { padding: 0 },
        legend: { display: false },
        maintainAspectRatio: false,
        responsive: true,
        xAxes: [
            {
                ticks: {
                    fontColor: theme.palette.text.secondary
                },
                gridLines: {
                    display: false,
                    drawBorder: false
                }
            }
        ],
        yAxes: [
            {
                ticks: {
                    fontColor: theme.palette.text.secondary,
                    beginAtZero: true,
                    min: 0
                },
                gridLines: {
                    borderDash: [2],
                    borderDashOffset: [2],
                    color: theme.palette.divider,
                    drawBorder: false,
                    zeroLineBorderDash: [2],
                    zeroLineBorderDashOffset: [2],
                    zeroLineColor: theme.palette.divider
                }
            }
        ],
        tooltips: {
            backgroundColor: theme.palette.background.paper,
            bodyFontColor: theme.palette.text.secondary,
            borderColor: theme.palette.divider,
            borderWidth: 1,
            enabled: true,
            footerFontColor: theme.palette.text.secondary,
            intersect: false,
            mode: 'index',
            titleFontColor: theme.palette.text.primary
        }
    };
    //=============================================================
    return (
        <>
            <Grid container spacing={3} sx={{ justifyContent: "center" }}>
                <Grid
                    item
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-around",
                        paddingRight: 0,
                    }}
                >
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography sx={theme.custom.typography.dashBoard.h2}>
                            89,124
                        </Typography>
                        <Typography variant="overline" sx={{ fontSize: 9, color: "black" }}>
                            Sale-Invoice
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography sx={theme.custom.typography.dashBoard.h2}>
                            89,124
                        </Typography>
                        <Typography variant="overline" sx={{ fontSize: 9, color: "black" }}>
                            Purchase-Invoice
                        </Typography>
                    </Box>
                </Grid>
                <Box>
                    <Bar data={data} options={options} />
                </Box>
            </Grid>

        </>
    )
}
