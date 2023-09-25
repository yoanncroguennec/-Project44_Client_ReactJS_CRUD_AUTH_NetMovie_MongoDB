import React, { useState } from "react";
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
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();
    setErrorMessage(""); // Je fais disparaitre le message d'erreur
    try {
      // const response = await axios.put("http://localhost:8080/api/movie", {
      const response = await axios.post("http://localhost:8080/api/movies", {
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
      });

      console.log(response.data);
      console.log(`Vous avez ajouté un nouveau film : ${name}`);
      navigate("/");
      // }
    } catch (error) {
      console.log("error.response.data", error.response.data);
      console.log("error.response.status", error.response.status);
    }
  };

  return (
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
    />
  );
}
