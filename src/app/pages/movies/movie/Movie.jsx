import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import Iframe from "react-iframe";
// STYLES
import {
  BoxListMovies,
  TypoTitle,
  BoxNoDescription,
  StylesTrailer,
  BoxTrailer_MovieLink,
} from "./StylesMovie";
import {
  Typography,
  useTheme,
  useMediaQuery,
  styled,
  Box,
} from "@mui/material";
import BooleanIfMovieViewed_Rating from "../../../components/common/movies/BooleanIfMovieViewed_Rating";
// import { BoxMovieGenre } from "../../../components/common";
import { useEffect, useState } from "react";
import axios from "axios";
import { BreadcrumbsMovie } from "../../../components/utils";
// import VerificationThatItIsIndeedTheLoggedInUserWithThe_IP_AddressOfTheDeviceUsedByTheLoggedInPersonToWatchTheFilm from "./VerificationThatItIsIndeedTheLoggedInUserWithThe_IP_AddressOfTheDeviceUsedByTheLoggedInPersonToWatchTheFilm";

export default function Movie({ token, id_Of_ConnectedUser }) {
  const params = useParams();

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/movies/${params.id}`
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [params.id]);

  const {
    name,
    desc,
    realisators,
    actors,
    favorite,
    watch,
    country,
    production_company,
    movieLink,
    genre,
    img,
    trailer,
    year,
    rating,
  } = data;

  // console.log(movies);
  function truncateActors(str) {
    return str.length > 10 ? str.substring(0, 55) + "..." : str;
  }
  function truncateDesc(str) {
    return str.length > 10 ? str.substring(0, 150) + "..." : str;
  }

  //////////////////// RESPONSIVE ////////////////////
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  //////////////////// STYLES ////////////////////
  const RootListMovies = styled(Box)(({ theme }) => ({
    background: "#f1f1f1",
    borderRadius: "10px",
    boxShadow: "5px 5px 15px rgba(0,0,0,0.3)",
    margin: "0 auto",
    maxWidth: `${token ? "1200px" : "400px"}`,
    padding: "30px",
    width: "100%",
    "&::after": {
      content: "''",
      clear: "both",
      display: "block",
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      // width: "70%",
    },
  }));

  const styleImg = {
    borderRadius: "50%",
    boxShadow: "5px 5px 15px rgba(0,0,0,0.3)",
    border: "8px solid #000",
    float: "left",
    height: `${matches ? "100px" : "220px"}`,
    margin: "0 20px 5px 0",
    shapeOutside: "margin-box",
    width: `${matches ? "100px" : "220px"}`,
  };

  //////////////////// RETURN ////////////////////

  return isLoading ? (
    <>....</>
  ) : (
    <>
      <BreadcrumbsMovie />
      <BoxListMovies>
        <RootListMovies token={token}>
          <img
            alt='movie'
            src={img}
            height={1550}
            style={styleImg}
            width={1550}
          />
          <BooleanIfMovieViewed_Rating
            rating={rating}
            favorite={favorite}
            watch={watch}
          />
          <TypoTitle variant={matches ? "h6" : "h5"}>
            {name} ({year} - {country} -{" "}
            {production_company
              ? `Société de Production : ${production_company}`
              : ""}
            )
          </TypoTitle>
          <Typography variant='body1'>
            <strong>Réalisateurs :</strong> {realisators}
          </Typography>
          <Typography variant='body1'>
            <strong>Acteurs :</strong> {actors}
          </Typography>
          {/* <BoxMovieGenre genre={genre} /> */}
          {desc === "" && (
            <BoxNoDescription>
              <Typography variant='h6'> Pas de description</Typography>
            </BoxNoDescription>
          )}
          <div
            dangerouslySetInnerHTML={{
              __html: `${truncateDesc(desc)}`,
            }}
          />

          <BoxTrailer_MovieLink>
            <ReactPlayer
              url={trailer}
              playing={false}
              controls={true}
              height={250}
              width={350}
              style={{ width: `${matches ? "300px" : "500px"}` }}
            />

            {/* <VerificationThatItIsIndeedTheLoggedInUserWithThe_IP_AddressOfTheDeviceUsedByTheLoggedInPersonToWatchTheFilm
              id_Of_ConnectedUser={id_Of_ConnectedUser}
            /> */}
            {token ? (
              movieLink ? (
                <Iframe
                  url={movieLink}
                  // width='550px'
                  // height='320px'
                  display='block'
                  position='relative'
                  styles={{
                    margin: "0 auto",
                    height: "320px",
                    width: `${matches ? "300px" : "500px"}`,
                  }}
                />
              ) : (
                <Typography>Désolé, pas de lien du Film 😥</Typography>
              )
            ) : (
              <></>
            )}
          </BoxTrailer_MovieLink>
        </RootListMovies>
      </BoxListMovies>
    </>
  );
}
