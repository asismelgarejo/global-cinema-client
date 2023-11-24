import { Container, CssBaseline, Typography } from "@mui/material";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import MovieList from "./MovieList";
import { useNavigate } from "react-router-dom";

const MainPage = function () {
  const [moviesData, setMovies] = useState([]);
  const username = "JohnDoe";
  const navigate = useNavigate();

  const handleLogout = () => {
    // Implement your logout logic here
    console.log("Logout clicked");
    navigate("/");

  };
  useEffect(() => {
    fetch("http://localhost:8080/movies")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovies(data.data);
      });
  }, []);

  return (
    <>
      <Navbar username={username} onLogout={handleLogout} />
      <CssBaseline />
      <Container>
        <Typography variant="h3" gutterBottom>
          Movie Showcase
        </Typography>
        <MovieList moviesData={moviesData} />
      </Container>
    </>
  );
};
export default MainPage;
