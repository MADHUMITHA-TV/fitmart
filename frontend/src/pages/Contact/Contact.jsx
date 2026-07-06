import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
} from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import "./Contact.css";

function Contact() {
  return (
    <Box className="contact-page">

      {/* Hero */}

      <Box className="contact-hero">

        <Container>

          <Typography
            variant="h2"
            className="hero-title"
          >
            Contact Us
          </Typography>

          <Typography
            variant="h6"
            className="hero-subtitle"
          >
            We'd love to hear from you. Reach out anytime!
          </Typography>

        </Container>

      </Box>

      {/* Contact Information */}

      <Container sx={{ py: 8 }}>

        <Grid container spacing={4}>

          <Grid item xs={12} md={4}>

            <Card className="contact-card">

              <CardContent>

                <EmailIcon
                  color="primary"
                  sx={{ fontSize: 50 }}
                />

                <Typography
                  variant="h6"
                  mt={2}
                >
                  Email
                </Typography>

                <Typography color="text.secondary">
                  support@fitmart.com
                </Typography>

              </CardContent>

            </Card>

          </Grid>

          <Grid item xs={12} md={4}>

            <Card className="contact-card">

              <CardContent>

                <PhoneIcon
                  color="primary"
                  sx={{ fontSize: 50 }}
                />

                <Typography
                  variant="h6"
                  mt={2}
                >
                  Phone
                </Typography>

                <Typography color="text.secondary">
                  +91 98765 43210
                </Typography>

              </CardContent>

            </Card>

          </Grid>

          <Grid item xs={12} md={4}>

            <Card className="contact-card">

              <CardContent>

                <LocationOnIcon
                  color="primary"
                  sx={{ fontSize: 50 }}
                />

                <Typography
                  variant="h6"
                  mt={2}
                >
                  Office
                </Typography>

                <Typography color="text.secondary">
                  Coimbatore, Tamil Nadu
                </Typography>

              </CardContent>

            </Card>

          </Grid>

        </Grid>

      </Container>

      {/* Contact Form */}

      <Container sx={{ pb: 8 }}>

        <Grid
          container
          spacing={6}
          alignItems="center"
        >

          <Grid item xs={12} md={7}>

            <Typography
              variant="h4"
              fontWeight="bold"
              mb={3}
            >
              Send us a Message
            </Typography>

            <TextField
              fullWidth
              label="Full Name"
              margin="normal"
            />

            <TextField
              fullWidth
              label="Email"
              margin="normal"
            />

            <TextField
              fullWidth
              label="Subject"
              margin="normal"
            />

            <TextField
              fullWidth
              multiline
              rows={5}
              label="Message"
              margin="normal"
            />

            <Button
              variant="contained"
              size="large"
              sx={{ mt: 3 }}
            >
              Send Message
            </Button>

          </Grid>

          {/* Support */}

          <Grid item xs={12} md={5}>

            <Box className="support-box">

              <AccessTimeIcon
                sx={{
                  fontSize: 55,
                  color: "#1976d2",
                }}
              />

              <Typography
                variant="h5"
                fontWeight="bold"
                mt={2}
              >
                Customer Support
              </Typography>

              <Typography mt={2}>
                Monday - Friday
              </Typography>

              <Typography>
                9:00 AM - 8:00 PM
              </Typography>

              <Typography mt={4}>
                Saturday
              </Typography>

              <Typography>
                10:00 AM - 6:00 PM
              </Typography>

              <Typography
                mt={4}
                color="primary"
              >
                support@fitmart.com
              </Typography>

            </Box>

          </Grid>

        </Grid>

      </Container>

      {/* Map */}

      <Box className="map-section">

        <iframe
          title="Google Map"
          width="100%"
          height="450"
          loading="lazy"
          style={{
            border: 0,
          }}
          src="https://www.google.com/maps?q=Coimbatore&output=embed"
        />

      </Box>

      {/* FAQ */}

      <Box className="faq-section">

        <Container>

          <Typography
            variant="h3"
            align="center"
            fontWeight="bold"
            mb={5}
          >
            Frequently Asked Questions
          </Typography>

          <Grid container spacing={4}>

            <Grid item xs={12} md={6}>

              <Card className="faq-card">

                <CardContent>

                  <Typography variant="h6">
                    How long does delivery take?
                  </Typography>

                  <Typography color="text.secondary">
                    Usually between 2-5 business days.
                  </Typography>

                </CardContent>

              </Card>

            </Grid>

            <Grid item xs={12} md={6}>

              <Card className="faq-card">

                <CardContent>

                  <Typography variant="h6">
                    Can I return products?
                  </Typography>

                  <Typography color="text.secondary">
                    Yes. Returns are accepted within 7 days.
                  </Typography>

                </CardContent>

              </Card>

            </Grid>

            <Grid item xs={12} md={6}>

              <Card className="faq-card">

                <CardContent>

                  <Typography variant="h6">
                    Is online payment secure?
                  </Typography>

                  <Typography color="text.secondary">
                    Absolutely. We use encrypted payment gateways.
                  </Typography>

                </CardContent>

              </Card>

            </Grid>

            <Grid item xs={12} md={6}>

              <Card className="faq-card">

                <CardContent>

                  <Typography variant="h6">
                    Do you provide customer support?
                  </Typography>

                  <Typography color="text.secondary">
                    Yes, our support team is available 24×7.
                  </Typography>

                </CardContent>

              </Card>

            </Grid>

          </Grid>

        </Container>

      </Box>

    </Box>
  );
}

export default Contact;