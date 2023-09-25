import React, { useEffect, useState } from 'react'
import {
  Box,
  Button,
  Typography,
  styled,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useOutletContext } from 'react-router-dom';
import axios from 'axios';
import ModalInfosMovie from '../../components/layouts/movies/modaux/ModalInfosMovie';
import BoxBGMovie_And_BoxTitleDescMovie from '../../components/common/movies/boxBGMovie_And_BoxTitleDescMovie/BoxBGMovie_And_BoxTitleDescMovie';

  const RootFeatured = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    justifyContent: "center",
    position: "relative",
    zIndex: 15,
    [theme.breakpoints.down("sm")]: {},
  }));

  const BoxBG_Movie = styled(Box)(({ theme }) => ({
    height: "100vh",
    left: 0,
    position: "absolute",
    top: 0,
    width: "100vw",
    zIndex: "-10",
  }));

  const BoxTitleDescMovie = styled(Box)(({ theme }) => ({
    background: "rgba(0, 0, 0, 0.4)",
    borderRadius: "25px",
    marginLeft: "150px",
    padding: "50px",
    width: "700px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "10px",
      padding: "10px",
      width: "300px",
    },
  }));

  const TypoMovie = styled(Typography)(({ theme }) => ({
    color: "#FFF",
    fontWeight: "bold",
    textAlign: "center",
    textShadow: "1px 1px 1px #000, 3px 3px 5px blue",
  }));

  const BoxNoDescription = styled(Box)(({ theme }) => ({
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    margin: "25px",
  }));

  const TypoDesc = styled(Typography)(({ theme }) => ({
    color: "#FFF",
    textAlign: "justify",
  }));

export default function Featured() {
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
    setOpenModalInfosMovie(false);
  }
  console.log("randomMovie :", randomMovie);

  console.log("====================================");
  console.log("iiii :", randomMovie);
  console.log("====================================");

  const { img, name, desc } = randomMovie;

  return (
    <RootFeatured>
      <BoxBGMovie_And_BoxTitleDescMovie
        randomMovie={randomMovie}
        openModalInfosMovie={openModalInfosMovie}
        setOpenModalInfosMovie={setOpenModalInfosMovie}
        OpenModalTrailer={OpenModalTrailer}
      />
      <ModalInfosMovie
        name={name}
        desc={desc}
        openModalInfosMovie={openModalInfosMovie}
        setOpenModalInfosMovie={setOpenModalInfosMovie}
        CloseModalInfosMovie={CloseModalInfosMovie}
        OpenModalTrailer={OpenModalTrailer}
      />
      {name}
    </RootFeatured>
  );
  //   return (
  //     <RootFeatured>
  //   <BoxBG_Movie>
  //     <img
  //       fill
  //       src={`${baseUrlImg}${movie?.backdrop_path || movie?.poster_path}`}
  //       className='object-cover'
  //       alt='movie poster'
  //     />
  //       </BoxBG_Movie>
  //       <BoxTitleDescMovie>
  //         <TypoMovie variant={matches ? "h6" : "h2"}>
  //           {randomMovie.name}
  //         </TypoMovie>
  //       </BoxTitleDescMovie>
  //     </RootFeatured>
  //   );
}
