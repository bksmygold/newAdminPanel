import {
  TextField,
  styled,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  Button,
  MenuItem,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
//=============================================
const CustomTextField = styled(TextField)`
  & label.Mui-focused {
    color: #a88143;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #a88143;
    }
  }
`;
//=============================================
export default function FormInput(props) {
  //=============================================
  const { title, label, isFile, dropdown,add,edit } = props;
  //=============================================
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: yup.object({
      name: yup.string("Enter Metal Name").required("Metal Name is required"),
    }),
    onSubmit: (values) => {
      console.log("values ----", values);
    },
  });
  //=============================================
  return (
    <>
      <Grid item xl={3} lg={3} sm={6} xs={12}>
        <Typography
          variant="body1"
          sx={{
            color: "#8B5704",
            marginBottom: 2,
            marginTop: 2,
            fontWeight: 600,
          }}
        >
          {title}
        </Typography>
        {isFile ? (
          <CustomTextField fullWidth type="file" variant="outlined" />
        ) : dropdown ? (
          <FormControl fullWidth>
            {" "}
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
            <Select label="Search data">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Gold</MenuItem>
              <MenuItem value={10}>Silver</MenuItem>
              <MenuItem value={10}>Diamond</MenuItem>
              <MenuItem value={10}>Stone</MenuItem>
            </Select>
          </FormControl>
        ) : (
          <form onSubmit={formik.handleSubmit}>
            <CustomTextField
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
              id="name"
              name="name"
              value={formik.values.username}
              onChange={formik.handleChange}
              fullWidth
              variant="outlined"
              label={label}
            />

            {/* <Grid item xl={3} lg={3} sm={6} xs={12}> */}
              <Button type='submit'
                variant="outlined"
                sx={{ marginTop: 2, color: "#8B5704", border: "1px solid #8B5704" }}
              >
                {add ? `Add ${add}` : `Edit ${edit}`}
              </Button>
            {/* </Grid> */}
          </form>
        )}
      </Grid>
      {/* ------------------------------ */}
    </>
  );
}
