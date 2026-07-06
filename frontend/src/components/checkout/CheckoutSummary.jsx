import {
  Card,
  CardContent,
  Typography,
  Divider,
  Box,
  Chip,
} from "@mui/material";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import DiscountIcon from "@mui/icons-material/Discount";
import Inventory2Icon from "@mui/icons-material/Inventory2";

function CheckoutSummary({ cart }) {
  if (!cart) return null;

  return (
    <Card
      elevation={3}
      sx={{
        borderRadius: 4,
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          fontWeight={700}
          gutterBottom
        >
          Order Summary
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Box
          display="flex"
          justifyContent="space-between"
          mb={2}
        >
          <Typography color="text.secondary">
            Total Items
          </Typography>

          <Typography fontWeight={600}>
            {cart.totalItems}
          </Typography>
        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
          mb={2}
        >
          <Typography color="text.secondary">
            Subtotal
          </Typography>

          <Typography fontWeight={600}>
            ₹{cart.grandTotal.toLocaleString()}
          </Typography>
        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
          mb={2}
        >
          <Typography color="text.secondary">
            Shipping
          </Typography>

          <Typography
            color="success.main"
            fontWeight={700}
          >
            FREE
          </Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box
          display="flex"
          justifyContent="space-between"
        >
          <Typography
            variant="h6"
            fontWeight={700}
          >
            Grand Total
          </Typography>

          <Typography
            variant="h6"
            color="primary"
            fontWeight={700}
          >
            ₹{cart.grandTotal.toLocaleString()}
          </Typography>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Chip
          icon={<DiscountIcon />}
          color="success"
          label="Free Shipping Applied"
          sx={{ mb: 2 }}
        />

        <Box
          display="flex"
          alignItems="center"
          gap={1}
          mb={1}
        >
          <LocalShippingIcon color="primary" />

          <Typography variant="body2">
            Estimated Delivery: 3-5 Business Days
          </Typography>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          gap={1}
        >
          <Inventory2Icon color="success" />

          <Typography variant="body2">
            All items are currently in stock
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default CheckoutSummary;