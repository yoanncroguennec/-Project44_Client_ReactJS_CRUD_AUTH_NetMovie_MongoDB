import React from 'react'

export default function DropdownNavbar() {
  return (
    <div>DropdownNavbar</div>
  )
}


// import { BsBellFill, BsMessenger, BsFillCaretDownFill } from "react-icons/bs";
// import React, { useState, useEffect } from "react";
// import { FaPlusCircle } from "react-icons/fa";
// import axios from "axios";
// import { NavItem, DropdownMenu, DrawerNavigationAdmin } from "../..";
// import { Button, useMediaQuery, useTheme } from "@mui/material";

// export default function DropdownNavbar({
//   token,
//   handleTokenAndId,
//   id_Of_ConnectedUser,
// }) {
//   //////////////////// RESPONSIVE ////////////////////
//   const theme = useTheme();
//   const matches = useMediaQuery(theme.breakpoints.down("md"));
//   const [open, setOpen] = useState(true);

//   // ADMIN;
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

//   const { admin } = userInfosConnected;

//   const navItem = [
//     {
//       icon: <FaPlusCircle />,
//     },
//     {
//       icon: <BsBellFill />,
//     },
//     {
//       icon: <BsMessenger />,
//     },
//   ];
//   return (
//     <nav style={{ background: "brown", width: "50px" }}>
//       <ul
//         style={{
//           maxWidth: "100%",
//           height: "100%",
//           display: "flex",
//           justifyContent: "flex-end",
//         }}
//       >
//         {navItem.map(({ icon, index }) => (
//           <li
//           key={index}
//             style={{
//               width: "calc(60px * 0.8)",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             <a href='#' className='icon-button' onClick={() => setOpen(!open)}>
//               {icon}
//             </a>
//           </li>
//         ))}
//         {admin ? (
//           <Button>
//             <DrawerNavigationAdmin />
//           </Button>
//         ) : (
//           ""
//         )}

//         <li
//           style={{
//             width: "calc(60px * 0.8)",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <a href='#' className='icon-button' onClick={() => setOpen(!open)}>
//             <BsFillCaretDownFill />
//           </a>{" "}
//           {open ? (
//             ""
//           ) : (
//             <DropdownMenu
//               id_Of_ConnectedUser={id_Of_ConnectedUser}
//               token={token}
//               open={open}
//               setOpen={setOpen}
//               handleTokenAndId={handleTokenAndId}
//             />
//           )}
//         </li>
//       </ul>
//     </nav>
//   );
// }
