import React, { useEffect, useState } from "react";
import axios from "axios";
import backgroundImage from "./home.jpg";

export default function Banner() {
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
  return (
    <div
      //   className='banner'
      style={{
        backgroundImage: `url("${img}")`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        color: "#FFF",
        objectFit: "contain",
        height: "50vh",
        width: "100vw",
      }}
    >
      <div className='bannerContents'>
        <h1 className='bannerTitle'>
          Money Heist
          <div className='bannerBtns'>
            <button className='bannerBtn'>Play</button>
            <button className='bannerBtn'>Play</button>
          </div>
        </h1>
        {img}
      </div>
    </div>
  );
}
