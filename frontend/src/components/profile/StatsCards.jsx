import {
  Card,
  CardContent,
  Grid,
  Typography,
  Box,
} from "@mui/material";

import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";

import { useSelector } from "react-redux";

import "./StatsCards.css";

function StatsCards() {

  const { orders } = useSelector((state) => state.orders);
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);

  const totalOrders = orders?.length || 0;
  const wishlistItems = wishlist?.items?.length || 0;
  const cartItems = cart?.totalItems || 0;

  const totalSpent =
    orders?.reduce(
      (sum, order) => sum + (order.totalAmount || 0),
      0
    ) || 0;

  const stats = [
    {
      title: "Orders",
      value: totalOrders,
      icon: <ShoppingBagOutlinedIcon fontSize="large" />,
      color: "#1976d2",
    },
    {
      title: "Wishlist",
      value: wishlistItems,
      icon: <FavoriteBorderOutlinedIcon fontSize="large" />,
      color: "#e91e63",
    },
    {
      title: "Cart",
      value: cartItems,
      icon: <ShoppingCartOutlinedIcon fontSize="large" />,
      color: "#2e7d32",
    },
    {
      title: "Total Spent",
      value: `₹${totalSpent.toLocaleString()}`,
      icon: <CurrencyRupeeOutlinedIcon fontSize="large" />,
      color: "#ef6c00",
    },
  ];

  return (
    <Grid container spacing={3} sx={{ mb: 5 }}>
      {stats.map((stat) => (
        <Grid item xs={12} sm={6} md={3} key={stat.title}>

          <Card className="stats-card">

            <CardContent>

              <Box
                className="stats-icon"
                sx={{
                  background: stat.color,
                }}
              >
                {stat.icon}
              </Box>

              <Typography
                variant="h4"
                fontWeight="bold"
                mt={2}
              >
                {stat.value}
              </Typography>

              <Typography color="text.secondary">
                {stat.title}
              </Typography>

            </CardContent>

          </Card>

        </Grid>
      ))}
    </Grid>
  );
}

export default StatsCards;