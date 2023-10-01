import React, { useState, useEffect } from "react";
import axios from "axios";
import { Typography } from "@mui/material";
import { Featured } from "../../../components/common";

export default function ListMovies() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const getLists = async () => {
      try {
        const res = await axios.get(
          `https://project44-reactjs-crud-auth-netmovie-mongodb.vercel.app/api/categoryListMovie`
        );
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getLists();
  }, []);


  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Featured />
      <Typography style={{ color: "red"}}>vvvvvvvv</Typography>
    </div>
  );
}
