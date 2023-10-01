// import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
// import { useRef, useState } from "react";
// import "./list.scss";
// import ListItem from "./ListItem"

// export default function List({ list }) {
//   const [isMoved, setIsMoved] = useState(false);
//   const [slideNumber, setSlideNumber] = useState(0);

//   const listRef = useRef();

//   const handleClick = (direction) => {
//     setIsMoved(true);
//     let distance = listRef.current.getBoundingClientRect().x - 50;
//     if (direction === "left" && slideNumber > 0) {
//       setSlideNumber(slideNumber - 1);
//       listRef.current.style.transform = `translateX(${230 + distance}px)`;
//     }
//     if (direction === "right" && slideNumber < 5) {
//       setSlideNumber(slideNumber + 1);
//       listRef.current.style.transform = `translateX(${-230 + distance}px)`;
//     }
//   };
//   return (
//     <div className='list'>
//       <span className='listTitle'>{list.title}</span>
//       <div className='wrapper'>
//         <BiChevronRight
//           className='sliderArrow left'
//           onClick={() => handleClick("left")}
//           style={{ display: !isMoved && "none" }}
//         />
//         <div className='container' ref={listRef}>
//           {list.content.map((item, index) => (
//             <ListItem item={item} index={0} />
//           ))}
//           {/* <ListItem index={0} /> */}
//         </div>
//         <BiChevronLeft
//           className='sliderArrow right'
//           onClick={() => handleClick("right")}
//         />
//       </div>
//     </div>
//   );
// }

import React, { useRef } from "react";
import { Typography, Container, styled, Box } from "@mui/material";
// COMPONENTS COMMONS
// ICONS
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";
// import { Thumbnail } from "../..";
import {
  BoxListMovies,
  BoxRow,
  BoxRowIndividually,
  RootRow,
  TypoTitleCategory,
  styleBiChevronLeft,
  styleBiChevronRight,
  styleLink,
} from "./StylesRow";
import TEST from "./TEST";
// STYLES

////////////////// EXPORT FUNCTION ////////////////////
export default function List({ category, list }) {
  // console.log("list", list);
  const rowRef = useRef(null);

  const handleClick = (direction) => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <RootRow maxWidth='xl'>
      <BoxRow>
        <Link to='#' style={styleLink}>
          <Typography sx={{ color: "red" }} variant='h5'>
            {list.title}
          </Typography>
        </Link>
        <BoxRowIndividually>
          <BiChevronLeft
            size={22}
            style={styleBiChevronLeft}
            onClick={() => handleClick("left")}
          />
          <BoxListMovies ref={rowRef}>
            {list.content
              // .slice(
              //   0,
              //   5
              // )
              .map((item, i) => (
                <TEST item={item} />
              ))}
          </BoxListMovies>
          <BiChevronRight
            style={styleBiChevronRight}
            onClick={() => handleClick("right")}
          />
        </BoxRowIndividually>
      </BoxRow>
    </RootRow>
  );
}
