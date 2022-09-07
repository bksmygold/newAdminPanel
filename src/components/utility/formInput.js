import { TextField, Typography, Grid, FormControl,InputLabel,Select,MenuItem } from "@mui/material";

//=============================================
export default function FormInput(props) {
  const { title, label, isFile , dropdown} = props;
  //--------------
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
          <TextField fullWidth type="file" variant="outlined" />
        ) : dropdown ? (
          <FormControl fullWidth>
            {" "}
              <InputLabel id="demo-simple-select-label">{ label}</InputLabel>
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
          <TextField fullWidth variant="outlined" label={label} />
        )}
      </Grid>
      {/* ------------------------------ */}
    </>
  );
}
