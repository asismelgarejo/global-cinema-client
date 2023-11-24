import React from "react";
import { AppBar, Toolbar, Typography, Button, Stack, Container } from "@mui/material";
import { useTheme } from "@emotion/react";

const Navbar = ({ username, onLogout }) => {
  //
  const theme = useTheme();
  return (
    <AppBar
      position="static"
      sx={{
        marginBottom: theme.spacing(2),
      }}
    >
      <Toolbar>
        <Container sx={{ display: "flex", flexDirection: "row", width: "85%", margin: "auto" }}>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
            }}
          >
            Global Cinema
          </Typography>
          {username && (
            <Stack sx={{ marginLeft: "auto", alignItems: "center" }} direction={"row"}>
              <Typography
                variant="subtitle1"
                color="inherit"
                style={{ marginRight: "16px" }}
              >
                Hello, {username}!
              </Typography>
              <Button
                variant="contained"
                color="error"
                onClick={onLogout}
                type="button"
              >
                Logout
              </Button>
            </Stack>
          )}
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
