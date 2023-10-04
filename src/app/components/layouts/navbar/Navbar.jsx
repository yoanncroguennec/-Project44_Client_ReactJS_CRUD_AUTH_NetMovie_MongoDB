import React, { useState } from "react";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { UserLocationIP_AddressAndLocalTimeDate } from "../../utils";
import DropdownNavbar from "../dropdown/dropdownNavbar/DropdownNavbar";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  Typo_FirstLetter_Logo,
  Typo_SecondLetter_Logo,
  Typo_ThirdLetter_Logo,
  Typo_FourthLetter_Logo,
  Typo_FifthLetter_Logo,
  Typo_SixthLetter_Logo,
  Typo_SeventhLetter_Logo,
  Typo_EighthLetter_Logo,
} from "./StylesNavbar";

export default function Navbar({
  id_Of_ConnectedUser,
  token,
  handleTokenAndId,
}) {
  //////////////////// RESPONSIVE ////////////////////
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={`nav ${isScrolled && "navbarBlack"}`}>
      <Link
        to='featured_SliderCategoryListMovies'
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexWrap: "nowrap",
        }}
      >
        {" "}
        <Typo_FirstLetter_Logo matches={matches}>N</Typo_FirstLetter_Logo>
        <Typo_SecondLetter_Logo matches={matches}>E</Typo_SecondLetter_Logo>
        <Typo_ThirdLetter_Logo matches={matches}>T</Typo_ThirdLetter_Logo>
        <Typo_FourthLetter_Logo matches={matches}>M</Typo_FourthLetter_Logo>
        <Typo_FifthLetter_Logo matches={matches}>O</Typo_FifthLetter_Logo>
        <Typo_SixthLetter_Logo matches={matches}>V</Typo_SixthLetter_Logo>
        <Typo_SeventhLetter_Logo matches={matches}>I</Typo_SeventhLetter_Logo>
        <Typo_EighthLetter_Logo matches={matches}>E</Typo_EighthLetter_Logo>
      </Link>

      <UserLocationIP_AddressAndLocalTimeDate
        id_Of_ConnectedUser={id_Of_ConnectedUser}
      />
      <Link to='movies/listAllMovies'>
        <Typography
          sx={{
            border: "2px solid #F00",
            borderRadius: "25px",
            padding: "2px 15px",
            cursor: "pointer",
            "&:hover": {
              background: "#333",
            },
          }}
          variant={matches ? "caption" : "h6"}
        >
          Tous les films
        </Typography>
      </Link>
      <GiHamburgerMenu color='red' size={30} />
      {/* <DropdownNavbar
        id_Of_ConnectedUser={id_Of_ConnectedUser}
        token={token}
        handleTokenAndId={handleTokenAndId}
      /> */}
    </div>
  );
}
