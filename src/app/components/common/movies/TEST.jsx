import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Typography, useMediaQuery, useTheme } from "@mui/material";

export default function TEST({ index, item }) {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get(
          "https://project44-reactjs-crud-auth-netmovie-mongodb.vercel.app/api/movies/" +
            item
        );
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);

  //////////////////// RESPONSIVE ////////////////////
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Link key={movie._id} to={`../movies/${movie._id}`}>
      <div
        style={{
          gridColumnStart: 1,
          gridColumnEnd: 2,
          gridRowStart: 1,
          gridRowEnd: 2,
          textAlgin: "center",
          position: "relative",
        }}
      >
        <Typography
          style={{
            background: "rgba(0, 0, 0, 0.3)",
            fontWeight: "bold",
            position: "absolute",
            top: "0px",
            color: "#FFF",
            height: "30px",
            textAlign: "center",
            width: "100%",
          }}
          variant={matches ? "string" : "body2"}
        >
          {movie.name}
        </Typography>
        <img
          alt={movie.name}
          src={movie.img}
          style={
            matches
              ? { width: "200px", height: "120px" }
              : { width: "350px", height: "200px" }
          }
        />
      </div>
    </Link>
  );
}
