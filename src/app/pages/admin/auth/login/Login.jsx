import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

import "./login.css";

const Login = ({ handleTokenAndId }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setIsLoading(true);
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/login`,
        {
          email: email,
          password: password,
        }
      );
      console.log("data :", response.data);
      // console.log("id :", response.data._id);
      if (response.data.token) {
        // handleTokenAndId(response.data.token);
        handleTokenAndId(
          response.data.token,
          response.data._id,
          response.data.admin
        );
        setIsLoading(false);
        navigate("/");
      } else {
        alert("Une erreur est survenue, veuillez réssayer.");
      }
    } catch (error) {
      if (error.response.status === 401 || error.response.status === 400) {
        setErrorMessage("Mauvais email et/ou mot de passe");
        setIsLoading(false);
      }
      console.log(error.message);
    }
  };

  return (
    <div className='signup-container'>
      <div
        style={{
          border: "2px solid #000",
          borderRadius: "10px",
          margin: "0 auto",
          marginBottom: "15px",
          padding: "5px",
          width: "350px",
        }}
      >
        <Typography variant='h6'>Banc de test :</Typography>
        <Typography variant='body1'>
          <u>Email :</u> yoann.croguennec@gmail.com
        </Typography>
        <Typography variant='body1'>
          <u>Mot de passe :</u> 95449544
        </Typography>
      </div>
      <Typography variant='h5'>Se connecter</Typography>
      <form onSubmit={handleSubmit} className='signup-form'>
        <input
          onChange={(event) => {
            setEmail(event.target.value);
            setErrorMessage("");
          }}
          placeholder='Adresse email'
          type='email'
        />
        <input
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          placeholder='Mot de passe'
          type='password'
        />
        <span className='signup-login-error-message'>{errorMessage}</span>
        {isLoading ? (
          <></>
        ) : (
          <button disabled={isLoading ? true : false} type='submit'>
            Se connecter
          </button>
        )}
      </form>
      <Link to='/signup'>Pas encore de compte ? Inscris-toi !</Link>
    </div>
  );
};

export default Login;
