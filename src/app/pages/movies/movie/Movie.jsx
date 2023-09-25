import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import Iframe from "react-iframe";
import axios from "axios";
import { Typography } from "@mui/material";
// ICONS
import {
  ImgMoviePoster,
  BoxTitleDescMovie,
  BoxInfosAboutTheMovie,
  BoxTitleYearCountry_BooleanIfMovieViewed_Rating,
  TypoTitleYearCountry,
  StylesTrailer,
} from "./StylesMovie";
import { BreadcrumbsMovie } from "../../../components/layouts";
import BooleanIfMovieViewed_Rating from "../../../components/common/movies/BooleanIfMovieViewed_Rating";
import { BoxMovieGenre } from "../../../components/common";

export default function Movie({ token }) {
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

  return isLoading ? (
    <>....</>
  ) : (
    <>
      <BreadcrumbsMovie />
      <BoxTitleDescMovie>
        <img alt='movie' src={img} style={ImgMoviePoster} />
        <BoxInfosAboutTheMovie>
          <div>
            <BoxTitleYearCountry_BooleanIfMovieViewed_Rating>
              <TypoTitleYearCountry variant='h5'>
                {name} ({year} - {country})
              </TypoTitleYearCountry>
              <BooleanIfMovieViewed_Rating
                rating={rating}
                favorite={favorite}
                watch={watch}
              />
            </BoxTitleYearCountry_BooleanIfMovieViewed_Rating>
            <ReactPlayer
              url={trailer}
              controls={true}
              height={250}
              width={450}
              style={StylesTrailer}
            />

            {production_company
              ? `Société de Production : ${production_company}`
              : ""}
            <br />
          </div>
          <Typography variant='body1'>
            <strong>Réalisateurs :</strong> {realisators}
          </Typography>
          <Typography variant='body1'>
            <strong>Acteurs :</strong> {actors}
          </Typography>
          <BoxMovieGenre genre={genre} />
          <div
            dangerouslySetInnerHTML={{ __html: `${desc}` }}
            style={{ fontSize: "18px", marginBottom: "15px" }}
          />
          {token ? (
            <Iframe
              url={movieLink}
              width='550px'
              height='320px'
              display='block'
              position='relative'
              styles={{ margin: "0 auto" }}
            />
          ) : (
            <></>
          )}
        </BoxInfosAboutTheMovie>
      </BoxTitleDescMovie>
    </>
  );
}
