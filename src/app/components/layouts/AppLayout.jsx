import React, { useEffect, useState } from "react";
import { Box, styled } from "@mui/material";
import {  Outlet } from "react-router-dom";
import axios from "axios";
// COMMON UTILS
import {Navbar} from ".";

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

export default function AppLayout({
  handleTokenAndId,
  token,
  id_Of_ConnectedUser,
}) {
  const [darkMode, setDarkMode] = useState(false);

  const [obj, setObj] = useState({});

  useEffect(() => {
    const getAllMovies = async () => {
      try {
        const url = `${process.env.REACT_APP_API_URL}/movies`;
        const { data } = await axios.get(url);
        setObj(data);
      } catch (err) {
        console.log(err);
      }
    };

    getAllMovies();
  }, [obj]);

  return (
    <>
      <Navbar
        id_Of_ConnectedUser={id_Of_ConnectedUser}
        token={token}
        handleTokenAndId={handleTokenAndId}
      />
      <div
        style={{
          background: "",
          display: "flex",
          // justifyContent: "center",
          flexDirection: "column",
          height: "97vh",
          // marginTop: "70px",
        }}
      >
        <Outlet
          context={[
            obj,
            darkMode,
            id_Of_ConnectedUser,
            token,
            handleTokenAndId,
          ]}
        />
      </div>
    </>
  );
}
