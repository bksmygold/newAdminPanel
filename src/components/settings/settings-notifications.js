import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Typography
} from '@mui/material';

export const SettingsNotifications = (props) => (
  <form {...props}>
    <Card
      sx={{ boxShadow: "0px 4px 1px 0px #d2c6c6", marginTop: 5, border: "1px solid #d2c6c657" }}
    >
      <CardHeader subheader="Manage the notifications" title="Notifications" />
      <Divider />
      <CardContent>
        <Grid container spacing={6} wrap="wrap">
          <Grid
            item
            md={4}
            sm={6}
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
            xs={12}
          >
            <Typography color="textPrimary" gutterBottom variant="h6">
              Notifications
            </Typography>
            <FormControlLabel control={<Checkbox color="primary" defaultChecked />} label="Email" />
            <FormControlLabel
              control={<Checkbox color="primary" defaultChecked />}
              label="Push Notifications"
            />
            <FormControlLabel control={<Checkbox />} label="Text Messages" />
            <FormControlLabel
              control={<Checkbox color="primary" defaultChecked />}
              label="Phone calls"
            />
          </Grid>
          <Grid
            item
            md={4}
            sm={6}
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
            xs={12}
          >
            <Typography color="textPrimary" gutterBottom variant="h6">
              Messages
            </Typography>
            <FormControlLabel control={<Checkbox color="primary" defaultChecked />} label="Email" />
            <FormControlLabel control={<Checkbox />} label="Push Notifications" />
            <FormControlLabel
              control={<Checkbox color="primary" defaultChecked />}
              label="Phone calls"
            />
          </Grid>
        </Grid>
      </CardContent>
      <Divider />
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          p: 2,
        }}
      >
        <Button color="primary" variant="contained">
          Save
        </Button>
      </Box>
    </Card>
  </form>
);
