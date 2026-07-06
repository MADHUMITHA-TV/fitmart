import { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "../../redux/slices/productSlice";
import { fetchCategories } from "../../redux/slices/categorySlice";
import {searchProducts,fetchProductsByCategory,fetchProductsByPrice,} from "../../redux/slices/productSlice";
import { fetchWishlist } from "../../redux/slices/wishlistSlice";
import ProductGrid from "../../components/product/ProductGrid";
import ProductToolbar from "../../components/product/ProductToolbar";
import ProductFilters from "../../components/product/ProductFilters";
import ProductPagination from "../../components/product/ProductPagination";

function Products() {
  const dispatch = useDispatch();

  const { products, loading } = useSelector(
    (state) => state.products
  );
  const { categories } = useSelector(
  (state) => state.categories
);
  console.log("Products:", products);
  console.log("Loading:", loading);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("name");

  const [category, setCategory] = useState("");

  const [price, setPrice] = useState([0,100000]);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
    dispatch(fetchWishlist());
  }, [dispatch]);

  useEffect(() => {

    const timer = setTimeout(() => {

        if (search.trim()) {

            dispatch(searchProducts(search));

        } else {

            dispatch(fetchProducts());

        }

    },300);

    return () => clearTimeout(timer);

},[search,dispatch]);
 
  useEffect(() => {
  if (category) {
    dispatch(fetchProductsByCategory(category));
  } else {
    dispatch(fetchProducts());
  }
}, [category, dispatch]);

useEffect(() => {
  dispatch(
    fetchProductsByPrice({
      min: price[0],
      max: price[1],
    })
  );
}, [price, dispatch]);
  

  if (loading)
    return <h2>Loading...</h2>;

  return (

    <Container sx={{ mt:5 }}>

      <ProductToolbar

        search={search}

        setSearch={setSearch}

        sortBy={sortBy}

        setSortBy={setSortBy}

        productCount={products.length}

      />

      <Grid container spacing={4}>

        <Grid item xs={12} md={3}>

          <ProductFilters

            categories={categories}

            category={category}

            setCategory={setCategory}

            price={price}

            setPrice={setPrice}

          />

        </Grid>

        <Grid item xs={12} md={9}>

          <ProductGrid products={products} />

        </Grid>

      </Grid>

      <ProductPagination

        page={1}

        totalPages={1}

        onChange={()=>{}}

      />

    </Container>

  );

}

export default Products;