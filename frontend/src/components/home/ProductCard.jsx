import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  IconButton,
  Chip,
  Rating,
  Box
} from "@mui/material";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { useNavigate } from "react-router-dom";

import "./productCard.css";

function ProductCard({ product }) {

  const navigate = useNavigate();

  return (

<Card className="product-card">

<Chip
label={product.discount}
color="error"
className="discount-chip"
/>

<CardMedia

component="img"

height="220"

image={product.image}

/>

<CardContent>

<Typography variant="h6">

{product.name}

</Typography>

<Rating

value={product.rating}

precision={0.5}

readOnly

/>

<Box mt={1}>

<Typography
variant="h6"
color="primary"
>

₹{product.price}

</Typography>

<Typography

sx={{
textDecoration:"line-through"
}}

>

₹{product.oldPrice}

</Typography>

</Box>

</CardContent>

<CardActions>

<IconButton>

<FavoriteBorderIcon/>

</IconButton>

<Button

variant="contained"

startIcon={<ShoppingCartIcon/>}

>

Add

</Button>

<Button

onClick={()=>navigate(`/products/${product.id}`)}

>

View

</Button>

</CardActions>

</Card>

);

}

export default ProductCard;