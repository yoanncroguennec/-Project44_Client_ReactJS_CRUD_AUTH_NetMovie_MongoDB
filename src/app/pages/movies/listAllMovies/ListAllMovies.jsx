import { Typography, useTheme, useMediaQuery, Button } from "@mui/material";
import { useOutletContext, Link } from "react-router-dom";
import { BooleanIfMovieViewed_Rating } from "../../../components/common";
import { TruncateDesc } from "../../../utils/functions";
// STYLES
import {
  BoxListMovies,
  styleLink,
  RootListMovies,
  TypoTitle,
  BoxNoDescription,
} from "./StylesListAllMovies";
import { useEffect, useState } from "react";
import axios from "axios";


import Pagination from "./Pagination";





export default function ListAllMovies() {
  const [allMovies] = useOutletContext();
  console.log("allMovies", allMovies);

	const [page, setPage] = useState(1);

  const [obj, setObj] = useState([]);

  useEffect(() => {
    const getAllMovies = async () => {
      try {
        const url = `https://project44-reactjs-crud-auth-netmovie-mongodb.vercel.app/api/movies/allMoviesByCriteria?page=${page}`;
        const { data } = await axios.get(url);
        setObj(data.movies);
      } catch (err) {
        console.log(err);
      }
    };

    getAllMovies();
  }, [allMovies, page]);




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

  // const [currentPage, setPage] = useState(1)
  // const [limit, setlimit] = useState(4)

  // const lastPostIndex = currentPage * limit;
  // const firstPostIndex = lastPostIndex - limit;
  // const currentPosts = allMovies.slice(firstPostIndex, lastPostIndex)

  //pageApi
  const [pageApi, setPageApi] = useState(1);
  //API
  const [api, setApi] = useState([]);

  return (
    <>
      <Typography>Nombres de films : {allMovies.lenght}</Typography>
      <BoxListMovies style={{ marginTop: "150px" }}>
        {/* {currentPage}
        <Button onClick={() => setPage(currentPage - limit)}>moins</Button>
        <Button onClick={() => setPage(currentPage + limit)}>plus</Button> */}
ssssss
        <Pagination
          page={page}
          // limit={obj.limit ? obj.limit : 0}
          // total={obj.total ? obj.total : 0}
          setPage={(page) => setPage(page)}
        />ccccccccccc

        {obj
          // sortByAlphabeticalOrder
          // .sort((a, b) => (a.name > b.name ? 1 : -1))
          .map(
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
