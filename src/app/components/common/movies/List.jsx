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
  styleBiChevronLeft,
  styleBiChevronRight,
  styleLink,
} from "./StylesRow";
import TEST from "./TEST";
// STYLES

////////////////// EXPORT FUNCTION ////////////////////
export default function List({ list }) {
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
