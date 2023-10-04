import { Box, Typography, styled } from "@mui/material";

export const RootAdministratorSide_UserLists = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {},
}));

export const TypoTitlePage = styled(Typography)(({ theme }) => ({
  color: "#FFF",
  fontWeight: "bold",
  textShadow: "0 0 3px #FF0000, 0 0 5px #0000FF",
  [theme.breakpoints.down("sm")]: {},
}));
