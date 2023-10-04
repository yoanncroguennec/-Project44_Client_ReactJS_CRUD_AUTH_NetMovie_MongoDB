import React, { useState, useEffect } from "react";
import axios from "axios";
import { Avatar, Box, Button, Modal, Tooltip, Typography } from "@mui/material";
import moment from "moment";
import { Link } from "react-router-dom";
// REACT-CUSTOM-ALERT
import { toast } from "react-toastify";

// ICONS
import {
  AiOutlineExclamationCircle,
  RiDeleteBin2Fill,
} from "../../../utils/assets/icons";
import { TypoTitlePage } from "./StylesAdministratorSide_UserLists";
import { CommonAdminUserList } from "../../../components/common";
const colorIcon = "#F7230C";
const sizeIcon = 35;

export default function AdministratorSide_UserLists() {
  // GET USERS LIST
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);

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


  return loading ? (
    <>Chargement</>
  ) : (
    <Box
      sx={
        {
          // display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
          // flexDirection: "column",
        }
      }
    >
      <TypoTitlePage variant='h6'>
        {/* Supériorité stricte (>) / Supériorité (>=) / Infériorité stricte (<) / Infériorité (<=)	*/}
        {userList.length > 1
          ? ` Nombre d'utilisateur(s) : ${userList.length} personne`
          : ` Nombre d'utilisateur(s) : ${userList.length} personne ${
              userList.length < 1 ? "(s)" : ""
            }`}
      </TypoTitlePage>
      <CommonAdminUserList userList={userList} />
      {/* <DataGrid
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
              /> */}
    </Box>
  );
}
