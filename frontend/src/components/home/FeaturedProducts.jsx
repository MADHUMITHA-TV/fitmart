import { Container, Typography, Grid } from "@mui/material";

import dummyProducts from "../../constants/dummyProducts";

import ProductCard from "./ProductCard";

import "./featuredProducts.css";

function FeaturedProducts(){

return(

<Container sx={{py:8}}>

<Typography

variant="h4"

fontWeight="bold"

textAlign="center"

mb={5}

>

Featured Products

</Typography>

<Grid container spacing={4}>

{dummyProducts.map(product=>(

<Grid

item

xs={12}

sm={6}

md={3}

key={product.id}

>

<ProductCard

product={product}

/>

</Grid>

))}

</Grid>

</Container>

);

}

export default FeaturedProducts;