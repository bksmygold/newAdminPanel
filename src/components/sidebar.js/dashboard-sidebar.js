import { useEffect } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { Box, Button, Divider, Drawer, Typography, useMediaQuery } from "@mui/material";
import { NavItem } from "../nav-item";
import Image from "next/image";
import { dashboardMenuList } from "src/constants/sidebarMenu";
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
