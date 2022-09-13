import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { AppBar, Avatar, Badge, Box, IconButton, Toolbar, Tooltip, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Bell as BellIcon } from "../icons/bell";
import { UserCircle as UserCircleIcon } from "../icons/user-circle";
import { Users as UsersIcon } from "../icons/users";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddIcon from "@mui/icons-material/Add";
import { useRouter} from 'next/router'
//=================================================================
const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
}));

//=================================================================
export const DashboardNavbar = (props) => {
  const { onSidebarOpen, ...other } = props;

  const router = useRouter()
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
            minHeight: 64,
            left: 0,
            px: 2,
          }}
        >
          <p id="welcomeText">👋 Welcome Nischal </p>
          <IconButton
            onClick={onSidebarOpen}
            sx={{
              display: {
                xs: "inline-flex",
                lg: "none",
              },
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <Button
              onClick={() => {
                router.push("/badla/view-badla");
              }}
              sx={{
                zoom: "90%",
                backgroundColor: "#905E0F",
                color: "white",
                p: 0,
                padding: "0px 12px 0px 0px",
              }}
            >
              <AddIcon sx={{ marginRight: 1 }} />Badla
            </Button>
          </Box>

          <Tooltip title="Notifications">
            <IconButton sx={{ ml: 1 }}>
              <BellIcon sx={{ color: "#905e0f" }} fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="User">
            <AccountCircleIcon sx={{ color: "#905e0f" }} />
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
