import { useEffect, useState } from "react";
import {
  Grid,
  Paper,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";

import {
  People,
  Inventory,
  ShoppingCart,
  AttachMoney,
} from "@mui/icons-material";

import { getDashboard } from "../../services/adminApi";

function DashboardCard({ title, value, icon }) {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        borderRadius: 3,
        height: 150,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography color="text.secondary" variant="body2">
          {title}
        </Typography>

        <Typography variant="h4" fontWeight="bold" mt={2}>
          {value}
        </Typography>
      </Box>

      {icon}
    </Paper>
  );
}

export default function AdminDashboard() {
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const response = await getDashboard();

        console.log("Dashboard Response:", response.data);

        setDashboard(response.data.data);
      } catch (error) {
        console.error("Dashboard Error:", error);
      } finally {
        setLoading(false);
      }
    };

    loadDashboard();
  }, []);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="80vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!dashboard) {
    return (
      <Typography color="error" sx={{ p: 5 }}>
        Failed to load dashboard.
      </Typography>
    );
  }

  return (
    <Box p={4}>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={4}
      >
        Dashboard
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <DashboardCard
            title="Users"
            value={dashboard.totalUsers}
            icon={<People color="primary" sx={{ fontSize: 45 }} />}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <DashboardCard
            title="Products"
            value={dashboard.totalProducts}
            icon={<Inventory color="success" sx={{ fontSize: 45 }} />}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <DashboardCard
            title="Orders"
            value={dashboard.totalOrders}
            icon={<ShoppingCart color="warning" sx={{ fontSize: 45 }} />}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <DashboardCard
            title="Revenue"
            value={`₹${dashboard.totalRevenue}`}
            icon={<AttachMoney color="success" sx={{ fontSize: 45 }} />}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <DashboardCard
            title="Pending Orders"
            value={dashboard.pendingOrders}
            icon={<ShoppingCart color="warning" sx={{ fontSize: 45 }} />}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <DashboardCard
            title="Delivered Orders"
            value={dashboard.deliveredOrders}
            icon={<ShoppingCart color="success" sx={{ fontSize: 45 }} />}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={4}>
          <DashboardCard
            title="Today's Revenue"
            value={`₹${dashboard.todayRevenue}`}
            icon={<AttachMoney color="primary" sx={{ fontSize: 45 }} />}
          />
        </Grid>
      </Grid>
    </Box>
  );
}