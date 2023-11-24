import React from "react";
import { Container, Typography, Button, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useTheme } from "@emotion/react";


const NotFoundPage = () => {
  const theme = useTheme();

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: "5rem",
          marginBottom: theme.spacing(2),
        }}
      >
        😢
      </Typography>
      <Typography
        variant="h4"
        sx={{
          marginBottom: theme.spacing(2),
        }}
      >
        Oops! This page doesn't exist.
      </Typography>
      <Typography variant="body1">
        The page you are looking for might be in another galaxy. Meanwhile, you
        can go back to the{" "}
        <Link component={RouterLink} to="/" color="primary">
          home page
        </Link>
        .
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={RouterLink}
        to="/"
        sx={{
          marginTop: theme.spacing(2),
        }}
      >
        Go Home
      </Button>
    </Container>
  );
};

export default NotFoundPage;
