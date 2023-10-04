import React, { useEffect, useState } from "react";
import axios from "axios";
import { Typography, useTheme, useMediaQuery } from "@mui/material";
import { BooleanIfMovieViewed_Rating } from "../../../components/common";
import { useLocation, Link } from "react-router-dom";
// import { BoxMovieGenre } from "../../../components/common";
// FUNCTIONS
import { TruncateDesc } from "../../../utils/functions"
// STYLES
import {
  BoxListMovies,
  styleLink,
  RootListMovies,
  TypoTitle,
  BoxNoDescription,
} from "./StylesListMovieByCategory";

export default function ListMovieByCategory() {
  // STATES
  const location = useLocation();
  const { movieCategory } = location.state || {};

  const [moviesByGenre, setMoviesByGenre] = useState([]);

  useEffect(() => {
    const getAllMovies = async () => {
      try {
        const url = `${process.env.REACT_APP_API_URL}/movies/sortByMovieGenre?genre=${movieCategory}`;
        const { data } = await axios.get(url);
        console.log("moviesByGenre :", data.movies);
        setMoviesByGenre(data.movies);
      } catch (err) {
        console.log(err);
      }
    };

    getAllMovies();
  }, []);

  //////////////////// RESPONSIVE ////////////////////
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  //////////////////// STYLES ////////////////////
  const styleImg = {
    borderRadius: "50%",
    float: "left",
    height: `${matches ? "100px" : "200px"}`,
    margin: "0 20px 5px 0",
    objectFit: "cover",
    shapeOutside: "margin-box",
    width: `${matches ? "100px" : "200px"}`,
  };

  //////////////////// RETURN ////////////////////
  return (
    <>
      <Typography align='center' variant='h4'>
        {movieCategory}
      </Typography>
      <BoxListMovies style={{ marginTop: "150px" }}>
        {moviesByGenre
          // sortByAlphabeticalOrder
          // .sort((a, b) => (a.name > b.name ? 1 : -1))
          ?.map(
            ({
              _id,
              name,
              desc,
              realisators,
              actors,
              favorite,
              watch,
              country,
              genre,
              img,
              year,
              rating,
              index,
            }) => (
              <Link key={index} to={`../movies/${_id}`} style={styleLink}>
                <RootListMovies>
                  <img
                    alt='movie'
                    src={img}
                    height={750}
                    style={styleImg}
                    width={750}
                  />
                  <BooleanIfMovieViewed_Rating
                    rating={rating}
                    favorite={favorite}
                    watch={watch}
                  />
                  <TypoTitle variant={matches ? "h6" : "h5"}>
                    {name} ({year} - {country})
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
                      __html: `${TruncateDesc(desc)}`,
                    }}
                  />
                </RootListMovies>
              </Link>
            )
          )}
      </BoxListMovies>
    </>
  );
}
