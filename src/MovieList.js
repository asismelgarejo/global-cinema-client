import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Chip,
} from '@mui/material';


const MovieList = ({moviesData}) => {
  return (
    <Grid container spacing={2}>
      {moviesData.map((movie) => (
        <Grid key={movie.id} item xs={12} sm={6} md={4}>
          <Card
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <CardMedia
              sx={{
                height: 0,
                paddingTop: '150%', // 4:3 aspect ratio
              }}
              image={movie.poster}
              title={movie.title}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {movie.title}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {movie.year} | {movie.country}
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                {movie.synopsis}
              </Typography>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                Genres:
              </Typography>
              <div>
                {movie.genres.map((genre) => (
                  <Chip key={genre} label={genre} sx={{ margin: '4px' }} />
                ))}
              </div>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                Directors:
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                {movie.directors.join(', ')}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieList;
