import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography
} from '@mui/material';
import { getLoggedInUser } from "src/apis/user";
import { useEffect, useState } from "react";
import {useTheme} from "@mui/styles"

//==============================================
// const user = {
//   avatar: '/static/images/avatars/avatar_6.png',
//   city: 'Los Angeles',
//   country: 'USA',
//   jobTitle: 'Senior Developer',
//   name: 'Katarina Smith',
//   timezone: 'GTM-7'
// };

export const AccountProfile = (props) => {
  const theme = useTheme()
  //=================================================
  const [user, setUser] = useState({});
  useEffect(() => {
    getLoggedInUser().then((res) => setUser(res));
  }, []);


  //=================================================
  return (
    <Card {...props}>
      <CardContent>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Avatar
            src={user.avatar}
            sx={{
              height: 64,
              mb: 2,
              width: 64,
            }}
          />
          <Typography color="textPrimary" gutterBottom variant="h5" sx={{ color: "#905E0F" }}>
            {user.fullName}
          </Typography>
          <Typography color="textSecondary" variant="body2">
            DOB: {`${user.dob}`}
          </Typography>
          <Typography color="textSecondary" variant="body2">
            Email: {` ${user.email}`}
          </Typography>
          <Typography color="textSecondary" variant="body2">
            {user.timezone}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button sx={theme.custom.addButton} fullWidth variant="text">
          Upload picture
        </Button>
      </CardActions>
    </Card>
  );
}
