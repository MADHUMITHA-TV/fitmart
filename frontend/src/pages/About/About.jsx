import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Button,
} from "@mui/material";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SecurityIcon from "@mui/icons-material/Security";
import VerifiedIcon from "@mui/icons-material/Verified";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

import GroupsIcon from "@mui/icons-material/Groups";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

import "./About.css";

function About() {
  return (
    <Box className="about-page">

      {/* Hero */}

      <Box className="about-hero">

        <Container>

          <Typography
            variant="h2"
            className="hero-title"
          >
            About FitMart
          </Typography>

          <Typography
            variant="h6"
            className="hero-subtitle"
          >
            India's trusted online shopping destination for
            quality products, amazing deals and fast delivery.
          </Typography>

        </Container>

      </Box>

      {/* Story */}

      <Container sx={{ py: 10 }}>

        <Grid container spacing={6} alignItems="center">

          <Grid item xs={12} md={6}>

            <img
              src="https://images.unsplash.com/photo-1556740749-887f6717d7e4"
              alt="shopping"
              className="about-image"
            />

          </Grid>

          <Grid item xs={12} md={6}>

            <Typography
              variant="h3"
              fontWeight="bold"
              gutterBottom
            >
              Our Story
            </Typography>

            <Typography className="story-text">

              FitMart was created with one simple vision —
              making online shopping easier, faster and more
              enjoyable.

              <br /><br />

              We provide thousands of premium products
              across electronics, fashion, home appliances,
              groceries, sports and much more.

              <br /><br />

              Every order is backed by secure payments,
              fast delivery and trusted customer support.

            </Typography>

          </Grid>

        </Grid>

      </Container>

      {/* Why Choose */}

      <Box className="why-section">

        <Container>

          <Typography
            variant="h3"
            align="center"
            fontWeight="bold"
            mb={6}
          >
            Why Choose FitMart?
          </Typography>

          <Grid container spacing={4}>

            <Grid item xs={12} sm={6} md={3}>
              <Card className="feature-card">
                <CardContent>

                  <LocalShippingIcon
                    sx={{ fontSize: 55 }}
                    color="primary"
                  />

                  <Typography variant="h6" mt={2}>
                    Fast Delivery
                  </Typography>

                  <Typography color="text.secondary">
                    Quick delivery across India.
                  </Typography>

                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card className="feature-card">
                <CardContent>

                  <SecurityIcon
                    sx={{ fontSize: 55 }}
                    color="primary"
                  />

                  <Typography variant="h6" mt={2}>
                    Secure Payments
                  </Typography>

                  <Typography color="text.secondary">
                    100% encrypted payment gateway.
                  </Typography>

                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card className="feature-card">
                <CardContent>

                  <VerifiedIcon
                    sx={{ fontSize: 55 }}
                    color="primary"
                  />

                  <Typography variant="h6" mt={2}>
                    Genuine Products
                  </Typography>

                  <Typography color="text.secondary">
                    Only trusted brands and sellers.
                  </Typography>

                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card className="feature-card">
                <CardContent>

                  <SupportAgentIcon
                    sx={{ fontSize: 55 }}
                    color="primary"
                  />

                  <Typography variant="h6" mt={2}>
                    24×7 Support
                  </Typography>

                  <Typography color="text.secondary">
                    Friendly customer assistance.
                  </Typography>

                </CardContent>
              </Card>
            </Grid>

          </Grid>

        </Container>

      </Box>

      {/* Statistics */}

      <Container sx={{ py: 10 }}>

        <Grid container spacing={4}>

          <Grid item xs={6} md={3}>
            <Box className="stat-box">
              <ShoppingBagIcon color="primary" sx={{ fontSize: 45 }} />
              <Typography variant="h3">15K+</Typography>
              <Typography>Products</Typography>
            </Box>
          </Grid>

          <Grid item xs={6} md={3}>
            <Box className="stat-box">
              <GroupsIcon color="primary" sx={{ fontSize: 45 }} />
              <Typography variant="h3">50K+</Typography>
              <Typography>Customers</Typography>
            </Box>
          </Grid>

          <Grid item xs={6} md={3}>
            <Box className="stat-box">
              <EmojiEventsIcon color="primary" sx={{ fontSize: 45 }} />
              <Typography variant="h3">99%</Typography>
              <Typography>Satisfaction</Typography>
            </Box>
          </Grid>

          <Grid item xs={6} md={3}>
            <Box className="stat-box">
              <LocalShippingIcon color="primary" sx={{ fontSize: 45 }} />
              <Typography variant="h3">24 hrs</Typography>
              <Typography>Fast Delivery</Typography>
            </Box>
          </Grid>

        </Grid>

      </Container>

      {/* Team */}

      <Box className="team-section">

        <Container>

          <Typography
            variant="h3"
            align="center"
            fontWeight="bold"
            mb={6}
          >
            Meet Our Team
          </Typography>

          <Grid container spacing={4}>

            {[
              "John",
              "Sophia",
              "Emma",
              "David",
            ].map((member) => (

              <Grid item xs={12} sm={6} md={3} key={member}>

                <Card className="team-card">

                  <CardContent>

                    <Avatar
                      sx={{
                        width: 90,
                        height: 90,
                        margin: "auto",
                      }}
                    />

                    <Typography
                      variant="h6"
                      mt={2}
                    >
                      {member}
                    </Typography>

                    <Typography color="text.secondary">
                      Software Engineer
                    </Typography>

                  </CardContent>

                </Card>

              </Grid>

            ))}

          </Grid>

        </Container>

      </Box>

      {/* CTA */}

      <Box className="cta-section">

        <Container>

          <Typography
            variant="h3"
            fontWeight="bold"
          >
            Start Shopping Today
          </Typography>

          <Typography sx={{ mt: 2, mb: 4 }}>
            Discover thousands of premium products.
          </Typography>

          <Button
            variant="contained"
            size="large"
            href="/products"
          >
            Shop Now
          </Button>

        </Container>

      </Box>

    </Box>
  );
}

export default About;