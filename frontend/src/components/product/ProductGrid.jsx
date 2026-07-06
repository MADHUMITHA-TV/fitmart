import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";

function ProductGrid({ products }) {

  if (!products.length) {
    return <h2>No Products Found</h2>;
  }

  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          key={product.id}
        >
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductGrid;