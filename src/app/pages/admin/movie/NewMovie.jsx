// BON MANQUE LE STYLES
import { Link } from "react-router-dom";
import { Rating,
  TextField, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
// ICONS
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { LiaEyeSolid, LiaEyeSlash } from "react-icons/lia";
import { useState } from "react";
const colorIconHeart = "#ce1957";
const colorIconEye = "#000";
const sizeIcon = 30;

const label = { inputProps: { "aria-label": "Checkbox demo" } };
  
export default function NewMovie({
  handleSignup,
  name,
  setName,
  realisators,
  setRealisators,
  actors,
  setActors,
  desc,
  setDesc,
  trailer,
  setTrailer,
  favorite,
  setFavorite,
  watch,
  setWatch,
  country,
  setCountry,
  movieLink,
  setMovieLink,
  img,
  setImg,
  productionCompany,
  setProductionCompany,
  year,
  setYear,
  genre,
  setGenre,
  rating,
  setRating,
  errorMessage,
  setErrorMessage,
}) {
  const [count, setCount] = useState(0);

  return (
    <div className='signup-container'>
      <Typography variant='h4'>Nouveau film (Admin) :</Typography>
      <form
        onSubmit={handleSignup}
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "0 auto",
          width: "550px",
        }}
      >
        <TextField
          label='Nom du film'
          onChange={(e) => {
            setName(e.target.value);
          }}
          style={{ margin: "10px 0" }}
          value={name}
          variant='outlined'
        />
        <TextField
          label='Réalisateur(s)'
          multiline
          rows={2}
          onChange={(e) => {
            setRealisators(e.target.value);
          }}
          style={{ margin: "10px 0" }}
          value={realisators}
          variant='outlined'
        />
        <TextField
          label='Acteur(s)'
          multiline
          rows={3}
          onChange={(e) => {
            setActors(e.target.value);
          }}
          style={{ margin: "10px 0" }}
          value={actors}
          variant='outlined'
        />
        <TextField
          label='Description'
          multiline
          rows={9}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
          style={{ margin: "10px 0" }}
          value={desc}
          variant='outlined'
        />
        <TextField
          label='Bande-annonce'
          onChange={(e) => {
            setTrailer(e.target.value);
          }}
          style={{ margin: "10px 0" }}
          value={trailer}
          variant='outlined'
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              alignItems: "center",
              display: "flex",
              flexWrap: "nowrap",
              justifyContent: "center",
            }}
          >
            <Typography variant='h6'>
              {favorite ? <>En favoris</> : <>Pas en favoris</>}
            </Typography>
            <Checkbox
              icon={<AiOutlineHeart color={colorIconHeart} size={sizeIcon} />}
              checkedIcon={
                <AiFillHeart color={colorIconHeart} size={sizeIcon} />
              }
              onChange={() => {
                setFavorite(!favorite);
              }}
              value={favorite}
            />
          </div>

          <div
            style={{
              alignItems: "center",
              display: "flex",
              flexWrap: "nowrap",
              justifyContent: "center",
            }}
          >
            <Typography variant='h6'>
              {watch ? <>Vu</> : <>Pas Vu</>}
            </Typography>
            <Checkbox
              icon={<LiaEyeSlash color={colorIconEye} size={sizeIcon} />}
              checkedIcon={<LiaEyeSolid color={colorIconEye} size={sizeIcon} />}
              onChange={() => {
                setWatch(!watch);
              }}
              value={watch}
            />
          </div>
        </div>
        <TextField
          label='Pays de production'
          onChange={(e) => {
            setCountry(e.target.value);
          }}
          style={{ margin: "10px 0" }}
          value={country}
          variant='outlined'
        />
        <TextField
          label='Lien du film'
          onChange={(e) => {
            setMovieLink(e.target.value);
          }}
          style={{ margin: "10px 0" }}
          value={movieLink}
          variant='outlined'
        />
        <TextField
          label='Poster du film'
          onChange={(e) => {
            setImg(e.target.value);
          }}
          style={{ margin: "10px 0" }}
          value={img}
          variant='outlined'
        />
        <TextField
          label='Société de production'
          onChange={(e) => {
            setProductionCompany(e.target.value);
          }}
          style={{ margin: "10px 0" }}
          value={productionCompany}
          variant='outlined'
        />
        <Typography
          className={`minus ${year === 0 && "hidden"} hidden-when-small`}
        >
          {/* Si 0 caché si supérieur afficher */}
          <strong>Année :</strong> {year}
        </Typography>
        <input
          value={year}
          onChange={(e) => {
            setYear(e.target.value);
          }}
          placeholder='Année'
          step={1}
          min={1930}
          max={2050}
          type='range'
        />
        <TextField
          label='Genre de film'
          onChange={(e) => {
            setGenre(e.target.value);
          }}
          style={{ margin: "10px 0" }}
          value={genre}
          variant='outlined'
        />
        <Typography
          className={`minus ${rating === 0 && "hidden"} hidden-when-small`}
        >
          <strong>Note :</strong> {rating}
        </Typography>

        <Rating
          name='half-rating'
          defaultValue={rating}
          onChange={(e) => {
            setRating(e.target.value);
          }}
          precision={0.5}
          size='large'
        />
        <button type='submit'>Enregistrez un nouveau film</button>
      </form>
      <Link to='/login'>Tu as déjà un compte ? Connecte-toi !</Link>
    </div>
  );
}
