import Head from 'next/head';
import { DashboardSidebar } from 'src/components/sidebar.js/dashboard-sidebar';
import { Box, Container, Typography, Grid, Button, Modal } from '@mui/material';
import { DashboardLayout } from '../../../components/layout/dashboard-layout';
import { InfoCard } from '../../../components/cards/infoCard';
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import { alpha, styled } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Table from '../../../components/utility/table';
import { useRouter } from 'next/router';
import { getMerchant, deleteMerchant } from 'src/apis/merchant';
import { useQuery } from '@tanstack/react-query';
import Loading from 'src/components/loading';
import DeleteSpinner from 'src/components/deleteSpinner';
import { useTheme } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import { deleteRetail, getRetail } from 'src/apis/retail';
import { useState } from 'react';
import Bank from 'src/components/Bank';

import TablePagination from "@material-ui/core/TablePagination";

//=======================================================
export default function Retail() {
  const router = useRouter();
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false)
  const [bank, setBank] = useState(false)
  //=======================
  const manageButton = (params) => {
    return (
      <strong>
        <Button
          variant="contained"
          sx={theme.custom.editButton}
          size="small"
          onClick={() => {
            router.push(
              `/userManagement/retail/edit-retail/?id=${params.row.id}`
            );
          }}
        >
          Manage
        </Button>
      </strong>
    );
  };

  const deleteButton = (params) => {
    return (
      <DeleteSpinner
        id={params.id}
        deleting={deleteRetail}
      />
    );
  };

  const handleClick = (params) => {
    // setIsOpen((prevState) => !prevState)
    setBank(params.row.bank)

  }
  //=======================
  const query = useQuery({
    queryKey: 'retail',
    queryFn: getRetail,
    // onSuccess: (res) => console.log('Success ---', res.docs),
    onError: (err) => console.log('Error --->', err),
  });
  if (query.isLoading) return <Loading />;

  console.log("+++...", query.data.docs)
  //===============================
  const columns = [
    {
      field: 'name',
      headerName: 'Merchant Name',
      width: 250,
      renderCell: (params) => (
        <p style={{ color: '#925F0F', fontWeight: 600 }}>{params.value}</p>
      ),
      flex: 1
    },
    {
      field: 'image',
      headerName: 'Business Logo',
      width: 250,
      renderCell: (params) => (
        <img  width="50px" style={{borderRadius:50}} src={params.value}/>
      ),
      flex: 1
    },
    // {
    //   field: 'modules',
    //   headerName: 'Modules Applicable',
    //   width: 280,
    //   renderCell: (params) => {
    //     params.value.map((x) => x);
    //   },
    // },
    {
      field: 'businessType',
      headerName: 'Business Type',
      width: 200,
      flex: 1
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 200,
      flex: 1
    },
    {
      field: 'mobile',
      headerName: 'Mobile',
      width: 200,
      flex: 1
    },

    // {
    //   field: 'bank.bankName',
    //   headerName: 'Buy Name',
    //   width: 200,
    //   valueGetter: (params) => {
    //     let result = [];
    //     if (params.row.bank) {
    //       if (params.row.bank.bankName) {
    //         result.push(params.row.bank.bankName);
    //       }
    //     } else {
    //       result = ['Unknown'];
    //     }
    //     return result.join(', ');
    //   },
    //   flex: 1
    // },
    // {
    //   field: 'gstNo',
    //   headerName: 'GST',
    //   width: 200,
    //   flex: 1
    // },
    {
      field: 'Action',
      headerName: 'Action',
      width: 150,
      editable: true,
      renderCell: manageButton,
      flex: 1
    },
    {
      field: 'delete',
      headerName: 'Delete',
      width: 150,
      renderCell: deleteButton,      flex:1
    },
  ];

  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Merchant </title>
      </Head>
      <Grid
        sx={{
          marginLeft: 5,
          marginTop: 5,
          display: 'flex',
          flexDirection: 'column',
        }}
        container
      >
        <Grid item>
          <Typography variant="h5" sx={{ color: '#8B5704', marginBottom: 3 }}>
            Retail View
          </Typography>
        </Grid>
        <Grid item>
          <Button
            onClick={() => router.push('/userManagement/retail/add-retail')}
            sx={theme.custom.addButton}
          >
            Add Business
            <AddIcon sx={{ marginLeft: 1 }} />
          </Button>
        </Grid>
      </Grid>{' '}
      <Table

        // handleClick={handleClick}
        rows={query.data.docs}
        columns={columns}
        
        
      />

      {/* {bank ? (
        <Modal
          sx={{
            // zoom: "70%",
            // backgroundColor:"red",
            // width:"25%",
            // height:"25%",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          open={!!bank}
          onClose={() => setBank(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Bank bank={bank} />
        </Modal>
      ) : (null)

      } */}
    </>
  );
}
Retail.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
