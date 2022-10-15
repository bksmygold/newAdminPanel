import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
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
import { Box, Container, Grid } from '@mui/system';
import { Slide } from '@mui/material';
//======================================================
function SimpleDialog(props) {
    const theme = useTheme()
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        onClose(value);
    };

    return (
        <Dialog onClose={handleClose} transitionDuration={350} TransitionComponent={Slide}
            open={open}>
            <DialogTitle>Items Details </DialogTitle>
            {props.item ? props.item.map(x => (
                <>
                    <Box sx={theme.custom.cardModal.box}>
                        <Typography sx={theme.custom.typography.cardModal} >Name :</Typography>
                        <Typography sx={theme.custom.typography.cardModal}>{x.name}</Typography>
                    </Box>

                    <Box sx={theme.custom.cardModal.box}>
                        <Typography sx={theme.custom.typography.cardModal} >Details :</Typography>
                        <ul style={{ listStyle: "none" }}>
                            {x.details ? x.details.map(z => (
                                <Typography sx={theme.custom.typography.cardModal} >{z}</Typography>
                            )) : null}
                        </ul>
                    </Box>

                    <Box sx={theme.custom.cardModal.box}>
                        <Typography sx={theme.custom.typography.cardModal} >Photo :</Typography>
                        <img width={70} src={x.photo} />
                    </Box>

                    <Box sx={theme.custom.cardModal.box}>
                        <Typography sx={theme.custom.typography.cardModal} >Weight :</Typography>
                        <Typography sx={theme.custom.typography.cardModal}>{x.weight} gm</Typography>
                    </Box>
                </>
            )) : props.data ? props.data.map(z => (
                <>
                    <Box sx={theme.custom.cardModal.box}>
                        <Typography sx={theme.custom.typography.cardModal} >Purity :</Typography>
                        <Typography sx={theme.custom.typography.cardModal}>{z.purity}</Typography>
                    </Box>
                    <Box sx={theme.custom.cardModal.box}>
                        <Typography sx={theme.custom.typography.cardModal} >Weight :</Typography>
                        <Typography sx={theme.custom.typography.cardModal}>{z.weight}</Typography>
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

//======================================================================
export default function CardModal(props) {
    const theme = useTheme()

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        // setSelectedValue(value);
    };

    return (
        <div>
            <Button
                onClick={handleClickOpen}
                sx={[theme.custom.editButton]}>
                Item Details
            </Button>

            <SimpleDialog
                item={props.item}
                data={props.data}
                open={open}
                onClose={handleClose}
            />
        </div>
    );
}
