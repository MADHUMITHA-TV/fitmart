import {
  Box,
  TextField,
  MenuItem,
  Typography,
} from "@mui/material";

function ProductToolbar({
  search,
  setSearch,
  sortBy,
  setSortBy,
  productCount,
}) {
  return (
    <Box
  sx={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 2,
  }}
>
      <Typography variant="h6">
        {productCount} Products
      </Typography>

      <TextField
        size="small"
        label="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <TextField
        select
        size="small"
        label="Sort By"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        sx={{ minWidth: 180 }}
      >
        <MenuItem value="name">Name</MenuItem>

<MenuItem value="price">Price</MenuItem>

<MenuItem value="brand">Brand</MenuItem>
      </TextField>
    </Box>
  );
}

export default ProductToolbar;