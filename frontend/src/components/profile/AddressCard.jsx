import {
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
  Button,
} from "@mui/material";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

import { useSelector } from "react-redux";

import "./AddressCard.css";

function AddressCard() {

  const { user } = useSelector((state) => state.auth);

  return (

    <Card className="address-card">

      <CardContent>

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >

          <Box display="flex" alignItems="center" gap={1}>

            <HomeOutlinedIcon color="primary" />

            <Typography
              variant="h5"
              fontWeight="bold"
            >
              Default Shipping Address
            </Typography>

          </Box>

          <Button
            variant="outlined"
            startIcon={<EditOutlinedIcon />}
          >
            Edit
          </Button>

        </Box>

        <Divider sx={{ my: 3 }} />

        <Typography fontWeight={700}>
          {user?.firstName} {user?.lastName}
        </Typography>

        <Typography color="text.secondary">
          {user?.address || "No address added"}
        </Typography>

        <Typography color="text.secondary">
          {user?.city || "-"}, {user?.state || "-"}
        </Typography>

        <Typography color="text.secondary">
          {user?.country || "India"} - {user?.pincode || "-"}
        </Typography>

        <Typography sx={{ mt: 2 }}>
          Phone : {user?.phone || "-"}
        </Typography>

      </CardContent>

    </Card>

  );

}

export default AddressCard;