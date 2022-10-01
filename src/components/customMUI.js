import {
  FormControl,
  styled,
  TextField,
  Button
} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { useTheme } from '@mui/styles';
//-----------------------------------------------------------


export const CustomFormControl = styled(FormControl)`
  & label .Mui-focused {
    color: #a88143;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #a88143;
    }
  }
`;
//-----------------------------------------------------------
export const CustomTextField = styled(TextField)`
  & label.Mui-focused {
    color: #a88143;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #a88143;
    }
  }
`;
//-----------------------------------------------------------

export const EditButton = (params) => {
  const theme = useTheme()

  return (
    <strong>
      <Button
        variant="contained"
        sx={theme.custom.editButton}
        size="small"
        onClick={() => {
          props.setId(params.row.id);
          editFormik.setValues(params.row);
          setShowEdit(params.row);
        }}
      >
        Edit <EditIcon sx={ theme.custom.editButton.iconStyle} />
      </Button>
    </strong>
  );
};