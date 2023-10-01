import React, { useEffect, useState } from "react";
import { Box, Button, Menu, MenuItem, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";
import { UserLocationIP_AddressAndLocalTimeDate } from "../../utils";
import DropdownNavbar from "../dropdown/dropdownNavbar/DropdownNavbar";


//////////////////// STYLES ////////////////////
const RootNavbar = styled(Box)(({ theme }) => ({
  alignItems: "center",
  color: "white",
  display: "flex",
  flexWrap: "nowrap",
  height: " 100px",
  justifyContent: "space-between",
  position: "fixed",
  top: "0",
  width: "100%",
  zIndex: "999",
  [theme.breakpoints.down("sm")]: {},
}));

const styleLink = {
  color: "#FFF",
  cursor: "pointer",
  display: "flex",
  flexWrap: "nowrap",
  marginRight: "20px",
  marginLeft: "55px",
  textDecoration: "none",
  textShadow: "1px 1px 1px #000, 3px 3px 5px blue",
};


export default function Navbar({ id_Of_ConnectedUser, token, handleTokenAndId }) {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
      setIsScrolled(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll = null);
    };

  return (
    <div className={`nav ${isScrolled && "navbarBlack"}`}>
      <Link
        to='/movies'
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
      <DropdownNavbar
        id_Of_ConnectedUser={id_Of_ConnectedUser}
        token={token}
        handleTokenAndId={handleTokenAndId}
      />
    </div>
  );
}
