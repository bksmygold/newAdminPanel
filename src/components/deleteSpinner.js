import DialogActions from '@mui/material/DialogActions';
import React from 'react';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContentText from '@mui/material/DialogContentText';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRouter } from 'next/router';
import Image from 'next/image';
//=======================================================
export default function DeleteSpinner({ url, deleting, collection, id }) {
  const router = useRouter();

  const [open, setOpen] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  //=============================================================== EVENT_HANDLER
  const handleClickOpen = () => {
    console.log('============================> open');
    setOpen(true);
  };
  //===============================================================
  const handleClose = () => {
    setOpen(false);

    console.log('============================> close');
  };
  //===============================================================
  const handleDeletion = () => {
    setOpen(false);
    console.log(id);
    deleting(id).then(() => {
      window.location.reload(false);
      //  router.push(url);
    });

    setIsOpen(true);

    console.log('==========================> delete');
  };
  //===============================================================
  //=============================================================== RENDERING
  return (
    <>
      <Button
        sx={{
          background: 'linear-gradient(43deg, #ff2222, #fe8f8f)',
          color: 'white',
        }}
        id="delete-btn"
        variant="none"
        onClick={handleClickOpen}
      >
        Delete <DeleteIcon sx={{ marginLeft: 1, width: 23, height: 23 }} />
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Processing Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText>Do you want to delete ?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          <Button onClick={handleDeletion} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle sx={{textAlign:"center"}}>Deleting</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {' '}
            <Image src="/loader.gif" alt="me" width="250" height="200" />
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}
