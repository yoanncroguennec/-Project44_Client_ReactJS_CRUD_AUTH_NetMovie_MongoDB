import { Box, IconButton, List, Typography, styled } from "@mui/material";

export const BoxTitleDescMovie = styled(Box)(({ theme }) => ({
  background: "linear-gradient(135deg, #341F94, #B22CC6)",
  borderRadius: "25px",
  display: "flex",
  flexWrap: "nowrap",
  margin: "0 auto",
  padding: "50px",
  width: "1450px",
  [theme.breakpoints.down("sm")]: {},
}));

export const ImgMoviePoster = {
  border: "9px solid #000",
  borderRadius: "20px",
  height: "800px",
  marginRight: "50px",
  width: "500px",
};

export const BoxInfosAboutTheMovie = styled(Box)(() => ({
  display: "flex",
  marginLeft: "20px",
  flexDirection: "column",
}));

export const BoxTitleYearCountry_BooleanIfMovieViewed_Rating = styled(Box)(
  () => ({
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "space-between",
  })
);

export const TypoTitleYearCountry = styled(Typography)(() => ({
  fontWeight: "bold",
}));

export const StylesTrailer = {
  border: "3px solid #FFF",
  margin: "0 auto",
};




