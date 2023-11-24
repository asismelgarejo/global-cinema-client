import React from "react";
import {
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";


const SignInPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your sign-in logic here
    navigate("/main")
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: theme.spacing(4),
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "400px",
          margin: "auto",
        }}
      >
        <Avatar
          sx={{
            backgroundColor: theme.palette.secondary.main,
            marginBottom: theme.spacing(2),
          }}
        >
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form
          sx={{
            width: "100%", // Fix IE 11 issue.
            marginTop: theme.spacing(1),
          }}
          onSubmit={handleSubmit}
        >
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{
              margin: theme.spacing(3, 0, 2),
            }}
          >
            Sign In
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default SignInPage;
