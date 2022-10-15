import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import Table from '../utility/table';
import { useTheme } from "@mui/styles";
import { Slide } from '@mui/material';


const emails = ['username@gmail.com', 'user02@gmail.com'];

function SimpleDialog(props) {
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        onClose(value);
    };

    return (
        <Dialog transitionDuration={350}   TransitionComponent={Slide} onClose={handleClose} open={open}>
            <DialogTitle>Media Details </DialogTitle>
            {props.item ? props.item.map(x => (
                <>
                    <Box sx={{ p: 3, display: "flex", justifyContent: "space-between", width: 380 }}>
                        <Typography sx={{ color: "black", fontWeight: 500 }} >Purity :</Typography>
                        <Typography sx={{ color: "black", fontWeight: 500 }}>{x.purity}</Typography>
                    </Box>

                    <hr style={{ width: "80%", margin: "auto" }} />

                    <Box sx={{ p: 3, display: "flex", justifyContent: "space-between", width: 380 }}>
                        <Typography sx={{ color: "black", fontWeight: 500 }} >Weight :</Typography>
                        <Typography sx={{ color: "black", fontWeight: 500 }}>{x.weight}</Typography>
                    </Box>
                </>
            )) : null}
        </Dialog>
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};



export default function ReportModal(props) {
    const theme = useTheme()

    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(emails[1]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };

    return (
        <div>
            <Button
                onClick={handleClickOpen}
                sx={[theme.custom.editButton]}>
                Redeem Details
            </Button>

            <SimpleDialog
                item={props.item}
                selectedValue={selectedValue}
                open={open}
                onClose={handleClose}
            />
        </div>
    );
}
