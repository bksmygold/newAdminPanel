import DialogActions from "@mui/material/DialogActions";
import React from "react";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContentText from "@mui/material/DialogContentText";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { useRouter } from "next/router";

export default function DeleteSpinner({ url, deleting, collection ,id}) {
const router = useRouter();

   const [open, setOpen] = React.useState(false);
   const [isOpen, setIsOpen] = React.useState(false);
  //=============================================================== EVENT_HANDLER
  const handleClickOpen = () => {
    console.log("============================> open");
    setOpen(true);
  };
  //===============================================================
  const handleClose = () => {
    setOpen(false);

    console.log("============================> close");
  };
  //===============================================================
  const handleDeletion = () => {

      setOpen(false);
      console.log(id);
      deleting(id).then(() => {
          window.location.reload(false)
        //  router.push(url);
      });

      setIsOpen(true);

      console.log("==========================> delete");
    
  };
  //===============================================================
  //=============================================================== RENDERING
  return (
    <>
      <Button id="delete-btn" variant="none" color="primary" onClick={handleClickOpen}>
        <DeleteIcon/>
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
        <DialogTitle>Deleting</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>{loader}</DialogContentText> */}
          {/* <img src={loader} /> */}
        </DialogContent>
      </Dialog>
    </>
  );
}
