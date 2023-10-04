import { useState, useEffect, } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Avatar, Button, Rating, Tooltip, Typography } from "@mui/material";
import moment from "moment";
// ICONS
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { LiaEyeSolid, LiaEyeSlash } from "react-icons/lia";
import ReactPlayer from "react-player";
import Iframe from "react-iframe";
// ICONS
import { RiDeleteBin2Fill } from "react-icons/ri"
const colorIcon = "#F7230C";
const sizeIcon = 30;


const columns = [
  {
    field: `img`,
    headerName: "Image",
    description: "This column has a value getter and is not sortable.",
    sortable: true,
    type: "string",
    width: 110,
    editable: true,
    renderCell: (params) => (
      <Tooltip title={params.row.name}>
        <Avatar
          alt={params.row.name}
          src={params.row.img}
          sx={{ width: 56, height: 56 }}
        />
      </Tooltip>
    ),
  },
  { field: "_id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Nom du film",
    width: 150,
    editable: true,
  },
  {
    field: "actors",
    headerName: "Acteurs",
    width: 150,
    editable: true,
    renderCell: (params) =>
      params.row.actors ? (
        <Typography variant='body2'>{params.row.actors}</Typography>
      ) : (
        <Typography variant='body2'>Pas indiqué</Typography>
      ),
  },
  {
    field: "realisators",
    headerName: "Réalisateur(s)",
    description: "This column has a value getter and is not sortable.",
    sortable: true,
    type: "string",
    width: 110,
    editable: true,
    renderCell: (params) =>
      params.row.realisators ? (
        <Typography variant='body2'>{params.row.realisators}</Typography>
      ) : (
        <Typography variant='body2'>Pas indiqué</Typography>
      ),
  },
  {
    field: "desc",
    headerName: "Description",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 350,
    editable: true,
    renderCell: (params) =>
      params.row.desc ? (
        <Typography variant='body2'>{params.row.desc}</Typography>
      ) : (
        <Typography variant='body2'>Pas indiqué</Typography>
      ),
  },

  {
    field: "country",
    headerName: "Pays",
    width: 100,
    editable: true,
  },
  {
    field: "productionCompany",
    headerName: "Société de production",
    width: 100,
    editable: true,
    renderCell: (params) =>
      params.row.productionCompany ? (
        <Typography variant='body2'>{params.row.productionCompany}</Typography>
      ) : (
        <Typography variant='body2'>Pas indiqué</Typography>
      ),
  },

  {
    field: "createdAt",
    headerName: "Créé le",
    width: 150,
    renderCell: (params) =>
      moment(params.row.createdAt).format("YYYY-MM-DD HH:MM:SS"),
  },

  {
    field: "watch",
    headerName: "Vu/Pas vu",
    width: 50,
    editable: false,
    renderCell: (params) =>
      params.row.watch ? (
        <Tooltip title='Vu'>
          <span>
            <LiaEyeSolid size={sizeIcon} />
          </span>
        </Tooltip>
      ) : (
        <Tooltip title='Pas vu'>
          <span>
            {" "}
            <LiaEyeSlash size={sizeIcon} />
          </span>
        </Tooltip>
      ),
  },
  {
    field: "year",
    headerName: "Année",
    width: 70,
    editable: true,
  },
  {
    field: "favorite",
    headerName: "Favoris/ Pas en favoris",
    width: 50,
    editable: false,
    renderCell: (params) =>
      params.row.favorite ? (
        <Tooltip title='En favori'>
          <span>
            <AiFillHeart color={colorIcon} size={sizeIcon} />
          </span>
        </Tooltip>
      ) : (
        <Tooltip title='Pas en favori'>
          <span>
            <AiOutlineHeart color={colorIcon} size={sizeIcon} />
          </span>
        </Tooltip>
      ),
  },
  {
    field: "rating",
    headerName: "Note",
    width: 150,
    editable: false,
    renderCell: (params) => (
      <Rating
        name='half-rating-read'
        defaultValue={params.row.rating}
        precision={0.5}
        readOnly
        size='medium'
      />
    ),
  },
  {
    field: "genre",
    headerName: "genres",
    width: 150,
    editable: true,
  },
  {
    field: "trailer",
    headerName: "Bande-annonce",
    width: 150,
    editable: false,
    renderCell: (params) => (
      <ReactPlayer
        url={params.row.trailer}
        playing={false}
        controls={true}
        height={60}
        width={100}
        style={{ height: "15px", width: "50px" }}
      />
    ),
  },
  {
    field: "movieLink",
    headerName: "Lien du Film (Entier)",
    width: 150,
    editable: false,
    renderCell: (params) => (
      <Iframe
        url={params.row.movieLink}
        width='100px'
        height='60px'
        display='block'
        position='relative'
        styles={{ margin: "0 auto" }}
      />
    ),
  },
  {
    field: "Actions",
    headerName: "Actions",
    width: 250,
    editable: true,
    renderCell: () => (
      <>
        <Tooltip title='Modifiez'>
          <Button variant='outlined'>Modifiez</Button>
        </Tooltip>
        <Tooltip title='Supprimez'>
          <span>
            <RiDeleteBin2Fill color={colorIcon} size={sizeIcon} />
          </span>
        </Tooltip>
      </>
    ),
  },
];

export default function Admin_ListMovie() {

  const [userList, setUserList] = useState([]);

  useEffect(() => {
    async function getAllMovies() {
      try {
        const { data } = await axios.get(
          `https://project44-reactjs-crud-auth-netmovie-mongodb.vercel.app/api/movies`
        );
        // console.log(data.movies);
        setUserList(data.movies);
      } catch (err) {
        console.log(err);
      }
    }

    getAllMovies();
  }, []);

function generateRandom() {
  var length = 8,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

  return (
    <Box sx={{ height: "80vh", width: "100%", marginTop: "150px" }}>
      <DataGrid
        rows={userList}
        columns={columns}
        rowHeight={85}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 15,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        getRowId={(row) => generateRandom()}
      />
    </Box>
  );
}
