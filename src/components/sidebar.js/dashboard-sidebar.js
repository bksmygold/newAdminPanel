import { useEffect } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { Box, Button, Divider, Drawer, Typography, useMediaQuery } from "@mui/material";
import { NavItem } from "../nav-item";
import Image from "next/image";
import { dashboardMenuList } from "src/constants/sidebarMenu";
import LogoutIcon from '@mui/icons-material/Logout';
import Swal from "sweetalert2";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useTheme } from '@mui/styles'
//========================================================================
export const DashboardSidebar = (props) => {

  const theme = useTheme()
  //========================================================================
  const { open, onClose } = props;
  const router = useRouter();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"), {
    defaultMatches: true,
    noSsr: false,
  });
  //========================================================================
  useEffect(
    () => {
      if (!router.isReady) {
        return;
      }

      if (open) {
        onClose?.();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.asPath]
  );
  //========================================================================
  const content = (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <div>
          <Box sx={{ p: 3 }}>
            {/* <NextLink href="/" passHref>
              
            </NextLink> */}
          </Box>
          <Box sx={{ px: 2 }}>
            <Box
              sx={{
                alignItems: "center",
                backgroundColor: "white",
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                px: 3,
                py: "11px",
                borderRadius: 1,
                color: "black",
              }}
            >
              <div>

                <Image onClick={() => router.push('/')} src="/logo.jpg" alt="me" width="150" height="150" />
                <Typography color="inherit" variant="subtitle1">
                  BKS My Gold Pvt Ltd
                </Typography>
                <Typography color="neutral.400" variant="body2">
                  Admin Panel v2.0
                </Typography>
              </div>
              {/* <SelectorIcon
                sx={{
                  color: "neutral.500",
                  width: 14,
                  height: 14,
                }}
              /> */}
            </Box>
          </Box>
        </div>
        <Divider
          sx={{
            borderColor: "gray",
            my: 3,
          }}
        />
        <Box sx={{ height: "100%" }}>
          {dashboardMenuList.map((item) => (
            <>
              {" "}
              <NavItem
                isCollapsible={item.childrens?.length}
                items={item.childrens}
                key={item.title}
                icon={item.icon}
                href={item.href}
                title={item.title}

              />
            </>
          ))}
        </Box>
        <Divider />



        <Box
          sx={{
            px: 2,
            py: 3,
          }}
        >

          <Box
            disableRipple
            onClick={() =>
              router.push("/")
            }
            sx={{
              display: "flex",
              cursor: "pointer",
              color: 'gray',
              fontWeight: "bolder",
              p: 1,
              width: '100%',
              marginRight: 1,
              borderRadius: 1,
              mb: 2,
              textAlign: 'center',
            }}
          >
            <DashboardIcon sx={{ mr: 2 }} />
            Back To Dashboard
          </Box>
          <Box
            onClick={() =>
              Swal.fire(
                'You have been logged out!',
                'Log in to continue',
                'success'
              )
            }

            sx={{
              display: "flex",
              color: 'gray',
              cursor: "pointer",
              fontWeight: "bolder",
              p: 1,
              width: '100%',
              marginRight: 1,
              borderRadius: 1,
              textAlign: 'center',
            }}
          >
            <LogoutIcon sx={{ mr: 2 }} />
            Logout
          </Box>
        </Box>
      </Box>
    </>
  );
  //========================================================================
  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: "#FFFFFF",
            color: "#FFFFFF",
            width: 280,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }
  //========================================================================
  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "#ffffff",
          color: "#FFFFFF",
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};
//========================================================================
DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
