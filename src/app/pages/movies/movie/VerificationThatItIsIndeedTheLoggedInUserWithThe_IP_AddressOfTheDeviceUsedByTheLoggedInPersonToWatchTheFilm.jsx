import React, { useState, useEffect } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
  Tooltip,
} from "@mui/material";
import axios from "axios";

export default function VerificationThatItIsIndeedTheLoggedInUserWithThe_IP_AddressOfTheDeviceUsedByTheLoggedInPersonToWatchTheFilm({
  id_Of_ConnectedUser,
}) {
  const [ipv4, setIPV4] = useState([]);
  useEffect(() => {
    const getIPV4 = async () => {
      try {
        const url = `https://api.ipify.org`;
        const { data } = await axios.get(url);
        // console.log("ipv4 :", data);
        setIPV4(data);
      } catch (err) {
        console.log(err);
      }
    };

    getIPV4();
  }, []);

//   const [userInfosConnected, setUserInfosConnected] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `${process.env.REACT_APP_API_URL}/users/${id_Of_ConnectedUser}`
//         );
//         console.log("sex :", response.data.sex);
//         setUserInfosConnected(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.log(error.message);
//       }
//     };
//     fetchData();
//   }, [id_Of_ConnectedUser]);

//   const {
//     ipAddress,
//   } = userInfosConnected;

const ipAddress = "80.215.103.172";

//   const [img, setImg] = useState(userInfosConnected.ipAddress);
const [img, setImg] = useState();
  // console.log("rdf", img);

//    console.log("ipAddress :", `${ipAddress}`);
//   console.log("ipv4 :", `${ipv4}`);
  useEffect(() => {
    const imgAvatar = () => {
      if (`${ipAddress}` === `${ipv4}`) {
        console.log("ipAddressV2 :", { ipAddress });
        // setImg(<>Autorisé</>);
      } else {
        setImg(<>Vous n'êtes pas autorisé à utiliser ce compte</>);
      }
    };

    imgAvatar();
  }, []);

  return <div>{img}</div>;
}
