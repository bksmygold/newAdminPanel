import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { FormControl, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


export default function GraphModal(props) {

    const options = {
        responsive: true,
        plugins: {
            legend: {
                // position: 'top' ,
                display: false
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart',
            },

        },
    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Dataset 2',
                data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',

            },
        ],
    };

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Show Summary" />
                <FormControlLabel onClick={handleClickOpen  } control={<Checkbox />}
                    label="Show graph" />
            </FormGroup>
            <Dialog

                open={open}
                // TransitionComponent={Transition
                keepMounted
                
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"

            >
                <DialogTitle>{"Graphical statistics of reports"}</DialogTitle>

                <DialogContent
                    sx={{ width: "600px" }}

                >
                    <DialogContentText id="alert-dialog-slide-description">
                        <Line options={options} data={data} />
                    </DialogContentText>
                </DialogContent>
                {/* <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions> */}
            </Dialog>
        </div>
    );
}
