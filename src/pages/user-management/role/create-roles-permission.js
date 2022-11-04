import Head from 'next/head';
import { DashboardSidebar } from 'src/components/sidebar.js/dashboard-sidebar';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  TextField,
} from '@mui/material';
import { DashboardLayout } from '../../../components/layout/dashboard-layout';
import { InfoCard } from '../../../components/cards/infoCard';
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import { alpha, styled } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Table from '../../../components/utility/table';
import { useRouter } from 'next/router';
import { useQuery, useMutation } from '@tanstack/react-query';
import { postRole } from 'src/apis/role';
import React, { useState } from 'react';
import DeleteSpinner from 'src/components/deleteSpinner';
import Loading from 'src/components/loading';
import { useFormik } from 'formik';
import * as yup from 'yup';
import swal from 'sweetalert';
import { RoleCard } from '../../../components/cards/roleCard';
import { PermissionCard } from '../../../components/cards/permissionCard';
import LoadingButton from '@mui/lab/LoadingButton';
import { CustomFormControl } from 'src/components/customMUI';
import { CustomTextField } from 'src/components/customMUI';
import { useTheme } from '@mui/styles';
// import {userManagementPerma} from '../../../constants/userManagementPerma'
import { userManagementPerma, ecommPerma, taxSettingPerma, promotionalSettingsPerma, reportsPerma } from 'src/constants/constant';
//=======================================================
export default function RolesPermission() {
  const router = useRouter()
  const theme = useTheme()
  //=======================================================

  //=======================================================
  const [generalSelected, setGeneralSelected] = useState(false);
  const [financialSelected, setFinancialSelected] = useState(false);
  const [tax, setTax] = useState(false);
  const [userManagement, setUserManagement] = useState(false);
  const [ecomm, setEcomm] = useState(false);
  const [promotional, setPromotional] = useState(false);
  const [reports, setReports] = useState(false);

  const [permissions, setPermissions] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  //=======================================================

  return (
    <>
      <Typography
        sx={{
          marginTop: 4,
          marginBottom: 2,
          color: '#8B5704',
          marginLeft: 1,
          // fontWeight: "bolder",

        }}
        variant="h5"
      >
        Create Roles & Permissions
      </Typography>
      <Grid container spacing={1} sx={{ p: 2, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Grid item xl={6} lg={6} sm={6} xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

          <CustomTextField

            id="name"
            name="name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
            label="Role name"
            sx={{ mt: 1, width: '100%' }}
          />{' '}
        </Grid>
        <Grid item xl={6} lg={6} sm={6} xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

          <CustomTextField
            id="name"
            name="name"
            multiline
            variant="outlined"
            label="Description"
            onChange={(e) => setDescription(e.target.value)}
            sx={{ mt: 1, width: '100%' }}
          />{' '}
        </Grid>
      </Grid>
      <Typography
        sx={{
          marginTop: 4,
          marginBottom: 2,
          color: '#8B5704',
          marginLeft: 1,
          // fontWeight: "bolder",
        }}
        variant="h6"
      >
        Selected Dashboard can be accessed
      </Typography>
      <Grid container spacing={8} sx={{ backgroundColor: '', p: 5 }}>
        <Grid item xl={3} lg={3} sm={6} xs={12}>
          <RoleCard
            title="General"
            generalSelected={generalSelected}
            onClick={() => setGeneralSelected((prev) => !prev)}
          />
        </Grid>
        <Grid item xl={3} lg={3} sm={6} xs={12}>
          <RoleCard
            title="Financial"
            financialSelected={financialSelected}
            onClick={() => setFinancialSelected((prev) => !prev)}
          />
        </Grid>
        <Grid item xl={3} lg={3} sm={6} xs={12}>
          <RoleCard title="Retail" />
        </Grid>
        <Grid item xl={3} lg={3} sm={6} xs={12}>
          <RoleCard title="Inventory" />
        </Grid>
        <Grid item xl={3} lg={3} sm={6} xs={12}>
          <RoleCard title="CRM" />
        </Grid>
      </Grid>
      {generalSelected ? (
        <>
          <Typography
            sx={{
              marginTop: 4,
              marginBottom: 2,
              color: '#8B5704',
              marginLeft: 1,
            }}
            variant="h6"
          >
            Select Modules
          </Typography>
          <Grid container spacing={3} sx={{ p: 2 }}>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <RoleCard
                userManagement={userManagement}
                title="User Management"
                onClick={() => setUserManagement((prev) => !prev)}
              />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <RoleCard
                tax={tax}
                title="Tax Settings"
                onClick={() => setTax((prev) => !prev)}
              />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <RoleCard
                ecomm={ecomm}
                title="E-Commerce Management"
                onClick={() => setEcomm((prev) => !prev)}
              />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <RoleCard
                promotional={promotional}
                onClick={() => setPromotional((prev) => !prev)}
                title="Promotional Settings"
              />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <RoleCard
                reports={reports}
                title="Reports"
                onClick={() => setReports((prev) => !prev)}
              />
            </Grid>
          </Grid>
        </>
      ) : null}


      {tax ? (
        <>
          <Grid container spacing={3} sx={{ p: 2 }}>
            {taxSettingPerma.map((x) => (
              <Grid item xl={3} lg={3} sm={6} xs={12}>
                <PermissionCard
                  title={x.title}
                  perm={x.perm}
                  permissions={permissions}
                  setPermissions={(e) =>
                    setPermissions(
                      permissions.includes(e)
                        ? permissions.filter((z) => z !== e)
                        : permissions.concat(e)
                    )
                  }
                />
              </Grid>
            ))}
          </Grid>
        </>
      ) : null}
      {userManagement ? (
        <>
          <Grid container spacing={3} sx={{ p: 2 }}>
            {userManagementPerma.map((x) => (
              <Grid item xl={3} lg={3} sm={6} xs={12}>
                <PermissionCard
                  title={x.title}
                  perm={x.perm}
                  permissions={permissions}
                  setPermissions={(e) =>
                    setPermissions(
                      permissions.includes(e)
                        ? permissions.filter((z) => z !== e)
                        : permissions.concat(e)
                    )
                  }
                />
              </Grid>
            ))}
          </Grid>
        </>
      ) : null}
      {ecomm ? (
        <>
          <Grid container spacing={3} sx={{ p: 2 }}>
            {ecommPerma.map((x) => (
              <Grid key={x} item xl={3} lg={3} sm={6} xs={12}>
                <PermissionCard
                  title={x.title}
                  perm={x.perm}
                  // permissions={permissions}
                  setPermissions={(e) => {
                    setPermissions(
                      permissions.includes(e)
                        ? permissions.filter((z) => z !== e)
                        : permissions.concat(e)
                    )
                  }
                  }
                />
              </Grid>
            ))}
          </Grid>
        </>
      ) : null}

      {promotional ? (
        <>
          <Grid container spacing={3} sx={{ p: 2 }}>
            {promotionalSettingsPerma.map((x) => (
              <Grid key={x} item xl={3} lg={3} sm={6} xs={12}>
                <PermissionCard
                  title={x.title}
                  perm={x.perm}
                  // permissions={permissions}
                  setPermissions={(e) => {
                    setPermissions(
                      permissions.includes(e)
                        ? permissions.filter((z) => z !== e)
                        : permissions.concat(e)
                    )
                  }
                  }
                />
              </Grid>
            ))}
          </Grid>
        </>
      ) : null}

      {reports ? (
        <>
          <Grid container spacing={3} sx={{ p: 2 }}>
            {reportsPerma.map((x) => (
              <Grid key={x} item xl={3} lg={3} sm={6} xs={12}>
                <PermissionCard
                  title={x.title}
                  perm={x.perm}
                  // permissions={permissions}
                  setPermissions={(e) => {
                    setPermissions(
                      permissions.includes(e)
                        ? permissions.filter((z) => z !== e)
                        : permissions.concat(e)
                    )
                  }
                  }
                />
              </Grid>
            ))}
          </Grid>
        </>
      ) : null}

      <LoadingButton
        // disabled={roleMutation.isLoading}  
        // loading={roleMutation.isLoading}
        type="submit"
        onClick={() =>
          console.log("permissions ----:", permissions)
          // postRole({ permissions: permissions, name: name, description: description }).then(
          //   () => swal('Role Added !', 'continue with the panel', 'success'),
          //   router.push('/userManagement/role/view-rolesPermission')
          // )
        }
        sx={[theme.custom.editButton, { width: "50%", margin: "auto",mb:5}]}
      >
        Add Role
      </LoadingButton>
    </>
  );
}
RolesPermission.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
