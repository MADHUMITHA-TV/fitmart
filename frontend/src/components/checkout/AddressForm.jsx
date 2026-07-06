import {
  Typography,
  Grid,
  TextField,
} from "@mui/material";


function AddressForm({ address, setAddress }) {
  const handleChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Typography
        variant="h5"
        gutterBottom
        fontWeight={600}
      >
        Shipping Address
      </Typography>

      <Grid container spacing={3}>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Full Name"
            name="fullName"
            value={address.fullName}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Phone Number"
            name="phone"
            value={address.phone}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={3}
            label="Address"
            name="address"
            value={address.address}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="City"
            name="city"
            value={address.city}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="State"
            name="state"
            value={address.state}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Pincode"
            name="pincode"
            value={address.pincode}
            onChange={handleChange}
          />
        </Grid>

      </Grid>
    </>
  );
}

export default AddressForm;