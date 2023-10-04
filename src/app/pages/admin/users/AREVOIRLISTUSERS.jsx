import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { Avatar, Box, Button, Modal, Tooltip, Typography } from "@mui/material";
import moment from "moment";
import { Link } from "react-router-dom";
// REACT-CUSTOM-ALERT
import { toast } from "react-toastify";
// IMGS
import { avatar3DHommeV1, avatar3DFemmeV3 } from "../../../utils/assets/imgs";
// ICONS
import {
  AiOutlineExclamationCircle,
  RiDeleteBin2Fill,
} from "../../../utils/assets/icons";
import "./styles.css";
import { generateRandomGetRowID_ArrayAdmin } from "../../../utils/functions";
const colorIcon = "#F7230C";
const sizeIcon = 35;
// STYLES
const style = {
  position: "absolute",
  borderRadius: "25px",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AdministratorSide_UserLists() {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    async function getAllMovies() {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_URL}/users/`
        );
        console.log(data.users);
        setUserList(data.users);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }

    getAllMovies();
  }, []);

  async function handleDeleteUser(_id) {
    setOpen(false);
    try {
      const res = await axios({
        method: "DELETE",
        url: `https://project44-reactjs-crud-auth-netmovie-mongodb.vercel.app/api/users/${_id}`,
      });
      // console.log("lists", res.data);
      setUserList(res.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  // async function handleOk(_id) {
  //   setIsModalOpen(false);
  //   try {
  //     const res = await axios({
  //       method: "DELETE",
  //       url: `https://project44-reactjs-crud-auth-netmovie-mongodb.vercel.app/api/users/${_id}`,
  //     });
  //     // console.log("lists", res.data);
  //     setUserList(res.data);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }

  // const handleCancel = () => {
  //   setIsModalOpen(false);
  // };



  const columns = [
    {
      field: `img`,
      headerName: "Avatar",
      description: "This column has a value getter and is not sortable.",
      sortable: true,
      type: "string",
      width: 110,
      editable: true,
      renderCell: (params) => (
        <Tooltip title={params.row.account.username}>
          <Avatar
            alt={params.row.account.username}
            src={params.row.account.avatar.url}
            sx={{ width: 56, height: 56 }}
          />
        </Tooltip>
      ),
    },
    {
      field: "ipAddress",
      headerName: "Adresse IP",
      width: 200,
      renderCell: (params) =>
        params.row.ipAddress ? (
          <Typography variant='body2'>{params.row.ipAddress}</Typography>
        ) : (
          <Typography
            sx={{ color: "#F00", fontWeight: "bold" }}
            variant='body1'
          >
            ATTENTION ! Pas indiqué
          </Typography>
        ),
    },
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "account.username",
      headerName: "Pseudo",
      width: 100,
      editable: true,
      renderCell: (params) =>
        params.row.account.username ? (
          <Typography variant='body2'>{params.row.account.username}</Typography>
        ) : (
          <Typography variant='body2'>Pas indiqué</Typography>
        ),
    },
    {
      field: "lastName",
      headerName: "Nom de famille",
      width: 100,
      editable: true,
      renderCell: (params) =>
        params.row.lastName ? (
          <Typography variant='body2'>{params.row.lastName}</Typography>
        ) : (
          <Typography variant='body2'>Pas indiqué</Typography>
        ),
    },
    {
      field: "firstName",
      headerName: "Prénom",
      description: "This column has a value getter and is not sortable.",
      sortable: true,
      type: "string",
      width: 80,
      editable: true,
      renderCell: (params) =>
        params.row.firstName ? (
          <Typography variant='body2'>{params.row.firstName}</Typography>
        ) : (
          <Typography variant='body2'>Pas indiqué</Typography>
        ),
    },
    {
      field: "email",
      headerName: "Email",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 250,
      editable: true,
      renderCell: (params) =>
        params.row.email ? (
          <Link to={`mailto:${params.row.email}`}>
            <Typography sx={{ color: "#FFF" }} variant='body2'>
              {params.row.email}
            </Typography>
          </Link>
        ) : (
          <Typography variant='body2'>Pas indiqué</Typography>
        ),
    },
    {
      field: "phone",
      headerName: "Téléphone",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 120,
      editable: true,
      renderCell: (params) =>
        params.row.phone ? (
          <Link to={`tel:${params.row.phone}`}>
            <Typography sx={{ color: "#FFF" }} variant='body2'>
              {params.row.phone}
            </Typography>
          </Link>
        ) : (
          <Typography variant='body2'>Pas indiqué</Typography>
        ),
    },
    {
      field: "address/postalCode/city/country",
      headerName: "Addresse/Code postal/Ville/Pays",
      width: 320,
      editable: true,
      renderCell: (params) =>
        params.row.address ||
        params.row.postalCode ||
        params.row.city ||
        params.row.state ? (
          <Typography variant='body2'>
            {` ${params.row.address}, ${params.row.postalCode} ${params.row.city}, ${params.row.state}`}
          </Typography>
        ) : (
          <Typography variant='body2'>Pas indiqué</Typography>
        ),
    },
    {
      field: "sex",
      headerName: "Sexe",
      width: 90,
      editable: true,
      renderCell: (params) =>
        params.row.sex ? (
          <img
            style={{ height: "80px", width: "80px" }}
            src={avatar3DFemmeV3}
            alt='avatar3DFemmeV3'
          />
        ) : (
          <img
            style={{ height: "80px", width: "80px" }}
            src={avatar3DHommeV1}
            alt='avatar3DHommeV3'
          />
        ),
    },
    {
      field: "createdAt",
      headerName: "Date de création",
      width: 150,
      editable: false,
      renderCell: (params) =>
        moment(params.row.createdAt).format("YYYY-MM-DD HH:MM:SS"),
    },

    {
      field: "",
      headerName: "Admin/Pas admin",
      width: 150,
      // renderCell: (params) =>
      //   params.row.admin ? (
      //     <Typography
      //       style={{
      //         background: "#3AF24B",
      //         border: "5px solid #1E2F97",
      //         borderRadius: "25px",
      //         textAlign: "center",
      //         padding: "5px 15px",
      //         width: "120px",
      //       }}
      //       variant='body1'
      //     >
      //       Admin
      //     </Typography>
      //   ) : (
      //     <Typography
      //       style={{
      //         background: "#F7230C",
      //         border: "5px solid #1E2F97",
      //         borderRadius: "25px",
      //         padding: "5px 15px",
      //         textAlign: "center",
      //         width: "120px",
      //       }}
      //       variant='body1'
      //     >
      //       Pas Admin
      //     </Typography>
      //   ),
    },

    {
      field: "A REVOIR",
      headerName: "A REVOIR - Conecté/Pas connecté",
      width: 200,
      editable: false,
    },
    {
      field: "Actions",
      headerName: "Actions",
      width: 250,
      editable: true,
      renderCell: (params) => (
        <>
          <Tooltip title='Modifiez'>
            <Button variant='outlined'>Modifiez</Button>
          </Tooltip>
          <Tooltip title='Supprimez'>
            <span>
              <div>
                <RiDeleteBin2Fill
                  onClick={handleOpen}
                  color={colorIcon}
                  size={sizeIcon}
                />
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby='modal-modal-title'
                  aria-describedby='modal-modal-description'
                >
                  <Box sx={style}>
                    <Typography
                      variant='h6'
                      component='h2'
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        color: "#F00",
                        justifyContent: "center",
                        flexWrap: "nowrap",
                      }}
                    >
                      <AiOutlineExclamationCircle
                        color={colorIcon}
                        size={sizeIcon}
                        style={{ margin: "15px" }}
                      />
                      Action irréversible
                    </Typography>
                    <Typography
                      sx={{
                        color: "#F00",
                        fontWeight: "bold",
                      }}
                      variant='body1'
                    >
                      Attention ! Êtes vous sûr de supprimez cette utilisateur ?
                    </Typography>
                    <Box
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        width: "100%",
                        margin: "15px 0",
                      }}
                    >
                      <Button
                        onClick={() => setOpen(false)}
                        sx={{
                          borderColor: "#F00",
                          color: "#F00",
                          fontWeight: "bold",
                          "&:hover": {
                            background: "#f00",
                            color: "#FFF",
                          },
                        }}
                        variant='outlined'
                      >
                        Non
                      </Button>
                      <Button
                        onClick={handleDeleteUser(params.row._id)}
                        sx={{
                          borderColor: "#00FF00",
                          color: "#00FF00",
                          fontWeight: "bold",
                          "&:hover": {
                            background: "#00FF00",
                            color: "#FFF",
                          },
                        }}
                        variant='outlined'
                      >
                        Oui
                      </Button>
                    </Box>

                    {/* <Button
                      onClick={() => setOpen(false)}
                      sx={{
                        borderColor: "#F00",
                        color: "#F00",
                        fontWeight: "bold",
                      }}
                      variant='outlined'
                    >
                      Non
                    </Button>
                    <Button
                      sx={{
                        borderColor: "#00FF00",
                        color: "#00FF00",
                        fontWeight: "bold",
                      }}
                      // onClick={handleDeleteUser}
                      variant='outlined'
                    >
                      Oui
                    </Button> */}
                  </Box>
                </Modal>
              </div>

              {/* <Button
                type='primary'
                onClick={() => {
                  setIsModalOpen(true);
                }}
              >
                <RiDeleteBin2Fill
                  // onClick={() => handleDelete(params.row._id)}
                  color={colorIcon}
                  size={sizeIcon}
                />
              </Button>
              <Modal
                title='Basic Modal'
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <Typography>
                  Attention ! Êtes vous sûr de supprimez cette utilisateur ?
                </Typography>
              </Modal> */}
              {/* <RiDeleteBin2Fill
                onClick={() => handleDelete(params.row._id)}
                color={colorIcon}
                size={sizeIcon}
              /> */}
            </span>
          </Tooltip>
        </>
      ),
    },
  ];

  function Notify() {
    toast.success("Utilisateur supprimé avec succès", {
      position: toast.POSITION.TOP_CENTER,
    });
  }

  function Notify1() {
    toast.error("Erreur", {
      position: toast.POSITION.TOP_CENTER,
    });
  }
  return loading ? (
    <>Chargement</>
  ) : (
    <>
      <body>
        <div className='Section_top'>
          <div className='content'>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Button onClick={Notify}>Notify</Button>
              <Button onClick={Notify1}>Notify</Button>
              NOMBRES D'UTILISATEUR DE MEME POUR LES FILM ET CATEGORIES
              !!!!!!!!!!!!!!
              <Typography
                align=''
                sx={{
                  color: "#FFF",
                  fontWeight: "bold",
                  textShadow: "0 0 3px #FF0000, 0 0 5px #0000FF",
                }}
                variant='h6'
              >
                Nombre d'utilisateur(s) : {userList.length} personnes
              </Typography>
              <DataGrid
                rows={userList}
                columns={columns}
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
                getRowClassName={(params) =>
                  `super-app-theme--${params.row.status}`
                }
                disableRowSelectionOnClick
                getRowId={(row) => generateRandomGetRowID_ArrayAdmin()}
              />
            </Box>
          </div>
        </div>
      </body>
    </>
  );
}
