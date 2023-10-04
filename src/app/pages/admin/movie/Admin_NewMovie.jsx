import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import NewMovie from "./NewMovie";
// STYLES

export default function Admin_NewMovie({ token }) {
  const [name, setName] = useState("");
  const [realisators, setRealisators] = useState("");
  const [actors, setActors] = useState("");
  const [desc, setDesc] = useState("");
  const [trailer, setTrailer] = useState("");
  const [favorite, setFavorite] = useState(false);
  const [watch, setWatch] = useState(false);
  const [country, setCountry] = useState("");
  const [movieLink, setMovieLink] = useState("");
  const [img, setImg] = useState("");
  const [productionCompany, setProductionCompany] = useState("");
  const [year, setYear] = useState(0);
  const [genre, setGenre] = useState([]);
  const [rating, setRating] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);


    const [genresOfMovie, setGenresOfMovie] = useState([]);

    useEffect(() => {
      const getGenresOfMovie = async () => {
        try {
          const url = `https://project44-reactjs-crud-auth-netmovie-mongodb.vercel.app/api/categoryListMovie`;
          const { data } = await axios.get(url);
            // console.log("dataGenresOfMovie :", data);
          setGenresOfMovie(data);
          setLoading(false);
        } catch (err) {
          console.log(err);
        }
      };

      getGenresOfMovie();
    }, []);

  const handleSignup = async (event) => {
    event.preventDefault();
    setErrorMessage(""); // Je fais disparaitre le message d'erreur
    try {
      // const response = await axios.put("http://localhost:8080/api/movies", {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/movies`,
        {
          name, // name: name,
          realisators,
          actors,
          desc,
          trailer,
          favorite,
          watch,
          country,
          movieLink,
          img,
          productionCompany,
          year,
          genre,
          rating,
        }
      );

      // console.log(response.data);
      // console.log(`Vous avez ajouté un nouveau film : ${name}`);
      navigate("/");
      // }
    } catch (error) {
      console.log("error.response.data", error.response.data);
      console.log("error.response.status", error.response.status);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "nowrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "rgba(0, 0, 0, 0.5)",
          marginRight: "150px",
          width: "70%",
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
          border: "5px solid #F00",
          borderRadius: "15px",
          padding: "25px",
          height: "80vh",
          overflow: "scroll",
          width: "850px",
          overflowX: "hidden",
          color: "#FFF",
        }}
      >
        <NewMovie
          handleSignup={handleSignup}
          name={name}
          setName={setName}
          realisators={realisators}
          setRealisators={setRealisators}
          actors={actors}
          setActors={setActors}
          desc={desc}
          setDesc={setDesc}
          trailer={trailer}
          setTrailer={setTrailer}
          favorite={favorite}
          setFavorite={setFavorite}
          watch={watch}
          setWatch={setWatch}
          country={country}
          setCountry={setCountry}
          movieLink={movieLink}
          setMovieLink={setMovieLink}
          img={img}
          setImg={setImg}
          productionCompany={productionCompany}
          setProductionCompany={setProductionCompany}
          year={year}
          setYear={setYear}
          genre={genre}
          setGenre={setGenre}
          rating={rating}
          setRating={setRating}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
          genresOfMovie={genresOfMovie}
        />
      </div>
    </div>
  );
}
