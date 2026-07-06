import {
  Paper,
  Typography,
  Divider,
  RadioGroup,
  FormControlLabel,
  Radio,
  Slider,
} from "@mui/material";

function ProductFilters({
  categories,
  category,
  setCategory,
  price,
  setPrice,
}) {
  return (
    <Paper sx={{ p: 3 }}>

      <Typography variant="h6">
        Filters
      </Typography>

      <Divider sx={{ my: 2 }} />

      {/* Category Filter */}

      <Typography fontWeight={600}>
        Category
      </Typography>

      <RadioGroup
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <FormControlLabel
          value=""
          control={<Radio />}
          label="All"
        />

        {categories.map((cat) => (
          <FormControlLabel
            key={cat.id}
            value={cat.id}
            control={<Radio />}
            label={cat.name}
          />
        ))}
      </RadioGroup>

      {/* Price Filter */}

      <Divider sx={{ my: 3 }} />

      <Typography fontWeight={600}>
        Price Range
      </Typography>

      <Slider
        value={price}
        onChange={(e, newValue) => setPrice(newValue)}
        valueLabelDisplay="auto"
        min={0}
        max={100000}
        step={500}
      />

      <Typography variant="body2">
        ₹{price[0]} - ₹{price[1]}
      </Typography>

    </Paper>
  );
}

export default ProductFilters;