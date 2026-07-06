import { useEffect } from "react";
import {
  Container,
  Grid,
  Typography,
  CircularProgress,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";

import { fetchWishlist } from "../../redux/slices/wishlistSlice";

import ProductCard from "../../components/product/ProductCard";

function Wishlist() {
  const dispatch = useDispatch();

  const {
    wishlist,
    loading,
  } = useSelector((state) => state.wishlist);

  useEffect(() => {
    dispatch(fetchWishlist());
  }, [dispatch]);

  if (loading) {
    return (
      <Container sx={{ mt: 15, textAlign: "center" }}>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ mt: 15, mb: 6 }}>
      <Typography
        variant="h4"
        fontWeight={700}
        gutterBottom
      >
        My Wishlist
      </Typography>

      {!wishlist || wishlist.items.length === 0 ? (
        <Typography color="text.secondary">
          Wishlist is empty.
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {wishlist.items.map((item) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={item.productId}
            >
              <ProductCard
                product={{
                  id: item.productId,
                  name: item.productName,
                  brand: item.brand,
                  price: item.price,
                  imageUrl: item.imageUrl,
                  categoryName: "",
                  stockQuantity: 100,
                }}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}

export default Wishlist;