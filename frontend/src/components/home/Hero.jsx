import { Box, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import "./hero.css";

function Hero() {
  const navigate = useNavigate();

  return (
    <Box className="hero">
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            className="hero-title"
          >
            Shop Smarter.
            <br />
            Live Better.
          </Typography>

          <Typography
            variant="h6"
            className="hero-subtitle"
          >
            Discover thousands of premium products with
            exciting offers and fast delivery.
          </Typography>

          <Box className="hero-buttons">
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate("/products")}
            >
              Shop Now
            </Button>

            <Button
              variant="outlined"
              size="large"
              color="inherit"
            >
              Explore Categories
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}

export default Hero;