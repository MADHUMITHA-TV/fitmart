import {
Container,
Typography,
TextField,
Button,
Box
} from "@mui/material";

import "./newsletter.css";

function Newsletter(){

return(

<Box className="newsletter">

<Container maxWidth="sm">

<Typography
variant="h4"
fontWeight="bold"
mb={3}
>

Subscribe to our Newsletter

</Typography>

<Typography mb={4}>

Get the latest deals and offers.

</Typography>

<Box className="newsletter-form">

<TextField

fullWidth

placeholder="Enter email"

/>

<Button
variant="contained"
>

Subscribe

</Button>

</Box>

</Container>

</Box>

);

}

export default Newsletter;