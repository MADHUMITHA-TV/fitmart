import {
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
  Button,
  Avatar,
} from "@mui/material";

import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import OrderStatusChip from "../orders/OrderStatusChip";

import "./RecentOrders.css";

function RecentOrders() {

  const navigate = useNavigate();

  const { orders } = useSelector(
    (state) => state.orders
  );

  const recentOrders = orders.slice(0, 3);

  return (

    <Card className="recent-orders-card">

      <CardContent>

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={3}
        >

          <Box
            display="flex"
            alignItems="center"
            gap={1}
          >

            <ShoppingBagOutlinedIcon color="primary" />

            <Typography
              variant="h5"
              fontWeight="bold"
            >
              Recent Orders
            </Typography>

          </Box>

          <Button
            onClick={() => navigate("/orders")}
          >
            View All
          </Button>

        </Box>

        {recentOrders.length === 0 ? (

          <Typography color="text.secondary">

            No orders yet.

          </Typography>

        ) : (

          recentOrders.map((order) => (

            <Box
              key={order.orderId}
              className="recent-order"
            >

              <Avatar
                src={
                  order.items?.[0]?.imageUrl ||
                  "https://via.placeholder.com/80"
                }
                variant="rounded"
                sx={{
                  width: 70,
                  height: 70,
                }}
              />

              <Box flex={1}>

                <Typography fontWeight={700}>

                  Order #{order.orderId}

                </Typography>

                <Typography
                  color="text.secondary"
                  fontSize={14}
                >

                  {new Date(
                    order.orderedAt
                  ).toLocaleDateString()}

                </Typography>

                <Typography>

                  {order.items.length} item(s)

                </Typography>

              </Box>

              <Box textAlign="right">

                <OrderStatusChip
                  status={order.status}
                />

                <Typography
                  mt={1}
                  fontWeight={700}
                >

                  ₹{order.totalAmount}

                </Typography>

              </Box>

            </Box>

          ))

        )}

      </CardContent>

    </Card>

  );

}

export default RecentOrders;