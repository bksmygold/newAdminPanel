import NextLink from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Box, Button, ListItem } from '@mui/material';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Swal from 'sweetalert2';
import { useTheme } from '@mui/styles';
//===========================================================
export const NavItem = (props) => {

  const theme = useTheme()
  //==================
  const { href, isCollapsible, icon, title, items, ...others } = props;
  const router = useRouter();

  const active = href
    ? router.pathname.split('/')[1] === href.split('/')[1]
    : false;
  return (
    <ListItem
      disableGutters
      sx={{
        display: 'flex',

        mb: 0.5,
        py: 0,
        px: 2,
      }}
      {...others}
    >
      {/* <NextLink href={href} passHref> */}
      {/* <Button
          component="a"
          startIcon={icon}
          disableRipple
          sx={{
            backgroundColor: active && "rgba(255,255,255, 0.08)",
            borderRadius: 1,
            color: active ? "secondary.main" : "neutral.300",
            fontWeight: active && "fontWeightBold",
            justifyContent: "flex-start",
            px: 3,
            textAlign: "left",
            textTransform: "none",
            width: "100%",
            "& .MuiButton-startIcon": {
              color: active ? "secondary.main" : "neutral.400",
            },
            "&:hover": {
              backgroundColor: "rgba(255,255,255, 0.08)",
            },
          }}
        > */}
      {isCollapsible ? (
        <Accordion sx={{ backgroundColor: 'transparent', width: '100%' }}>
          <Button
            component="div"
            startIcon={icon}
            disableRipple
            sx={[theme.custom.typography.sideBar,

            {
              backgroundColor: active && 'white',
              // boxShadow: '0px 4px 1px 0px #bbb5b5',
              // border: '1px solid #a39a9a6e',
              mb: 2,
              borderRadius: 1,
              color: active ? '#935F0E' : 'gray',
              fontWeight: active && 'fontWeightBold',
              justifyContent: 'flex-start',
              // px: 3,
              textAlign: 'left',
              textTransform: 'none',
              width: '100%',
              '& .MuiButton-startIcon': {
                color: active ? '#925F0F' : 'grey',
              },
              // "&:hover": {
              //   backgroundColor: "rgba(255,255,255, 0.08)",
              // },
            }]}
          >
            {/* {items.map((x) => ( */}
            <>
              <NextLink href={href} passHref>
                <Box sx={{ flexGrow: 1 }}>{title}</Box>
              </NextLink>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              ></AccordionSummary>
            </>
            {/* ))} */}
          </Button>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}
          >
            {items?.map((x) => (
              <Button onClick={() => router.push(x.href)} key={x.title}>
                <Typography
                  sx={{
                    color: 'gray',
                    fontWeight: 'bold',
                  }}
                >
                  {x.title}
                </Typography>
              </Button>
            ))}
          </div>
        </Accordion>
      ) : (
        <>
          <NextLink href={href} passHref>
            <Button
              component="div"
              startIcon={icon}
              disableRipple
              // background: 'linear-gradient(43deg, #8b5704, #ddb070)',

              sx={[theme.custom.typography.sideBar, {

                // background:
                //   active && 'linear-gradient(43deg, #8b5704, #ddb070)',
                // boxShadow: active && '0px 4px 1px 0px #bbb5b5',
                // border: active && '1px solid #a39a9a6e',
                borderRadius: 1,
                color: active ? '#905E0F' : 'gray',
                fontWeight: active && 'fontWeightBold',
                justifyContent: 'flex-start',
                // px: 3,
                textAlign: 'left',
                textTransform: 'none',
                width: '100%',
                '& .MuiButton-startIcon': {
                  color: active ? '#905E0F' : 'grey',
                },
                // "&:hover": {
                //   backgroundColor: "rgba(255,255,255, 0.08)",
                // },
              }]}
            >
              {/* {title === 'Logout' ? (
                <Box
                  onClick={() =>
                    Swal.fire(
                      'You have been logged out!',
                      'Log in to continue',
                      'success'
                    )
                  }
                  sx={{
                    // zoom: '90%',
                    background: 'linear-gradient(45deg, #ff4b4b, #ffb5b5)',
                    color: 'white',
                    p: 1,
                    width: '100%',
                    marginRight: 1,
                    borderRadius: 1,
                    textAlign: 'center',
                  }}
                >
                  {title}
                </Box>
              ) : ( */}
                <Box sx={{ flexGrow: 1 }}>{title}</Box>
              {/* )} */}
            </Button>
          </NextLink>
        </>
      )}
    </ListItem>
  );
};

NavItem.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.node,
  title: PropTypes.string,
};
