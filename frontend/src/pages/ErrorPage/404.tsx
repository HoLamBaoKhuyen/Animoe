import React from "react";
import { alpha, Box, Button, Typography } from "@mui/material";
import { theme } from "../../theme";

const Error404Page = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        backgroundImage: "url('https://i.imgur.com/VPjR0xH.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        textAlign="center"
        alignItems="center"
        width="55%"
        gap={2}
        mb={10}
      >
        <Typography
          sx={{
            color: alpha(theme.color.white, 0.9),
            fontSize: { md: 320, sm: 280, xs: 120 },
            fontWeight: 600,
            marginBottom: { md: -12, sm: -12, xs: -6 },
          }}
        >
          404
        </Typography>
        <Typography
          sx={{
            color: alpha(theme.color.white, 0.9),
            fontSize: { md: 36, sm: 28, xs: 20 },
            fontWeight: 700,
          }}
        >
          Page not found
        </Typography>
        <Typography
          sx={{
            color: alpha(theme.color.white, 0.9),
            fontSize: { md: 20, sm: 16, xs: 12 },
            fontWeight: 600,
          }}
        >
          Looks like the page you're looking for doesn't exist. Please check the
          link again or return to the homepage.
        </Typography>
        <Button
          href="/"
          sx={{
            bgcolor: theme.color.grey_200,
            fontSize: { md: 20, sm: 16, xs: 12 },
            fontWeight: 600,
          }}
        >
          Back to Home
        </Button>
      </Box>
    </Box>
  );
};

export default Error404Page;
