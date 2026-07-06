import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Typography, CircularProgress } from "@mui/material";

import { fetchOrders } from "../../redux/slices/orderSlice";
import OrderCard from "../../components/orders/OrderCard";

function Orders() {
  const dispatch = useDispatch();

  const { orders, loading } = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  if (loading) {
    return (
      <Container sx={{ mt: 15, textAlign: "center" }}>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 15, mb: 6 }}>
      <Typography
        variant="h4"
        fontWeight={700}
        gutterBottom
      >
        My Orders
      </Typography>

      {orders.length === 0 ? (
        <Typography color="text.secondary">
          You haven't placed any orders yet.
        </Typography>
      ) : (
        orders.map((order) => (
          <OrderCard
            key={order.orderId}
            order={order}
          />
        ))
      )}
    </Container>
  );
}

export default Orders;