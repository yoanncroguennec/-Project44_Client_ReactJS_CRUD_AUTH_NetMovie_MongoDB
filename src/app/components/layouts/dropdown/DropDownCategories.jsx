// import React from 'react'

// export default function DropDownCategories() {
//   return (
//     <div>DropDownCategories</div>
//   )
// }

// import React, { useState } from "react";
// import {
//   FormControl,
//   InputLabel,
//   MenuItem,
//   Select,
//   Typography,
// } from "@mui/material";
// // NEXT
// // DATAS
// // import { valueCategory } from "@/utils/data/DataValueCategory";
// // ICONS
// import { SlArrowDown } from "react-icons/sl";
// import { Link } from "react-router-dom";
// import {
//   BoxCategory,
//   Dropdown,
//   DropdownBtn,
//   DropdownItem,
//   styleLink,
// } from "./StylesDropDownCategories";
// // UTILS ASSETS DATAS
// import { valueCategoryDropdownFeatured } from "../../../utils/assets/data";

// //////////////////// EXPORT FUNCTION ///////////////////
// export default function DropDownCategories({}) {
//   //////////////////// DROPDOWN CATEGORIES ////////////////////
//   const type = "movie";
//   const [selected, setSelected] = useState("");
//   const [isActive, setIsActive] = useState(false);

//   return (
//     type && (
//       <Dropdown className="uu">
//         <DropdownBtn
//           onClick={(e) => setIsActive(!isActive)}
//           style={{ height: "15px" }}
//         >
//           <Typography>
//             {selected || "GENRE"} ({type === "movie" ? "Films" : "Séries"})
//           </Typography>
//           <SlArrowDown size={25} />
//         </DropdownBtn>
//         {isActive && (
//           <>
//             <div
//               style={{
//                 height: "350px",
//                 border: "1px dotted black",
//                 overflowY: "scroll",
//                 zIndex: 999,
//               }}
//             >
//               {valueCategoryDropdownFeatured.map(
//                 ({ textCategory, urlCategory, index}) => (
//                   <div>
//                     <Link
//                       to={urlCategory}
//                       state={{
//                         movieCategory: `${textCategory}`,
//                       }}
//                       key={index}
//                       style={styleLink}
//                       onClick={(e) => setSelected(e.target.textContent)}
//                     >
//                       <DropdownItem>
//                         <Typography>{textCategory}</Typography>
//                       </DropdownItem>
//                     </Link>
//                   </div>
//                 )
//               )}
//             </div>
//           </>
//         )}
//       </Dropdown>
//     )
//   );
// }
