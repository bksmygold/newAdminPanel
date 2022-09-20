import { useEffect } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { Box, Button, Divider, Drawer, Typography, useMediaQuery } from "@mui/material";
import { Menu, MenuItem } from "@material-ui/core";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { ChartBar as ChartBarIcon } from "../icons/chart-bar";

import { Cog as CogIcon } from "../icons/cog";
import { Lock as LockIcon } from "../icons/lock";
import { Selector as SelectorIcon } from "../icons/selector";
import { ShoppingBag as ShoppingBagIcon } from "../icons/shopping-bag";
import { User as UserIcon } from "../icons/user";
import { UserAdd as UserAddIcon } from "../icons/user-add";
import { Users as UsersIcon } from "../icons/users";
import { XCircle as XCircleIcon } from "../icons/x-circle";
import { NavItem } from "./nav-item";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import StoreIcon from "@mui/icons-material/Store";
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import SummarizeIcon from "@mui/icons-material/Summarize";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Image from "next/image";

//=======================================================
const items = [
  {
    href: '/',
    icon: <DashboardIcon />,
    title: 'Dashboard',
    childrens: [
      {
        href: '/dashboard/retail-dashboard',
        icon: <ChartBarIcon fontSize="small" />,
        title: 'Retail Dashboard',
      },
      {
        href: '/dashboard/analytics-dashboard',
        icon: <ChartBarIcon fontSize="small" />,
        title: 'Analytics Dashboard',
      },
      {
        href: '/dashboard/goldbank-dashboard',
        icon: <ChartBarIcon fontSize="small" />,
        title: 'Gold Bank',
      },
    ],
  },
  {
    href: '/userManagement',
    icon: <ManageAccountsIcon />,
    title: 'User Management',
  },
  {
    href: '/taxSettings',
    icon: <AccountBalanceWalletIcon />,
    title: 'Tax Setting',
  },
  {
    href: '/eCommerce',
    icon: <StoreIcon />,
    title: 'E-Commerce',
  },
  {
    href: '/promotionalSetting',
    icon: <ConnectWithoutContactIcon />,
    title: 'Promotional Setting',
  },
  {
    href: '/reports',
    icon: <SummarizeIcon />,
    title: 'Reports',
  },

  {
    href: '/settings',
    icon: <CogIcon />,
    title: 'Settings',
  },
  {
    href: '',
    // icon: <CogIcon />,
    title: 'Logout',
  },
];
//========================================================================
export const DashboardSidebar = (props) => {
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
                
                <Image onClick={ ()=>router.push('/')} src="/logo.png" alt="me" width="64" height="64" />
                <Typography color="inherit" variant="subtitle1">
                  Bks MyGold
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
            borderColor: "green",
            my: 3,
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item) => (
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
        <Divider sx={{ borderColor: "green" }} />
        {/* <Box
          sx={{
            px: 2,
            py: 3,
          }}
        >
          <Typography color="neutral.100" variant="subtitle2">
            Need more features?
          </Typography>
          <Typography color="neutral.500" variant="body2">
            Check out our Pro solution template.
          </Typography>
          <Box
            sx={{
              display: "flex",
              mt: 2,
              mx: "auto",
              width: "160px",
              "& img": {
                width: "100%",
              },
            }}
          >
            <img alt="Go to pro" src="/static/images/sidebar_pro.png" />
          </Box>
          <NextLink href="https://material-kit-pro-react.devias.io/" passHref>
            <Button
              color="secondary"
              component="a"
              endIcon={<OpenInNewIcon />}
              fullWidth
              sx={{ mt: 2 }}
              variant="contained"
            >
              Pro Live Preview
            </Button>
          </NextLink>
        </Box> */}
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
