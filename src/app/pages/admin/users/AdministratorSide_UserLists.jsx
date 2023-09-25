import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import AdminUsersList from "../../../components/common/admin/users/AdminUsersList";

export default function AdministratorSide_UserLists({ token }) {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    async function getAllMovies() {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_URL}/users/`
        );
        // console.log(data.users);
        setUserList(data.users);
      } catch (err) {
        console.log(err);
      }
    }

    getAllMovies();
  }, []);

const dataTableHead = [
  "Addresse IP",
  "Avatar",
  "Pseudo",
  "Prénom",
  "Nom de famille",
  "Email",
  "Numéro de téléphone",
  "Addresse, Code Postale, Ville, Pays",
  "Sexe",
  "Admin",
  "Date de création",
  "Actions",
];

  return   (
    <TableContainer component={Paper} sx={{ maxHeight: "900px" }}>
      <Table aria-label='simple Table' stickyHeader>
        <TableHead>
          <TableRow>
            {dataTableHead.map((item, _id) => (
              <TableCell align="center" key={_id}>{item}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {userList?.map((item) => {
            console.log(item);
            return <AdminUsersList item={item} />;
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
