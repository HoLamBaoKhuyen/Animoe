import React from "react";
import Layout from "../../components/layout";
import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { theme } from "../../theme";
import { CssTextField } from "../LogIn";

const SignUpPage = () => {
  return (
    <Layout>
      <Box
        sx={{
          backgroundImage: "url('https://i.imgur.com/wWA5vdc.png')",
          backgroundSize: "auto 100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <Container maxWidth="md">
          <Box
            component="form"
            noValidate
            autoComplete="off"
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="100vh"
          >
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              gap={2}
              sx={{
                height: { md: 480, sm: 400, xs: 360 },
                width: { md: 480, sm: 400, xs: 320 },
                bgcolor: theme.color._850,
                borderRadius: 12,
                px: { md: 6, sm: 4, xs: 3 },
              }}
            >
              <Typography
                sx={{
                  fontSize: { md: 24, sm: 20, xs: 14 },
                  fontWeight: 700,
                  color: theme.color.white,
                }}
              >
                Email
              </Typography>
              <CssTextField fullWidth variant="outlined" required />
              <Typography
                sx={{
                  fontSize: { md: 24, sm: 20, xs: 14 },
                  fontWeight: 700,
                  color: theme.color.white,
                }}
              >
                Password
              </Typography>
              <CssTextField
                fullWidth
                variant="outlined"
                required
                type="password"
              />
              <Box textAlign="center" mt={1}>
                <Button
                  type="submit"
                  sx={{
                    width: { md: 130, sm: 110, xs: 90 },
                    fontSize: { md: 24, sm: 20, xs: 14 },
                    fontWeight: 600,
                    color: theme.color.white,
                    marginBottom: 2,
                  }}
                >
                  Sign Up
                </Button>
                <Box display="flex" justifyContent="center">
                  <Typography
                    sx={{
                      fontSize: { md: 18, sm: 14, xs: 10 },
                      fontWeight: 500,
                      color: theme.color.white,
                    }}
                  >
                    Already had an account?&nbsp;
                  </Typography>
                  <Link
                    href="/login"
                    sx={{
                      fontSize: { md: 18, sm: 14, xs: 10 },
                      fontWeight: 500,
                      color: theme.color._400,
                      "&:hover": {
                        color: theme.color._600,
                      },
                    }}
                  >
                    Log in here!
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box mb={8} />
        </Container>
      </Box>
    </Layout>
  );
};

export default SignUpPage;
