import React, { useEffect, useState } from "react";
import { Button, Menu, Tooltip, MenuItem, Typography } from "@mui/material";
import axios from "axios";
import { AiOutlineLogout } from "react-icons/ai";
const sizeIcon = 33;

//////////////////// EXPORT FUNCTION ////////////////////
export default function DropdownNavbar({ id_Of_ConnectedUser, handleTokenAndId}) {
  const [userInfosConnected, setUserInfosConnected] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/users/${id_Of_ConnectedUser}`
        );
        setUserInfosConnected(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id_Of_ConnectedUser]);

  const {
    account,
    firstname,
    lastname,
    email,
    // sex,
    phone,
    address,
    postal_code,
    city,
    country,
    admin,
    createdAt,
  } = userInfosConnected;


  //////////////////// RETURN ////////////////////
  return (

        <div >
          <div>
          {/* {account && account.avatar && (
            <img
              alt='AvatarProfile'
              src={account.avatar.secure_url}
              style={{
                borderRadius: "50%",
                height: "60px",
                marginRight: "15px",
                width: "60px",
              }}
            />
          )} */}
          <div>
            <Typography variant='h6'>
              Pseufo : `${firstname ? `${firstname}` : "Non renseigné"}
            </Typography>
          </div>
          <Typography variant='h6'>
            ${firstname ? `${firstname}` : "Non renseigné"}`
          </Typography>
        </div>
        <div>
          <Typography variant='h6'>
            `${email ? `${email}` : "Non renseigné"}`
          </Typography>
        </div>
        <div>
          <Typography variant='h6'>
            Admin : `${admin === true ? `Oui` : "Non"}
          </Typography>
        </div>
        <div
          onClick={() => {
            // Cookies.remove("token, i");
            handleTokenAndId(null, null);
          }}
        >
          <Tooltip title='Se déconnecter'>
            <AiOutlineLogout size={sizeIcon} />
          </Tooltip>
        </div>
        </div>

  );
}

// import React, { useEffect, useState } from "react";
// import { Button, Menu, Tooltip, MenuItem, Typography } from "@mui/material";
// import axios from "axios";
// import { AiOutlineLogout } from "react-icons/ai";
// const sizeIcon = 33;

// //////////////////// EXPORT FUNCTION ////////////////////
// export default function DropdownNavbar({ id_Of_ConnectedUser, handleTokenAndId}) {
//   const [userInfosConnected, setUserInfosConnected] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `${process.env.REACT_APP_API_URL}/users/${id_Of_ConnectedUser}`
//         );
//         setUserInfosConnected(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.log(error.message);
//       }
//     };
//     fetchData();
//   }, [id_Of_ConnectedUser]);

//   const {
//     account,
//     firstname,
//     lastname,
//     email,
//     // sex,
//     phone,
//     address,
//     postal_code,
//     city,
//     country,
//     admin,
//     createdAt,
//   } = userInfosConnected;

//   //////////////////// MENU MUI ////////////////////
//   const [anchorEl, setAnchorEl] = useState(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   //////////////////// RETURN ////////////////////
//   return (
//     <>
//       <Button
//         aria-controls={open ? "basic-menu" : undefined}
//         aria-expanded={open ? "true" : undefined}
//         onClick={handleClick}
//       >
//         <img
//           src='/assets/imgs/dp.png'
//           alt='dp'
//           style={{
//             borderRadius: "15px",
//             cursor: "pointer",
//             height: "15px",
//             width: "150px",
//           }}
//         />
//       </Button>
//       <Menu
//         id='basic-menu'
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//         MenuListProps={{
//           "aria-labelledby": "basic-button",
//         }}
//       >
//         <MenuItem onClick={handleClose}>
//           {account && account.avatar && (
//             <img
//               alt='AvatarProfile'
//               src={account.avatar.secure_url}
//               style={{
//                 borderRadius: "50%",
//                 height: "60px",
//                 marginRight: "15px",
//                 width: "60px",
//               }}
//             />
//           )}
//           <MenuItem>
//             <Typography variant='h6'>
//               Pseufo : `${firstname ? `${firstname}` : "Non renseigné"}
//             </Typography>
//           </MenuItem>
//           <Typography variant='h6'>
//             ${firstname ? `${firstname}` : "Non renseigné"}`
//           </Typography>
//         </MenuItem>
//         <MenuItem>
//           <Typography variant='h6'>
//             `${email ? `${email}` : "Non renseigné"}`
//           </Typography>
//         </MenuItem>
//         <MenuItem>
//           <Typography variant='h6'>
//             Admin : `${admin === true ? `Oui` : "Non"}
//           </Typography>
//         </MenuItem>
//         <MenuItem
//           onClick={() => {
//             // Cookies.remove("token, i");
//             handleTokenAndId(null, null);
//           }}
//         >
//           <Tooltip title='Se déconnecter'>
//             <AiOutlineLogout size={sizeIcon} />
//           </Tooltip>
//         </MenuItem>
//       </Menu>
//     </>
//   );
// }
