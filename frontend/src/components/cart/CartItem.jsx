import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
  IconButton,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import { useDispatch } from "react-redux";
import {
  updateCartQuantity,
  removeCartItem,
  fetchCart,
} from "../../redux/slices/cartSlice";

import toast from "react-hot-toast";

import "./CartItem.css";

function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleIncrease = async () => {
    const result = await dispatch(
      updateCartQuantity({
        cartItemId: item.cartItemId,
        quantity: item.quantity + 1,
      })
    );

    if (updateCartQuantity.fulfilled.match(result)) {
      await dispatch(fetchCart());
      toast.success("Quantity updated");
    } else {
      toast.error(result.payload || "Failed to update quantity");
    }
  };

  const handleDecrease = async () => {
    if (item.quantity === 1) {
      handleRemove();
      return;
    }

    const result = await dispatch(
      updateCartQuantity({
        cartItemId: item.cartItemId,
        quantity: item.quantity - 1,
      })
    );

    if (updateCartQuantity.fulfilled.match(result)) {
      await dispatch(fetchCart());
      toast.success("Quantity updated");
    } else {
      toast.error(result.payload || "Failed to update quantity");
    }
  };

  const handleRemove = async () => {
    const result = await dispatch(removeCartItem(item.cartItemId));

    if (removeCartItem.fulfilled.match(result)) {
      await dispatch(fetchCart());
      toast.success("Item removed");
    } else {
      toast.error(result.payload || "Failed to remove item");
    }
  };

  return (
    <Card className="cart-item">
      <CardMedia
        component="img"
        image={item.imageUrl}
        alt={item.productName}
        className="cart-image"
      />

      <CardContent className="cart-content">
        <Typography variant="h6">
          {item.productName}
        </Typography>

        <Typography color="primary" fontWeight="bold">
          ₹{item.price}
        </Typography>

        <Box className="quantity-box">
          <IconButton onClick={handleDecrease}>
            <RemoveIcon />
          </IconButton>

          <Typography fontWeight="bold">
            {item.quantity}
          </Typography>

          <IconButton onClick={handleIncrease}>
            <AddIcon />
          </IconButton>
        </Box>

        <Button
          color="error"
          variant="outlined"
          startIcon={<DeleteOutlineIcon />}
          onClick={handleRemove}
        >
          Remove
        </Button>
      </CardContent>

      <Box
        className="total-price"
        sx={{
          display: "flex",
          alignItems: "center",
          pr: 3,
          fontWeight: "bold",
          fontSize: "20px",
          color: "#1976d2",
        }}
      >
        ₹{item.totalPrice}
      </Box>
    </Card>
  );
}

export default CartItem;