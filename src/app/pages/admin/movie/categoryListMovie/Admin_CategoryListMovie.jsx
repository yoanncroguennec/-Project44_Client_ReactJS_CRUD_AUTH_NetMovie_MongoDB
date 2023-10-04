import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";
import { DetailedListOfFilmsByCategory } from "../../../../components/common";
import { MdDeleteOutline } from "react-icons/md";

export default function Admin_CategoryListMovie() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const getLists = async () => {
      try {
        const res = await axios.get(
          `https://project44-reactjs-crud-auth-netmovie-mongodb.vercel.app/api/categoryListMovie`
        );

        // console.log("lists", res.data);
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getLists();

    handleDelete();
  }, []);

  async function handleDelete(_id) {
    try {
      const res = await axios({
        method: "DELETE",
        url: `https://project44-reactjs-crud-auth-netmovie-mongodb.vercel.app/api/categoryListMovie/${_id}`,
      });
      // console.log("lists", res.data);
      setLists(res.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  function generateRandom() {
    var length = 8,
      charset =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  }

  const columns = [
    { field: "_id", headerName: "ID", width: 250 },
    { field: "title", headerName: "title", width: 100 },
    { field: "genre", headerName: "Genre", width: 100 },
    { field: "type", headerName: "type", width: 100 },
    {
      field: "content",
      headerName: "ID des Films",
      width: 450,
      renderCell: (params) => {
        return (
          <>
            {params.row.content.map((genre, index) => (
                // <Link> ////// A METTRE QU'ON CLIQUE SUR L'ID DU FILM ON EST REDIRIGE VERS LA FICHE DU FILM
                <p key={genre}>
                  {genre}
                  {index !== params.row.content.length - 1 && ` /`}
                </p>
                // </Link>
              ))}
            <Typography variant='body1'>{params.row.content}</Typography>
          </>
        );
      },
    },
    {
      field: "action",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            UPDATE/
            <MdDeleteOutline
              className='productListDelete'
              onClick={() => {
                handleDelete(params.row._id);
              }}
            />
            {/* <Link
              to={{ pathname: "/list/" + params.row._id, list: params.row }}
            >
              <button className='productListEdit'>Edit</button>
            </Link> */}
          </>
        );
      },
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "nowrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <DataGrid
          rows={lists}
          columns={columns}
          rowHeight={85}
          sx={{
            background: "rgba(0, 0, 0, 0.5)",
            width: "70%",
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            border: "5px solid #F00",
            borderRadius: "15px",
            padding: "25px",
            color: "#FFF",
            "& .MuiDataGrid-cell:hover": { color: "yellow" },
          }}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 15,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          getRowClassName={(params) => `super-app-theme--${params.row.status}`}
          disableRowSelectionOnClick
          getRowId={(row) => generateRandom()}
        />
      </Box>
      <DetailedListOfFilmsByCategory />
    </div>
  );
}
