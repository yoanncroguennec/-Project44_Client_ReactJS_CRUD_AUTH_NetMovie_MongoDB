import React, { useEffect, useState } from "react";
import { Button, TableCell, TableRow, Typography } from "@mui/material";
// DATE
import moment from "moment";
import "moment/locale/fr"; // without this line it didn't work

export default function AdminUsersList({ item }) {
  const {
    _id,
    ipAddress,
    account,
    firstName,
    lastName,
    email,
    phone,
    admin,
    createdAt,
  } = item;
  //   console.log("rr", account.sex);

  let ttt = account.sex
  console.log("qrr", ttt);
  const [img, setImg] = useState(ttt);
  //   console.log("rr", img);
  useEffect(() => {
    const imgAvatar = () => {
      if (img === true) {
        setImg(
          <>
            tr
            <img
              style={{ height: "450px", width: "300px" }}
              src='../../../../utils/assets/imgs/avatar3DFemmeV3.png'
              alt='avatar3DFemmeV3'
            />
          </>
        );
      } else {
        setImg(
          <img
            style={{ height: "450px", width: "300px" }}
            src='../../../../utils/assets/imgs/avatar3DHommeV3'
            alt='avatar3DHommeV3'
          />
        );
      }
    };

    imgAvatar();
  }, []);

  return (
    <TableRow
      key={_id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell>
        <Typography
          sx={{ color: "#F00020", fontWeight: "bold" }}
          variant='body1'
        >
          {ipAddress ? `${ipAddress}` : "Non renseigné"}
        </Typography>
      </TableCell>
      <TableCell>
        {account && account.avatar && (
          <img
            alt='AvatarProfile'
            src={account.avatar.secure_url}
            style={{
              margin: "0 auto",
              border: "4px solid #000",
              borderRadius: "50%",
              height: "70px",
              width: "70px",
            }}
          />
        )}
      </TableCell>
      <TableCell>
        <Typography variant='body1'>
          {account && account.username && <>{account.username}</>}
        </Typography>
      </TableCell>
      <TableCell>
        <Typography variant='body1'>
          {firstName ? `${firstName}` : "Non renseigné"}
        </Typography>
      </TableCell>
      <TableCell>
        <Typography variant='body1'>
          {lastName ? `${lastName}` : "Non renseigné"}
        </Typography>
      </TableCell>
      <TableCell>
        <Typography variant='body1'>
          {email ? `${email}` : "Non renseigné"}
        </Typography>
      </TableCell>
      <TableCell>
        <Typography variant='body1'>
          {phone ? `${phone}` : "Non renseigné"}
        </Typography>
      </TableCell>
      <TableCell>
        {account.address && account.postalCode && account.city && account.state
          ? `${account.address} ${account.postalCode} ${account.city} ${account.state}`
          : "Non renseigné"}
      </TableCell>
      <TableCell>
        <Typography variant='body1'>
          {/* {img} */}
          {account.sex ? `${account.sex}` : "Non renseigné"}
        </Typography>
      </TableCell>
      <TableCell>
        <Typography variant='body1'>
          {admin ? `${admin}` : `${admin}`}
        </Typography>
      </TableCell>
      <TableCell>
        <Typography variant='body1'>
          {createdAt
            ? `${moment(createdAt).format("dddd DD MMMM YYYY")}`
            : "Non renseigné"}
        </Typography>
      </TableCell>
      <TableCell>
        <Button variant>Modifier</Button>
        <Button variant>Supprimer</Button>
      </TableCell>
    </TableRow>
  );
}
