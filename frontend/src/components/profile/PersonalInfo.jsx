import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Divider,
  Button,
} from "@mui/material";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

import { useSelector } from "react-redux";

import "./PersonalInfo.css";

function PersonalInfo() {

  const { user } = useSelector((state) => state.auth);

  return (

    <Card className="personal-card">

      <CardContent>

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >

          <Typography
            variant="h5"
            fontWeight="bold"
          >
            Personal Information
          </Typography>

          <Button
            variant="outlined"
            startIcon={<EditOutlinedIcon />}
          >
            Edit
          </Button>

        </Box>

        <Divider sx={{ mb: 3 }} />

        <Grid container spacing={3}>

          <Grid item xs={12} md={6}>
            <Typography className="label">
              First Name
            </Typography>

            <Typography className="value">
              {user?.firstName || "-"}
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography className="label">
              Last Name
            </Typography>

            <Typography className="value">
              {user?.lastName || "-"}
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography className="label">
              Email
            </Typography>

            <Typography className="value">
              {user?.email || "-"}
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography className="label">
              Phone
            </Typography>

            <Typography className="value">
              {user?.phone || "-"}
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography className="label">
              Gender
            </Typography>

            <Typography className="value">
              {user?.gender || "Not Added"}
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography className="label">
              Date of Birth
            </Typography>

            <Typography className="value">
              {user?.dob || "Not Added"}
            </Typography>
          </Grid>

        </Grid>

      </CardContent>

    </Card>

  );

}

export default PersonalInfo;