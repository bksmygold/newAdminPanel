import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { FormControl, Grid, MenuItem, Select, AppBar, Avatar, Badge, Box, IconButton, Toolbar, Tooltip, Button, TextField } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Bell as BellIcon } from "../icons/bell";
import { UserCircle as UserCircleIcon } from "../icons/user-circle";
import { Users as UsersIcon } from "../icons/users";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddIcon from "@mui/icons-material/Add";
import { useRouter } from 'next/router'
import Swal from "sweetalert2";
import { useState, createContext, useEffect } from "react";
import { getLoggedInUser } from "src/apis/login";
import React from "react";
import { CustomTextField, CustomFormControl } from "./customMUI";
import { DateRangePicker } from 'react-date-range';

//=================================================================
const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[8],
}));

//=================================================================
export const DashboardNavbar = (props) => {
  const { showFilter, onSidebarOpen, ...other } = props;

  const [from, setFrom] = React.useState("");
  const [to, setTo] = React.useState("");
  
  const router = useRouter()

  const [user, setUser] = useState({})
  useEffect(() => {
    getLoggedInUser().then(res => setUser(res))
  }, [])



  //=================================================================
  return (
    <>
      <DashboardNavbarRoot
        sx={{
          left: {
            lg: 280,
          },
          width: {
            lg: "calc(100% - 280px)",
          },
        }}
        {...other}
      >
        <Toolbar
          disableGutters
          sx={{
            height: 100,
            left: 0,
            p: 3,

          }}
        >
          <p id="welcomeText">👋 Welcome {user.fullName} </p>
          <IconButton
            onClick={onSidebarOpen}
            sx={{

              display: {
                xs: "inline-flex",
                lg: "none",
              },
            }}
          >
            <MenuIcon />
          </IconButton >
          {/* <Box sx={{ display: "flex", flex: 1 }}> */}
          {/* --------------------------------------------------------------- */}
          {showFilter && (

            <Grid container className="zoom" sx={{ display: "flex", justifyContent: "flex-end", marrginRight: 50 }}>
              <Grid item xs={12} lg={3} sx={{ flex: 1 }}>
                <CustomTextField 
                onChange={(e)=>setFrom(e.target.value)}
                type="date" 
                sx={{ mr: 5, flex: 1 }} />
              </Grid>
              <Grid item xs={12} lg={3} sx={{ flex: 1 }}>
                <CustomTextField 
                onChange={(e)=>setTo(e.target.value)}
                type="date" 
                sx={{ mr: 5, flex: 1 }} />
              </Grid>
              <Grid item lg={2} xs={12}>
                <CustomFormControl fullWidth>
                  <Select
                    defaultValue=""
                    labelId="demo-simple-select-label"
                    id="title"

                    name="title"
                  >
                    <MenuItem key="collection" value="privacy">
                      All
                    </MenuItem>

                  </Select>
                </CustomFormControl>
              </Grid>
              <Grid item lg={1} xs={12} sx={{
                
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}>

                <Button
                  onClick={() => {
                    router.push("/badla/view-badla");
                  }}
                  sx={{
                    width:"100%",
                    height: "50%",
                    background: "linear-gradient(43deg, #8b5704, #ddb070)",
                    color: "white",
                    p: 10,
                    ml:1,
                    padding: "0px 12px 0px 0px",
                  }}
                >
                  <AddIcon sx={{ ml:1 }} />
                  Badla
                </Button>
              </Grid>
            </Grid>
          )}

          {/* --------------------------------------------------------------- */}

          {/* </Box> */}
          <Box sx={{ flexShrink: 10, width: "100%", display: "flex", justifyContent: "flex-end" }}>

            <Tooltip title="Notifications">
              <IconButton sx={{ ml: 5 }}>
                <BellIcon sx={{ width: "100%", height: 36, color: "#905e0f" }} fontSize="small" />
              </IconButton>
            </Tooltip>
          </Box>
          <Tooltip title="User">
            <AccountCircleIcon
              onClick={() => router.push({
                pathname: '/account',
                query: { user: user }
              })}
              sx={{ width: 31.5, height: 36, color: "#905e0f", cursor: "pointer" }}
            />
          </Tooltip>
        </Toolbar>
      </DashboardNavbarRoot>
    </>
  );
};
//=================================================================
DashboardNavbar.propTypes = {
  onSidebarOpen: PropTypes.func,
};
