import { Typography, Container, styled, Box } from "@mui/material";

export const RootRow = styled(Container)(({ theme }) => ({
  marginBottom: "60px",
  [theme.breakpoints.down("sm")]: {},
}));

export const BoxRow = styled(Box)(({ theme }) => ({
  marginTop: "10px",
  width: "100%",
  [theme.breakpoints.down("sm")]: {},
}));

export const styleLink = {
  color: "#FFF",
  cursor: "pointer",
  textDecoration: "none",
};

export const BoxRowIndividually = styled(Box)(({ theme }) => ({
  position: "relative",
}));

export const TypoTitleCategory = styled(Typography)(({ theme }) => ({
  fontWeight: "500",
  marginLeft: "50px",
}));

export const styleBiChevronLeft = {
  bottom: 0,
  backgroundColor: "rgb(22, 22, 22, 0.5)",
  color: "white",
  cursor: "pointer",
  height: "100%",
  left: 0,
  margin: "auto",
  position: "absolute",
  top: 0,
  width: "50px",
  zIndex: 150,
};

export const BoxListMovies = styled(Box)(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  marginLeft: "2px",
  overflow: "hidden",
  height: "100%",
}));

export const styleBiChevronRight = {
  bottom: 0,
  backgroundColor: "rgb(22, 22, 22, 0.5)",
  color: "white",
  cursor: "pointer",
  height: "100%",
  margin: "auto",
  position: "absolute",
  right: 0,
  top: 0,
  width: "50px",
  zIndex: 150,
};
