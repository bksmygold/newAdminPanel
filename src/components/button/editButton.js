import { Button } from "@mui/material"
import { useTheme } from "@mui/styles";
import EditIcon from '@mui/icons-material/Edit';

export const EditButton = (props) => {
    const theme = useTheme()
    // console.log("params ---", props.params)
    return (
        <strong>
            <Button
                variant="contained"
                sx={theme.custom.editButton}
                size="small"
                onClick={props.onClick}
            >
                Edit <EditIcon sx={theme.custom.editButton.iconStyle} />
            </Button>
        </strong>
    );
};