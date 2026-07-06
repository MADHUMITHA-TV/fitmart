import { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Paper,
  Button,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import AddressForm from "../../components/checkout/AddressForm";
import PaymentSection from "../../components/checkout/PaymentSection";
import CheckoutSummary from "../../components/checkout/CheckoutSummary";

import { placeOrder } from "../../redux/slices/orderSlice";
import { fetchCart } from "../../redux/slices/cartSlice";

import "./Checkout.css";

function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cart } = useSelector((state) => state.cart);
  const { loading } = useSelector((state) => state.orders);

  const [paymentMethod, setPaymentMethod] = useState("Cash On Delivery");

  const [address, setAddress] = useState({
    fullName: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const handlePlaceOrder = async () => {
    if (
      !address.fullName ||
      !address.phone ||
      !address.address ||
      !address.city ||
      !address.state ||
      !address.pincode
    ) {
      toast.error("Please fill all address fields");
      return;
    }

    const shippingAddress = `
${address.fullName}
${address.phone}

${address.address}

${address.city}

${address.state} - ${address.pincode}
`;

    try {
      await dispatch(
        placeOrder({
          shippingAddress,
          paymentMethod,
          notes: "",
        })
      ).unwrap();

      toast.success("Order placed successfully!");

      dispatch(fetchCart());

      navigate("/orders");
    } catch (err) {
      toast.error(err || "Failed to place order");
    }
  };

  if (!cart) {
    return (
      <Container sx={{ mt: 15 }}>
        <Typography variant="h5">
          Your cart is empty.
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="xl" className="checkout-page">

      <Typography
        variant="h4"
        gutterBottom
        fontWeight={700}
      >
        Checkout
      </Typography>

      <Grid container spacing={4}>

        <Grid item xs={12} md={8}>

          <Paper className="checkout-section">

            <AddressForm
              address={address}
              setAddress={setAddress}
            />

          </Paper>

          <Paper
            className="checkout-section"
            sx={{ mt: 3 }}
          >

            <PaymentSection
              paymentMethod={paymentMethod}
              setPaymentMethod={setPaymentMethod}
            />

          </Paper>

        </Grid>

        <Grid item xs={12} md={4}>

          <CheckoutSummary cart={cart} />

          <Button
            fullWidth
            variant="contained"
            size="large"
            sx={{ mt: 3 }}
            onClick={handlePlaceOrder}
            disabled={loading}
          >
            {loading ? "Placing Order..." : "Place Order"}
          </Button>

        </Grid>

      </Grid>

    </Container>
  );
}

export default Checkout;