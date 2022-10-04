import { Button } from "@mui/material"
import { useTheme } from "@mui/styles";
import EditIcon from '@mui/icons-material/Edit';
import { useRouter } from 'next/router';


export const EditButton = (props) => {
    const theme = useTheme()
    const router = useRouter()
    // console.log("params ---", props.params)
    return (
        <strong>
            {props.variant ? (
                <Button
                    variant="contained"
                    sx={theme.custom.editButton}
                    size="small"
                    onClick={() => {
                        router.push(props.url)
                    }}
                >
                    Edit <EditIcon sx={theme.custom.editButton.iconStyle} />
                </Button>
            ) : (
                <Button
                    variant="contained"
                    sx={theme.custom.editButton}
                    size="small"
                    onClick={props.onClick}
                >
                    Edit <EditIcon sx={theme.custom.editButton.iconStyle} />
                </Button>
            )}

        </strong>
    );
};