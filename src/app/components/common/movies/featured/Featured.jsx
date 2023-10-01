import React, { useEffect, useState } from "react";
import axios from "axios";
import backgroundImage from "./home.jpg";

import {
  Typography,
  useTheme,
  useMediaQuery,
  styled,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import { SlArrowDown } from "react-icons/sl";
//
import { GlobalModauxFeatured } from "../../../layouts/index";
// UTILS ASSETS DATAS
import { valueCategoryDropdownFeatured } from "../../../../utils/assets/data";
// ICONS
import { BsFillPlayFill, BsInfoCircle } from "react-icons/bs";
const sizeIcon = 35;

export const BoxCategory = styled(Box)(({ theme }) => ({
  alignItems: "center",
  color: "#FFF",
  display: "flex",
  fontSize: "20px",
  fontWeight: "500",
  left: "50px",
  position: "absolute",
  top: "80px",
}));

export const Dropdown = styled(Box)(({ theme }) => ({
  background: "#000",
  border: "1px solid #FFF",
  margin: "100px auto",
  position: "relative",
  userSelect: "none",
  width: "200px",
}));

const DropdownBtn = styled(Box)(({ theme }) => ({
  alignItems: "center",
  background: "#000",
  boxShadow: "3px 3px 10px 6px rgba(0, 0, 0, 0.06)",
  color: "#FFF",
  display: "flex",
  fontWeight: "bold",
  justifyContent: "space-between",
  padding: "15px 20px",
}));

const DropdownItem = styled(Box)(({ theme }) => ({
  background: "#000",
  cursor: "pointer",
  padding: "10px",
  transition: "all 0.2s",
  "&:hover": {
    background: "#333",
  },
}));

export default function Featured() {
  //////////////////// DROPDOWN CATEGORIES ////////////////////
  const type = "movie";
  const [selected, setSelected] = useState("");
  const [isActive, setIsActive] = useState(false);

  const [randomMovie, setrandomMovie] = useState([]);

  useEffect(() => {
    const getRandomMovie = async () => {
      try {
        const url = `${process.env.REACT_APP_API_URL}/movies/randomMovie`;
        const { data } = await axios.get(url);
        // console.log("dataMovies :", data);
        setrandomMovie(data);
      } catch (err) {
        console.log(err);
      }
    };

    getRandomMovie();
  }, []);

  const { img, name, desc } = randomMovie;

  function truncateDesc(str) {
    return str.length > 10 ? str.substring(0, 150) + "..." : str;
  }

  //////////////////// RESPONSIVE ////////////////////
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  //////////////////// OPEN MODAL PLAYER TRAILER////////////////////
  const [openModalTrailer, setOpenModalTrailer] = useState(false);
  const [showPlayerTrailer, setShowPlayerTrailer] = useState(false);

  function OpenModalTrailer() {
    setOpenModalTrailer(true);
    setShowPlayerTrailer(true);
  }

  function CloseModalTrailer() {
    setOpenModalTrailer(false);
    setShowPlayerTrailer(false);
  }

  //////////////////// OPEN MODAL INFOS MOVIE ////////////////////
  const [openModalInfosMovie, setOpenModalInfosMovie] = useState(false);

  function CloseModalInfosMovie() {
    setOpenModalInfosMovie(!openModalInfosMovie);
  }

  //////////////////// OPEN MODAL THE WHOLE MOVIE ////////////////////
  const [modalTheWholeMovie, setModalTheWholeMovie] = useState(false);

  function OpenModalTheWholeFilm() {
    setModalTheWholeMovie(!modalTheWholeMovie);
  }
  function CloseModalTheWholeMovie() {
    setModalTheWholeMovie(false);
  }

  return (
    <div
      style={{
        backgroundImage: `url("${img}")`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        color: "#FFF",
        objectFit: "",
        height: "100vh",
        width: "100vw",
        backgroundPosition: "center center",
        filter: "brightness(60%)",
      }}
    >
      {/* <img
        src={img}
        alt='background'
        style={{
          filter: "brightness(60%)",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          height: "100vh",
          width: "100vw",
        }}
        className='background-image'
      /> */}

      <div style={{ position: "absolute", zIndex: 1 }}>
        {type && (
          <Dropdown className='uu'>
            <DropdownBtn
              onClick={(e) => setIsActive(!isActive)}
              style={{ height: "15px" }}
            >
              <Typography>
                {selected || "GENRE"} ({type === "movie" ? "Films" : "Séries"})
              </Typography>
              <SlArrowDown size={25} />
            </DropdownBtn>
            {isActive && (
              <>
                <div
                  style={{
                    height: "350px",
                    border: "1px dotted black",
                    overflowY: "scroll",
                    zIndex: 999,
                  }}
                >
                  {valueCategoryDropdownFeatured.map(
                    ({ textCategory, urlCategory }) => (
                      <div>
                        <Link
                          to={urlCategory}
                          state={{
                            movieCategory: `${textCategory}`,
                          }}
                          key={textCategory}
                          //   style={}
                          onClick={(e) => setSelected(e.target.textContent)}
                        >
                          <DropdownItem>
                            <Typography>{textCategory}</Typography>
                          </DropdownItem>
                        </Link>
                      </div>
                    )
                  )}
                </div>
              </>
            )}
          </Dropdown>
        )}
        <div
          style={{
            background: "rgba(0, 0, 0, 0.4)",
            borderRadius: "25px",
            padding: "50px",
            width: `${matches ? "350px" : "700px"}`,
          }}
        >
          <Typography
            style={{
              color: "#FFF",
              fontWeight: "bold",
              textAlign: "center",
              textShadow: "1px 1px 1px #000, 3px 3px 5px blue",
            }}
            variant={matches ? "h6" : "h4"}
          >
            {name}
          </Typography>
          <Typography style={{ color: "#FFF" }}>
            {" "}
            {truncateDesc(`${randomMovie.desc}`)}
          </Typography>

          <div
            style={{
              display: "flex",
              flexWrap: "nowrap",
              justifyContent: "space-between",
            }}
          >
            <div
              onClick={OpenModalTrailer}
              style={{
                cursor: "pointer",
                color: "#FFF",
                display: "flex",
                flexWrap: "nowrap",
                alignItems: "center",
                padding: "1px 7px",
                justifyContent: "space-between",
                border: "1px solid red",
                borderRadius: "25px",
                width: "170px",
              }}
            >
              <BsFillPlayFill size={sizeIcon} />
              <Typography>Bande-Annonce</Typography>
            </div>
            <div
              onClick={CloseModalInfosMovie}
              style={{
                cursor: "pointer",
                color: "#FFF",
                display: "flex",
                flexWrap: "nowrap",
              }}
            >
              <BsInfoCircle size={sizeIcon} />
              <Typography>Infos</Typography>
            </div>
            <div
              onClick={OpenModalTheWholeFilm}
              style={{
                cursor: "pointer",
                color: "#FFF",
                display: "flex",
                flexWrap: "nowrap",
              }}
            >
              <BsFillPlayFill size={sizeIcon} />
              <Typography>Voir le film</Typography>
            </div>
          </div>
        </div>
      </div>

      <GlobalModauxFeatured
        randomMovie={randomMovie}
        /// TRAILER
        openModalTrailer={openModalTrailer}
        showPlayerTrailer={showPlayerTrailer}
        CloseModalTrailer={CloseModalTrailer}
        /// INFOS
        openModalInfosMovie={openModalInfosMovie}
        setOpenModalInfosMovie={setOpenModalInfosMovie}
        CloseModalInfosMovie={CloseModalInfosMovie}
        /// THE WHOLE MOVIE
        modalTheWholeMovie={modalTheWholeMovie}
        CloseModalTheWholeMovie={CloseModalTheWholeMovie}
      />
    </div>
  );
}
