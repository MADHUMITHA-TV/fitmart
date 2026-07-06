import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Avatar,
  IconButton,
} from "@mui/material";

import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  removeFromWishlist,
  fetchWishlist,
} from "../../redux/slices/wishlistSlice";

import toast from "react-hot-toast";

import "./WishlistPreview.css";

function WishlistPreview() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { wishlist } = useSelector(
    (state) => state.wishlist
  );

  const items = wishlist?.items?.slice(0, 4) || [];

  const handleRemove = async (productId) => {

    try {

      await dispatch(removeFromWishlist(productId)).unwrap();
      await dispatch(fetchWishlist());

      toast.success("Removed from wishlist");

    } catch (err) {

      toast.error(err);

    }

  };

  return (

    <Card className="wishlist-preview-card">

      <CardContent>

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={3}
        >

          <Box
            display="flex"
            alignItems="center"
            gap={1}
          >

            <FavoriteOutlinedIcon color="error"/>

            <Typography
              variant="h5"
              fontWeight="bold"
            >

              Wishlist

            </Typography>

          </Box>

          <Button
            onClick={() => navigate("/wishlist")}
          >

            View All

          </Button>

        </Box>

        {items.length === 0 ? (

          <Typography color="text.secondary">

            Wishlist is empty.

          </Typography>

        ) : (

          items.map((item) => (

            <Box
              key={item.productId}
              className="wishlist-preview-item"
            >

              <Avatar
                src={item.imageUrl}
                variant="rounded"
                sx={{
                  width:70,
                  height:70
                }}
              />

              <Box flex={1}>

                <Typography
                  fontWeight={600}
                >

                  {item.productName}

                </Typography>

                <Typography color="primary">

                  ₹{item.price}

                </Typography>

                <Typography
                  color="text.secondary"
                  fontSize={14}
                >

                  {item.brand}

                </Typography>

              </Box>

              <Box>

                <Button
                  size="small"
                  onClick={() =>
                    navigate(`/products/${item.productId}`)
                  }
                >

                  View

                </Button>

                <IconButton
                  color="error"
                  onClick={() =>
                    handleRemove(item.productId)
                  }
                >

                  <DeleteOutlineOutlinedIcon/>

                </IconButton>

              </Box>

            </Box>

          ))

        )}

      </CardContent>

    </Card>

  );

}

export default WishlistPreview;