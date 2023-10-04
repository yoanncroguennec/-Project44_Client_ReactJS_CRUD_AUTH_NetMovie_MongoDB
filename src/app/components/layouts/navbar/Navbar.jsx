import React, { useState } from "react";
import { Box, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";
import { UserLocationIP_AddressAndLocalTimeDate } from "../../utils";
import DropdownNavbar from "../dropdown/dropdownNavbar/DropdownNavbar";


//////////////////// STYLES ////////////////////
const RootNavbar = styled(Box)(({ theme }) => ({

  [theme.breakpoints.down("sm")]: {},
}));


export default function Navbar({ id_Of_ConnectedUser, token, handleTokenAndId }) {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
      setIsScrolled(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll = null);
    };

  return (
    <div className={`nav ${isScrolled && "navbarBlack"}`}>
      <Link
        to='/'
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexWrap: "nowrap",
        }}
      >
        {" "}
        <Typography
          sx={{ color: "#F00", fontWeight: "bold", fontSize: "35px" }}
          variant=''
        >
          N
        </Typography>
        <Typography
          sx={{ color: "#F00", fontWeight: "bold", fontSize: "31px" }}
          variant=''
        >
          E
        </Typography>{" "}
        <Typography
          sx={{
            color: "#F00",
            fontWeight: "bold",
            fontSize: "27px",
            marginRight: "15px",
          }}
          variant=''
        >
          T
        </Typography>
        <Typography
          sx={{ color: "#F00", fontWeight: "bold", fontSize: "23px" }}
          variant=''
        >
          M
        </Typography>
        <Typography
          sx={{ color: "#F00", fontWeight: "bold", fontSize: "23px" }}
          variant=''
        >
          O
        </Typography>{" "}
        <Typography
          sx={{ color: "#F00", fontWeight: "bold", fontSize: "27px" }}
          variant=''
        >
          V
        </Typography>
        <Typography
          sx={{ color: "#F00", fontWeight: "bold", fontSize: "31px" }}
          variant=''
        >
          I
        </Typography>{" "}
        <Typography
          sx={{ color: "#F00", fontWeight: "bold", fontSize: "35px" }}
          variant=''
        >
          E
        </Typography>{" "}
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
          variant='h6'
        >
          Tous les films
        </Typography>
      </Link>
      <DropdownNavbar
        id_Of_ConnectedUser={id_Of_ConnectedUser}
        token={token}
        handleTokenAndId={handleTokenAndId}
      />
    </div>
  );
}
