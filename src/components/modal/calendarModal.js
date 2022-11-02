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
import dayjs from "dayjs";
import { useController } from "../../controller/dashboard"
import { useDashboardFilter } from "../../context/dashboardFilter";

//======================================================
function SimpleDialog(props) {
    const theme = useTheme()
    const { query } = useController()
    const filter = useDashboardFilter()

    const { onClose, selectedValue, open } = props;


    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        onClose(value);
    };

    // console.log("From ---", dayjs(state[0].startDate).format('DD/MM/YYYY'))
    // console.log("To ---", dayjs(state[0].endDate).format('DD/MM/YYYY'))

    return (
        <Dialog
            sx={{ width: "100vw" }}
            onClose={handleClose}
            transitionDuration={350}
            TransitionComponent={Slide}
            open={open}
        >
            <DateRangePicker
                rangeColors={['#905E0F', '#905E0F', '#905E0F']}
                ranges={[{
                    startDate: filter.fromDate,
                    endDate: filter.toDate,
                    key: "selection"
                }]}
                onChange={item => {
                    filter.setFromDate(item.selection.startDate)
                    filter.setToDate(item.selection.endDate)
                }}
                showSelectionPreview={true}
                moveRangeOnFirstSelection={false}
                months={2}
                direction="vertical"
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
    const filter = useDashboardFilter()
    const [open, setOpen] = React.useState(false);

    // console.log("filter ---",dayjs(filter.fromDate).format("DD/MM/YYYY"))

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
                sx={{ backgroundColor: "#FDFAF2", border: "1px solid #F1E9D4 ", color: "#905E0F", fontWeight: 600, m: 1 }}>
                {dayjs(filter.fromDate).format("DD/MMM/YY")}{" - "}{dayjs(filter.toDate).format("DD/MMM/YY")}
                <InsertInvitationIcon sx={{ ml: 2 }} /></Button>

            <SimpleDialog

                open={open}
                onClose={handleClose}
            />
        </div>
    );
}
