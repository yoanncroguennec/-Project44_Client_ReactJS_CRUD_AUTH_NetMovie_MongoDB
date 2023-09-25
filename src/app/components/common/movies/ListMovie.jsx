import { useNavigate } from "react-router-dom";
import { BoxInfosAboutTheMovie, BoxMovie, RootListMovie, stylesMoviePoster } from "./StylesListMovie";
import { Typography } from "@mui/material";
import BooleanIfMovieViewed_Rating from "./BooleanIfMovieViewed_Rating";
import {BoxMovieGenre} from "..";

export default function ListMovie({ movies }) {
  // console.log(movies);
  function truncateActors(str) {
    return str.length > 10 ? str.substring(0, 55) + "..." : str;
  }
  function truncateDesc(str) {
    return str.length > 10 ? str.substring(0, 150) + "..." : str;
  }

  const navigate = useNavigate();

  return (
    <RootListMovie>
      {movies.map(
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
        }) => (
          <BoxMovie key={_id} onClick={() => navigate(`movies/${_id}`)}>
            <img alt='movie' src={img} style={stylesMoviePoster} />
            <BoxInfosAboutTheMovie>
              <BooleanIfMovieViewed_Rating
                rating={rating}
                favorite={favorite}
                watch={watch}
              />
              <Typography variant='h6'>
                {name} ({year} - {country})
              </Typography>

              <Typography variant='body1'>
                <strong>Réalisateurs :</strong> {realisators}
              </Typography>
              <Typography variant='body1'>
                <strong>Acteurs :</strong> {actors}
              </Typography>
              <BoxMovieGenre genre={genre} />
              <div
                dangerouslySetInnerHTML={{ __html: `${truncateDesc(desc)}` }}
                style={{ fontSize: "18px", marginBottom: "15px" }}
              />
            </BoxInfosAboutTheMovie>
          </BoxMovie>
        )
      )}
    </RootListMovie>
  );
}
