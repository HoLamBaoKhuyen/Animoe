import React from "react";
import { theme } from "../../theme";
import { Box, Typography } from "@mui/material";

const Footer = () => {
    return (
        <Box
            mt={10}
            sx={{
                height: { md: 120, sm: 100, xs: 80 },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: theme.color._950,
            }}
        >
            <Typography variant="h1" sx={{
                fontSize: {md: 20, sm: 16, xs: 12},
                fontWeight: 600,
            }}
            >
                Copyright © 2022 - All right reserved by Animoe
            </Typography>
        </Box>
    )
}

export default Footer;