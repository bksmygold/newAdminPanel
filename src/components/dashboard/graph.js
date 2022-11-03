import { Bar } from 'react-chartjs-2';
import { Box, Button, Card, CardContent, CardHeader, Dialog, Divider, Menu, useTheme, List, ListItem, ListItemText, MenuItem, TextField } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useState } from 'react';
import React from 'react';
import { CustomTextField } from 'src/components/customMUI';
import { useController } from 'src/controller/dashboard';
//==================================================
export const Graph = (props) => {
  const theme = useTheme();
  const [year, setYear] = useState(false)
  const optionsList = [

    'Show all notification content',
    'Hide sensitive notification content',
    'Hide all notification content',
  ];

  const { custody_Query } = useController(year)

  console.log("custody", custody_Query.data)

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };

  const data = {
    datasets: [
      {
        backgroundColor: "#905E0F",
        barPercentage: 0.5,
        barThickness: 12,
        borderRadius: 4,
        categoryPercentage: 0.5,
        data: custody_Query?.data?.given,
        label: "Custody",
        maxBarThickness: 80,
      },
      {
        backgroundColor: "#EABE78",
        barPercentage: 0.5,
        barThickness: 12,
        borderRadius: 4,
        categoryPercentage: 0.5,
        data: custody_Query?.data?.release,
        label: "Release",
        maxBarThickness: 80,
      },
    ],
    labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"],
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


  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };







  return (
    <>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
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
              // <Button
              //   endIcon={<ArrowDropDownIcon fontSize="small" />}
              //   size="small"
              //   onClick={() => setAnchorEl(!anchorEl)}
              // >
              //   Last 7 days
              // </Button>
              <CustomTextField
                size="small"
                label="select year"
                onChange={(e) => setYear(e.target.value)}
              />
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

      <div>
        <List
          component="nav"
          aria-label="Device settings"
          sx={{ bgcolor: 'background.paper' }}
        >
          <ListItem
            button
            id="lock-button"
            aria-haspopup="listbox"
            aria-controls="lock-menu"
            aria-label="when device is locked"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClickListItem}
          >
            <ListItemText
              primary="When device is locked"
              secondary={optionsList[selectedIndex]}
            />
          </ListItem>
        </List>
        <Menu
          id="lock-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'lock-button',
            role: 'listbox',
          }}
        >
          {optionsList.map((option, index) => (
            <MenuItem
            sx={{backgroundColor:"pink"}}
              key={option}
              disabled={index === 0}
              selected={index === selectedIndex}
              onClick={(event) => handleMenuItemClick(event, index)}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    </>
  );
};
