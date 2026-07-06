import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  Chip,
  IconButton,
  Rating,
} from "@mui/material";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import toast from "react-hot-toast";

import { addToCart } from "../../redux/slices/cartSlice";
import {
  addToWishlist,
  removeFromWishlist,
  fetchWishlist,
} from "../../redux/slices/wishlistSlice";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./ProductCard.css";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addingItems = useSelector(
  (state) => state.cart.addingItems
);

const wishlist = useSelector(
  (state) => state.wishlist.wishlist
);
  const isAdding = addingItems[product.id] || false;

  const image =
    product.imageUrl ||
    "https://via.placeholder.com/400x300?text=No+Image";

  const handleAddToCart = async () => {
    const result = await dispatch(
      addToCart({
        productId: product.id,
        quantity: 1,
      })
    );

    if (addToCart.fulfilled.match(result)) {
      toast.success(`${product.name} added to cart`);
    } else {
      toast.error(result.payload || "Unable to add product");
    }
  };

 const handleWishlist = async () => {
  if (isWishlisted) {
    const result = await dispatch(
      removeFromWishlist(product.id)
    );

    if (removeFromWishlist.fulfilled.match(result)) {
      toast.success("Removed from wishlist");
      await dispatch(fetchWishlist());
    } else {
      toast.error(result.payload);
    }

  } else {

    const result = await dispatch(
      addToWishlist(product.id)
    );

    if (addToWishlist.fulfilled.match(result)) {
      toast.success("Added to wishlist");
      await dispatch(fetchWishlist());
    } else {
      toast.error(result.payload);
    }

  }
};
  const isWishlisted =
  wishlist?.items?.some(
    (item) => item.productId === product.id
  ) || false;

  return (
    <Card className="product-card">

      {product.stockQuantity <= 5 && (
        <Chip
          label="Low Stock"
          color="error"
          className="stock-chip"
        />
      )}

      <CardMedia
        component="img"
        image={image}
        alt={product.name}
        className="product-image"
      />

      <CardContent>

        <Typography
          variant="h6"
          className="product-name"
        >
          {product.name}
        </Typography>

        <Typography
          color="text.secondary"
        >
          {product.brand}
        </Typography>

        <Rating
          value={4.5}
          precision={0.5}
          readOnly
          size="small"
          sx={{ mt: 1 }}
        />

        <Typography
          variant="h5"
          color="primary"
          sx={{ mt: 2 }}
        >
          ₹{product.price}
        </Typography>

        <Typography
          color="text.secondary"
          sx={{ mb: 2 }}
        >
          {product.categoryName}
        </Typography>

        <Box className="button-group">

          <Button
            variant="contained"
            fullWidth
            startIcon={<ShoppingCartOutlinedIcon />}
            disabled={isAdding}
            onClick={handleAddToCart}
          >
            {isAdding ? "Adding..." : "Add to Cart"}
          </Button>

          <IconButton color="error" onClick={handleWishlist}>
  {isWishlisted ? (
    <FavoriteIcon />
  ) : (
    <FavoriteBorderIcon />
  )}
</IconButton>
          <IconButton
            color="primary"
            onClick={() =>
              navigate(`/products/${product.id}`)
            }
          >
            <VisibilityOutlinedIcon />
          </IconButton>

        </Box>

      </CardContent>

    </Card>
  );
}

export default ProductCard;