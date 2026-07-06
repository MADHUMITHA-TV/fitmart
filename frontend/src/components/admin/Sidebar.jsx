import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";

import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/authSlice";

export default function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <Box
      sx={{
        width: 250,
        height: "100vh",
        bgcolor: "#111827",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Logo */}
      <Box
        sx={{
          p: 3,
          fontSize: 32,
          fontWeight: "bold",
          textAlign: "center",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        FitMart
        <Box
          sx={{
            fontSize: 18,
            fontWeight: 400,
            mt: 1,
          }}
        >
          Admin Panel
        </Box>
      </Box>

      {/* Menu */}
      <List sx={{ flexGrow: 1, mt: 2 }}>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/admin/dashboard">
            <DashboardIcon />
            <ListItemText primary="Dashboard" sx={{ ml: 2 }} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} to="/admin/orders">
            <ShoppingCartIcon />
            <ListItemText primary="Orders" sx={{ ml: 2 }} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} to="/admin/users">
            <PeopleIcon />
            <ListItemText primary="Users" sx={{ ml: 2 }} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} to="/admin/products">
            <Inventory2Icon />
            <ListItemText primary="Products" sx={{ ml: 2 }} />
          </ListItemButton>
        </ListItem>
      </List>

      <Divider sx={{ bgcolor: "rgba(255,255,255,0.2)" }} />

      {/* Logout */}
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={handleLogout}>
            <LogoutIcon />
            <ListItemText primary="Logout" sx={{ ml: 2 }} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}