import {
  Box,
  Button,
  Typography,
  styled,
  useTheme,
  useMediaQuery,
} from "@mui/material";
// NEXT
// import Image from "next/image";
// CONSTANTS
// import { baseUrlImg } from "@/utils/constants/Constants";
// FUNCTIONS
// import { Truncate } from "@/utils/functions/Truncate";
// ICONS
import {
  BsFillPlayFill,
  BsInfoCircle,
} from "react-icons/bs";
const sizeIcon = 35;

//////////////////// STYLES BOX_BG_MOVIE AND BOX_TITLE_DESC_MOVIE ////////////////////
const BoxBG_Movie = styled(Box)(({ theme }) => ({
  height: "100vh",
  left: 0,
  position: "absolute",
  top: 0,
  width: "100vw",
  zIndex: "-10",
}));

const BoxTitleDescMovie = styled(Box)(({ theme }) => ({
  background: "rgba(0, 0, 0, 0.4)",
  borderRadius: "25px",
  marginLeft: "150px",
  padding: "50px",
  width: "700px",
  [theme.breakpoints.down("sm")]: {
    marginLeft: "10px",
    padding: "10px",
    width: "300px",
  },
}));

const TypoMovie = styled(Typography)(({ theme }) => ({
  color: "#FFF",
  fontWeight: "bold",
  textAlign: "center",
  textShadow: "1px 1px 1px #000, 3px 3px 5px blue",
}));

const BoxNoDescription = styled(Box)(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  margin: "25px",
}));

const TypoDesc = styled(Typography)(({ theme }) => ({
  color: "#FFF",
  textAlign: "justify",
}));

//////////////////// EXPORT FUNCTION ////////////////////
export default function BoxBGMovie_And_BoxTitleDescMovie({
  // Props
  randomMovie,
  openModalInfosMovie,
  setOpenModalInfosMovie,
  // Functions
  OpenModalTrailer,
}) {
  const { img, name, desc } = randomMovie;
  //////////////////// RESPONSIVE ////////////////////
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <BoxBG_Movie>
        <img alt="Poster Film" src={img} style={{ height: "100%", width: "100%", objectFit: "fill"}}/>
      </BoxBG_Movie>
      <BoxTitleDescMovie>
        <TypoMovie variant={matches ? "h6" : "h2"}>
          {name}
        </TypoMovie>
        <TypoDesc>{desc}</TypoDesc>
        {/* <TypoDesc>{Truncate(`${movie?.overview}`, 500)}</TypoDesc> */}
        <div>
          <div>
            <Button variant='contained' onClick={OpenModalTrailer}>
              <BsFillPlayFill size={sizeIcon} />
              <Typography>Lecture</Typography>
            </Button>
            <Button
              onClick={() => setOpenModalInfosMovie(!openModalInfosMovie)}
              variant='contained'
              style={{ background: "grey", color: "#000" }}
            >
              <BsInfoCircle size={sizeIcon} style={{ marginRight: "10px" }} />
              <Typography>Infos</Typography>
            </Button>
          </div>
        </div>
      </BoxTitleDescMovie>
    </>
  );
}
