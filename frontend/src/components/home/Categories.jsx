import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import HomeIcon from "@mui/icons-material/Home";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

import { motion } from "framer-motion";

import "./categories.css";

const categories = [
  { name: "Mobiles", icon: <PhoneIphoneIcon fontSize="large" /> },
  { name: "Laptops", icon: <LaptopMacIcon fontSize="large" /> },
  { name: "Fashion", icon: <CheckroomIcon fontSize="large" /> },
  { name: "Books", icon: <MenuBookIcon fontSize="large" /> },
  { name: "Home", icon: <HomeIcon fontSize="large" /> },
  { name: "Sports", icon: <SportsSoccerIcon fontSize="large" /> },
  { name: "Groceries", icon: <LocalGroceryStoreIcon fontSize="large" /> },
  { name: "Gaming", icon: <SportsEsportsIcon fontSize="large" /> },
];

function Categories() {
  const navigate = useNavigate();

  return (
    <Container sx={{ py: 8 }}>
      <Typography
        variant="h4"
        align="center"
        fontWeight="bold"
        gutterBottom
      >
        Shop by Category
      </Typography>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        {categories.map((category) => (
          <Grid
            item
            xs={6}
            sm={4}
            md={3}
            key={category.name}
          >
            <motion.div whileHover={{ scale: 1.05 }}>
              <Card
                className="category-card"
                onClick={() =>
                  navigate(`/products?category=${category.name}`)
                }
              >
                <CardContent
                  sx={{
                    textAlign: "center",
                  }}
                >
                  <Box className="category-icon">
                    {category.icon}
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{ mt: 2 }}
                  >
                    {category.name}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Categories;