//@ts-nocheck
import * as React from "react";
import Layout from "../../components/layout";
import { Box, Button, Container, Link, Typography, Alert } from "@mui/material";
import { theme } from "../../theme";
import { CssTextField } from "../LogIn";
import { useState } from "react";
import { firebaseApp } from "../../utils/firebase-config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const emailIsValid = email.match(/.+@.+/);
  const passwordIsValid = password.length >= 6;
  const formIsValid = emailIsValid && passwordIsValid;

  const handleClick = () => {
    const authentication = getAuth(firebaseApp);
    createUserWithEmailAndPassword(authentication, email, password)
      .then((response) => {
        sessionStorage.setItem(
          "Auth Token",
          response._tokenResponse.refreshToken
        );
        const emailStr = response.user.email;
        if (typeof emailStr === "string") {
          sessionStorage.setItem("email", emailStr);
        }
        fetch(
          "http://localhost:5001/animoe-7b89b/asia-southeast1/app/api/user",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: email,
            }),
          }
        ).then((response) => {
          navigate("/");
        });
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          setError("The email address is already in use!");
        }
      });
  };

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
            flexDirection="column"
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
              {error ? (
                <Alert
                  variant="filled"
                  severity="error"
                  sx={{
                    bgcolor: theme.color.red_800,
                    fontWeight: 500,
                  }}
                >
                  {error}
                </Alert>
              ) : (
                <></>
              )}
              <Typography
                sx={{
                  fontSize: { md: 24, sm: 20, xs: 14 },
                  fontWeight: 700,
                  color: theme.color.white,
                }}
              >
                Email
              </Typography>
              <CssTextField
                id="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                variant="outlined"
                required
              />
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
                id="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                variant="outlined"
                required
                type="password"
              />
              <Box textAlign="center" mt={1}>
                <Button
                  disabled={!formIsValid}
                  onClick={handleClick}
                  sx={{
                    width: { md: 130, sm: 110, xs: 90 },
                    fontSize: { md: 24, sm: 20, xs: 14 },
                    fontWeight: 600,
                    color: theme.color.white,
                    marginBottom: 2,
                    "&.Mui-disabled": {
                      color: theme.color.grey_200,
                    },
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
