import { Box, IconButton, List, Typography, styled } from "@mui/material";

export const RootListMovie = styled(Box)(() => ({
  alignItems: "center",
  justifyContent: "center",
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  flexWrap: "wrap",
  margin: "0 auto",
  width: "80vw",
  gridGap: "20px",
}));

export const BoxMovie = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  flexWrap: "nowrap",
  padding: "15px",
  width: "550px",
  "&:hover": {
    background: "linear-gradient(127deg, #303797, #ef2cf5)",
    borderRadius: "25px",
    cursor: "pointer",
    opacity: "0.9"
  },
}));

export const stylesMoviePoster = {
  border: "6px solid #000",
  borderRadius: "20px",
  height: "200px",
  width: "130px",
};

export const BoxInfosAboutTheMovie = styled(Box)(() => ({
  display: "flex",
  marginLeft: "20px",
  flexDirection: "column",
}));


