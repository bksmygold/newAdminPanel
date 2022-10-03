import { Button } from "@mui/material"
import { useTheme } from "@mui/styles";
import EditIcon from '@mui/icons-material/Edit';
import DeleteSpinner from 'src/components/deleteSpinner';

//==============================================
export const DeleteButton = (props) => {
    return (
        <DeleteSpinner
            id={props.id}
            deleting={props.deleting}
        />
    );
};