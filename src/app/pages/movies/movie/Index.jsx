import { useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react'
import MovieMobile from './MovieMobile';
import MovieDesktop from './MovieDesktop';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Movie from './Movie';

export default function Index() {
  //////////////////// RESPONSIVE ////////////////////
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));



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


  return matches ? (
    <MovieMobile data={data} />
  ) : (
    <Movie isLoading={isLoading} data={data} />
  );
}
