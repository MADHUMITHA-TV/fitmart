import { Box, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import "./promotionBanner.css";

function PromotionBanner() {

    const navigate = useNavigate();

    return (

        <Box className="promotion-banner">

            <Container>

                <motion.div

                    initial={{opacity:0}}

                    whileInView={{opacity:1}}

                    transition={{duration:1}}

                >

                    <Typography
                        variant="h3"
                        fontWeight="bold"
                    >
                        Mega Sale
                    </Typography>

                    <Typography
                        variant="h5"
                        sx={{mt:2}}
                    >
                        Up to 70% OFF
                    </Typography>

                    <Typography
                        sx={{mt:2,mb:4}}
                    >
                        Electronics • Fashion • Home Appliances
                    </Typography>

                    <Button
                        variant="contained"
                        size="large"
                        onClick={()=>navigate("/products")}
                    >
                        Shop Now
                    </Button>

                </motion.div>

            </Container>

        </Box>

    );

}

export default PromotionBanner;