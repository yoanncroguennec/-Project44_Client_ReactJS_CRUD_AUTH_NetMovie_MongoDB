import { Box, styled, Typography } from "@mui/material";

const RootMovieGenre = styled(Box)(() => ({
  display: "flex",
  flexWrap: "nowrap",
}));

export default function BoxMovieGenre({ genre }) {
  return (
    <RootMovieGenre>
      {genre.map((genre, index) => (
        <Typography variant='body1' key={genre} sx={{ fontWeight: "bold" }}>
          {genre}
          {index !== genre.length - 1 && ` / `}
        </Typography>
      ))}
    </RootMovieGenre>
  );
}
