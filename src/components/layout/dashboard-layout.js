import { useState } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { DashboardNavbar } from '../dashboard-navbar';
import { DashboardSidebar } from '../sidebar.js/dashboard-sidebar';
//===============================================================
const DashboardLayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  paddingTop: 64,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 280
  }
}));
//===============================================================
export const DashboardLayout = (props) => {
  //===============================================================w
  const { children } = props;
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  //===============================================================
  return (
    <>
      <DashboardLayoutRoot>
        <Box
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            width: '100%',
            // backgroundColor: 'pink',
          }}
        >
          {children}
        </Box>
      </DashboardLayoutRoot>
      <DashboardNavbar showFilter={props.showFilter} onSidebarOpen={() => setSidebarOpen(true)} />
      <DashboardSidebar
        onClose={() => setSidebarOpen(false)}
        open={isSidebarOpen}
      />
      {/* {children}
        </Box>
      </DashboardLayoutRoot> */}
    </>
  );
};
//===============================================================