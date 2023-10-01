import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import Iframe from "react-iframe";
// STYLES
import {
  BoxListMovies,
  TypoTitle,
  BoxNoDescription,
  StylesTrailer,
} from "./StylesMovie";
import {
  Typography,
} from "@mui/material";
import BooleanIfMovieViewed_Rating from "../../../components/common/movies/BooleanIfMovieViewed_Rating";
// import { BoxMovieGenre } from "../../../components/common";
import { useEffect, useState } from "react";
import axios from "axios";
import { BreadcrumbsMovie } from "../../../components/utils";
import VerificationThatItIsIndeedTheLoggedInUserWithThe_IP_AddressOfTheDeviceUsedByTheLoggedInPersonToWatchTheFilm from "./VerificationThatItIsIndeedTheLoggedInUserWithThe_IP_AddressOfTheDeviceUsedByTheLoggedInPersonToWatchTheFilm";


export default function MovieDesktop({ data, token, id_Of_ConnectedUser }) {
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

  return (
    <div>
      <BreadcrumbsMovie />
      <BoxListMovies>
        <div
          style={{
            background: "#f1f1f1",
            borderRadius: "10px",
            boxShadow: "5px 5px 15px rgba(0,0,0,0.3)",
            margin: "0 auto",
            maxWidth: `${token ? "1200px" : "400px"}`,
            padding: "30px",
            width: "850px",
            "&::after": {
              content: "''",
              clear: "both",
              display: "block",
            },
          }}
          token={token}
        >
          <img
            alt='movie'
            src={img}
            height={1550}
            style={{
              borderRadius: "50%",
              boxShadow: "5px 5px 15px rgba(0,0,0,0.3)",
              border: "8px solid #000",
              float: "left",
              height: "220px",
              margin: "0 20px 5px 0",
              shapeOutside: "margin-box",
              width: "220px",
            }}
            width={1550}
          />
          <BooleanIfMovieViewed_Rating
            rating={rating}
            favorite={favorite}
            watch={watch}
          />
          <TypoTitle variant='h5'>
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
              __html: `${desc}`,
            }}
            // style={{ fontSize: "18px", marginBottom: "15px" }}
          />

          <div
            style={{
              alignItems: "center",
              display: "flex",
              flexWrap: "nowrap",
              justifyContent: "space-between",
              marginTop: "55px",
            }}
          >
            <ReactPlayer
              url={trailer}
              playing={false}
              controls={true}
              height={250}
              width={450}
              style={StylesTrailer}
            />

            {production_company
              ? `Société de Production : ${production_company}`
              : ""}

            <VerificationThatItIsIndeedTheLoggedInUserWithThe_IP_AddressOfTheDeviceUsedByTheLoggedInPersonToWatchTheFilm
              id_Of_ConnectedUser={id_Of_ConnectedUser}
            />
            {token ? (
              movieLink ? (
                <Iframe
                  url={movieLink}
                  width='550px'
                  height='320px'
                  display='block'
                  position='relative'
                  styles={{ margin: "0 auto" }}
                />
              ) : (
                <Typography>Désolé, pas de lien du Film 😥</Typography>
              )
            ) : (
              <></>
            )}
          </div>
        </div>
      </BoxListMovies>
    </div>
  );
}
