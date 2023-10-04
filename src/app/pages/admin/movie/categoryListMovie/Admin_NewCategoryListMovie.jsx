import { useEffect, useState } from "react";
import "./newList.css";
import axios from "axios";
import { Button, Tooltip, Typography } from "@mui/material";
import { DetailedListOfFilmsByCategory } from "../../../../components/common";

export default function Admin_NewCategoryListMovie() {
  const [list, setList] = useState(null);
  const [movies, setObj] = useState([]);

  useEffect(() => {
    const getAllMovies = async () => {
      try {
        const url = `${process.env.REACT_APP_API_URL}/movies`;
        const { data } = await axios.get(url);
        //   console.log("dataMovies :", data.movies);
        setObj(data.movies);
        
      } catch (err) {
        console.log(err);
      }
    };

    getAllMovies();
  }, [movies]);

  const handleChange = (e) => {
    const value = e.target.value;
    setList({ ...list, [e.target.name]: value });
  };

  const handleSelect = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setList({ ...list, [e.target.name]: value });
  };

 async function handleSubmit(e) {
   e.preventDefault();
   try {
     const response = await axios.post(
       "https://project44-reactjs-crud-auth-netmovie-mongodb.vercel.app/api/categoryListMovie",
       list
     );
     console.log(response.data);
     console.log(`Vous avez ajouté un nouveau film : ${list}`);
   } catch (error) {
     console.log("error.response.data", error.response.data);
   }
 }
 
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
          color: "#FFF",
        }}
      >
        <Typography sx={{ fontWeight: "bold" }} variant='h5'>
          Nouvelle Catégorie de films
        </Typography>
        <form className='addProductForm'>
          <div className='formLeft'>
            <div className='addProductItem'>
              <Typography variant='body1'>Titre</Typography>
              <input
                type='text'
                placeholder='Titre de la catégorie de films'
                name='title'
                onChange={handleChange}
              />
            </div>
            <div className='addProductItem'>
              <Typography variant='body1'>Genre</Typography>
              <input
                type='text'
                placeholder='Genre (action, comédie, animation, etc...)'
                name='genre'
                onChange={handleChange}
              />
            </div>
            <div className='addProductItem'>
              <Typography variant='body1'>Type</Typography>
              <select name='type' onChange={handleChange}>
                <option>Type de catégorie</option>
                <option value='movie'>Film(s)</option>
                <option value='series'>Série(s)</option>
              </select>
            </div>
          </div>
          <div className='formRight'>
            <div className='addProductItem'>
              <Typography variant='body1'>
                Liste de films à sélectionner
              </Typography>
              <select multiple name='content' onChange={handleSelect}>
                {movies?.map((movie, index) => (
                  <option
                    key={index}
                    value={movie._id}
                    style={{
                      background: "",
                      alignItems: "center",
                      display: "flex",
                      flexWrap: "nowrap",
                      display: "block",
                      whiteSpace: "nowrap",
                      minHeight: "1.2em",
                      padding: "16px",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <Tooltip title='Delete'>
                      {movie.name} -{" "}
                      {movie.genre.map((item, index) => (
                        <div key={index}>
                          {item}
                          {index !== movie.genre.length - 1 && " /"}
                        </div>
                      ))}
                    </Tooltip>
                  </option>
                ))}
              </select>
            </div>
          </div>
          <Button
            style={{ margin: "0 auto", borderColor: "#F00", color: "#F00" }}
            onClick={handleSubmit}
            variant='outlined'
          >
            Créer
          </Button>
        </form>
      </div>
      <DetailedListOfFilmsByCategory />
    </div>
  );
}
