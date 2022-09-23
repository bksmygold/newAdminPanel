import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { AppBar, Avatar, Badge, Box, IconButton, Toolbar, Tooltip, Button, TextField } from "@mui/material";
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
//=================================================================
const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
}));

//=================================================================
export const DashboardNavbar = (props) => {
  const { onSidebarOpen, ...other } = props;


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
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <TextField type="date" sx={{ mr: 5,width:"100%" }} />
          </Box>
          <Box>
            <Button
              onClick={() => {
                router.push("/badla/view-badla");
              }}
              sx={{
                // zoom: "90%",
                background: "linear-gradient(43deg, #8b5704, #ddb070)",
                color: "white",
                p: 0,
                padding: "0px 12px 0px 0px",
              }}
            >
              <AddIcon sx={{ marginRight: 1 }} />
              Badla
            </Button>
          </Box>

          <Tooltip title="Notifications">
            <IconButton sx={{ ml: 1 }}>
              <BellIcon sx={{ width:"100%", height: 36, color: "#905e0f" }} fontSize="small" />
            </IconButton>
          </Tooltip>
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
