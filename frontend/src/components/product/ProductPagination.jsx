import { Box, Pagination } from "@mui/material";

function ProductPagination({
  page,
  totalPages,
  onChange,
}) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      mt={5}
    >
      <Pagination
        page={page}
        count={totalPages}
        color="primary"
        onChange={(_,value)=>onChange(value)}
      />
    </Box>
  );
}

export default ProductPagination;