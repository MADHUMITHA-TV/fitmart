import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
} from "@mui/material";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logout } from "../../redux/slices/authSlice";

import "./SettingsCards.css";

function SettingsCards() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cards = [

    {
      title: "Change Password",
      subtitle: "Update your account password",
      icon: <LockOutlinedIcon />,
      color: "#1565C0",
      action: () => navigate("/change-password"),
    },

    {
      title: "Manage Addresses",
      subtitle: "Shipping & Billing addresses",
      icon: <HomeOutlinedIcon />,
      color: "#43A047",
      action: () => navigate("/addresses"),
    },

    {
      title: "Notifications",
      subtitle: "Email & Push settings",
      icon: <NotificationsOutlinedIcon />,
      color: "#EF6C00",
      action: () => {},
    },

    {
      title: "Privacy & Security",
      subtitle: "Manage your account security",
      icon: <SecurityOutlinedIcon />,
      color: "#8E24AA",
      action: () => {},
    },

    {
      title: "Help & Support",
      subtitle: "Contact FitMart Support",
      icon: <HelpOutlineOutlinedIcon />,
      color: "#0097A7",
      action: () => navigate("/contact"),
    },

    {
      title: "Logout",
      subtitle: "Sign out from your account",
      icon: <LogoutOutlinedIcon />,
      color: "#E53935",
      action: () => {
        dispatch(logout());
        navigate("/login");
      },
    },

  ];

  return (

    <Box mt={4}>

      <Typography
        variant="h5"
        fontWeight="bold"
        mb={3}
      >
        Account Settings
      </Typography>

      <Grid container spacing={3}>

        {cards.map((card) => (

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={card.title}
          >

            <Card
              className="settings-card"
              onClick={card.action}
            >

              <CardContent>

                <Box
                  className="settings-icon"
                  sx={{
                    background: card.color,
                  }}
                >
                  {card.icon}
                </Box>

                <Typography
                  variant="h6"
                  mt={2}
                  fontWeight={700}
                >
                  {card.title}
                </Typography>

                <Typography color="text.secondary">
                  {card.subtitle}
                </Typography>

              </CardContent>

            </Card>

          </Grid>

        ))}

      </Grid>

    </Box>

  );

}

export default SettingsCards;