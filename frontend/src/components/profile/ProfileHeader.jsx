import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

import { useSelector } from "react-redux";

import "./ProfileHeader.css";

function ProfileHeader() {
  const { user } = useSelector((state) => state.auth);

  return (
    <Card className="profile-header-card">

      <CardContent>

        <Grid
          container
          spacing={4}
          alignItems="center"
        >

          {/* Avatar */}

          <Grid item>

            <Avatar
              src={user?.profileImage}
              sx={{
                width: 120,
                height: 120,
                fontSize: 40,
                bgcolor: "primary.main",
              }}
            >
              {user?.firstName?.charAt(0)}
            </Avatar>

          </Grid>

          {/* User Details */}

          <Grid item xs>

            <Typography
              variant="h4"
              fontWeight="bold"
            >
              {user?.firstName} {user?.lastName}
            </Typography>

            <Box
              display="flex"
              alignItems="center"
              mt={2}
              gap={1}
            >
              <EmailOutlinedIcon color="primary" />

              <Typography color="text.secondary">
                {user?.email}
              </Typography>
            </Box>

            <Box
              display="flex"
              alignItems="center"
              mt={1}
              gap={1}
            >
              <PhoneOutlinedIcon color="primary" />

              <Typography color="text.secondary">
                {user?.phone}
              </Typography>
            </Box>

            <Box
              display="flex"
              alignItems="center"
              mt={1}
              gap={1}
            >
              <CalendarMonthOutlinedIcon color="primary" />

              <Typography color="text.secondary">
                Member Since {user?.createdAt?.substring(0, 10)}
              </Typography>
            </Box>

          </Grid>

          {/* Edit Button */}

          <Grid item>

            <Button
              variant="contained"
              startIcon={<EditIcon />}
            >
              Edit Profile
            </Button>

          </Grid>

        </Grid>

      </CardContent>

    </Card>
  );
}

export default ProfileHeader;