import { useEffect } from "react";
import {
  Container,
  Typography,
  Grid,
  CircularProgress,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "../../redux/slices/productSlice";
import ProductCard from "./ProductCard";

import "./featuredProducts.css";

function FeaturedProducts() {
  const dispatch = useDispatch();

  const { products, loading } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Container sx={{ py: 8 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        mb={5}
      >
        Featured Products
      </Typography>

      {loading ? (
        <CircularProgress
          sx={{
            display: "block",
            mx: "auto",
          }}
        />
      ) : (
        <Grid container spacing={4}>
          {products.slice(0, 8).map((product) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={product.id}
            >
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}

export default FeaturedProducts;