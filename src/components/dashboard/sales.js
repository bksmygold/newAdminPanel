import { Bar } from 'react-chartjs-2';
import { Box, Button, Card, CardContent, CardHeader, Divider, useTheme } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export const Sales = (props) => {
  const theme = useTheme();

  const data = {
    datasets: [
      {
        backgroundColor: "#905E0F",
        barPercentage: 0.5,
        barThickness: 12,
        borderRadius: 4,
        categoryPercentage: 0.5,
        data: [18, 5, 19, 27, 29, 19, 20],
        label: "Custody",
        maxBarThickness: 80,
      },
      {
        backgroundColor: "#EABE78",
        barPercentage: 0.5,
        barThickness: 12,
        borderRadius: 4,
        categoryPercentage: 0.5,
        data: [11, 20, 12, 29, 30, 25, 13],
        label: "Release",
        maxBarThickness: 80,
      },
    ],
    labels: ["1 Aug", "2 Aug", "3 Aug", "4 Aug", "5 Aug", "6 Aug", "7 aug"],
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

  return (
    <Box sx={{ width:"100%",display: "flex", justifyContent: "center",alignItems:"center" }}>
      <Card
        sx={{
           boxShadow: "0px 4px 1px 0px #d2c6c6", border: "1px solid #d2c6c657",
          marginTop: 2,
          width: "100%",
        }}
        {...props}
      >
        <CardHeader
          action={
            <Button endIcon={<ArrowDropDownIcon fontSize="small" />} size="small">
              Last 7 days
            </Button>
          }
          sx={{ color: "#905E0F" }}
          title="Gold in Custody Vs Gold Released"
        />
        <Divider />
        <CardContent>
          <Box
            sx={{
              height: 400,
              position: "relative",
            }}
          >
            <Bar data={data} options={options} />
          </Box>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 2,
          }}
        >
          <Button color="primary" endIcon={<ArrowRightIcon fontSize="small" />} size="small">
            Overview
          </Button>
        </Box>
      </Card>
    </Box>
  );
};
