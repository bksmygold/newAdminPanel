import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  FormControlLabel,
  FormGroup,
  Checkbox,
  styled,
} from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import MoneyIcon from '@mui/icons-material/Money';
import TimelineIcon from '@mui/icons-material/Timeline';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { useRouter } from 'next/router';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PaymentsIcon from '@mui/icons-material/Payments';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StoreIcon from '@mui/icons-material/Store';
import GroupsIcon from '@mui/icons-material/Groups';
import { useState } from 'react';
import CheckAll from '../checkAll';

//=====================================
const CustomTextCheckbox = styled(Checkbox)`
  root: {
    '&$checked': {
      color: 'red';
    }
  }
  ,
    checked: {
  }
`;
//=========================================================
export const PermissionCard = (props) => {
  const router = useRouter();
  let { permissions } = props
  const [checkedAll, setCheckedAll] = useState(false)

  const [checked, setChecked] = useState(false)
  //-------------------------------------------
  return (
    <>
      <Card
        sx={{
          boxShadow: '0px 4px 1px 0px #d2c6c6',
          border: '1px solid #d2c6c657',
          // width: "fit-content",
          // height: "fit-content",
        }}
      >
        <Grid
          container
          spacing={3}
          sx={{
            display: 'flex',
            flexDirection: 'rows',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 1,
            marginTop: 1,
          }}
        >
          <Typography
            sx={{
              backgroundColor: '#FDFAF2',
              textAlign: 'center',
              fontWeight: 'bolder',
              color: 'gray',
              width: '100%',
            }}
          >
            {props.title}
          </Typography>
          <Grid item>
            {/* {props.perm.map((x) => (
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: '#8B5704',
                        '&.Mui-checked': {
                          color: "#8B5704",
                        },
                      }}
                      checked={checkedAll}
                      // defaultChecked={checked}
                      onChange={(e) => {
                        console.log("<--->", e.target.value)
                        if (e.target.value === "all") {
                          setCheckedAll(true),
                            props.setPermissions(x.value)
                        }
                        setChecked((prev) => !prev)
                        props.setPermissions(x.value)
                      }}
                      value={x.value}
                    />
                  }
                  label={x.name}
                />
              </FormGroup>
            ))} */}
            <CheckAll
              perm={props.perm}
              setPerm={props.setPermissions}
            />

          </Grid>
        </Grid>
      </Card>
    </>
  );
};
