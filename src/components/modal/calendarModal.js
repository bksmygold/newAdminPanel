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
import { DateRangePicker } from 'react-date-range';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import { addDays } from 'date-fns';

//======================================================
function SimpleDialog(props) {
    const theme = useTheme()
    const { onClose, selectedValue, open } = props;
    const[state,setState] = React.useState([{
        startDate: new Date(),
        endDate: addDays(new Date(), 7),
        key: 'selection',
    }])

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        onClose(value);
    };
console.log("state",state)
    return (
        <Dialog sx={{width:"100vw"}}onClose={handleClose} transitionDuration={350} TransitionComponent={Slide}
            open={open}>
            <DateRangePicker
                rangeColors={['#905E0F', '#905E0F', '#905E0F']}
                
                onChange={item => setState([item.selection])}
                showSelectionPreview={true}
                moveRangeOnFirstSelection={false}
                months={2}
                ranges={state}
                direction="horizontal"
              
            />
        </Dialog>
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};

//======================================================================
export default function CalendarModal(props) {
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
                sx={{ color: "#905E0F", fontWeight: 600 }}>
                <span>Filter by date</span><InsertInvitationIcon />
            </Button>

            <SimpleDialog

                open={open}
                onClose={handleClose}
            />
        </div>
    );
}
