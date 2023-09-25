import {
  Box,
  Button,
  Modal,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
// ICONS
import { AiOutlineClose } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
const sizeIcon = 35;

//////////////////// STYLES MODAL INFOS MOVIE ////////////////////
const BoxModalInfosMovie = styled(Box)(({ theme }) => ({
  background: "rgba(0, 0, 0, 0.9)",
  border: "2px solid #000",
  borderRadius: "25px",
  boxShadow: 24,
  color: "#FFF",
  left: "50%",
  padding: "55px",
  position: "absolute",
  top: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  [theme.breakpoints.down("sm")]: {
    padding: "0",
    width: 350,
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
  margin: "35px",
  textAlign: "justify",
}));

//////////////////// EXPORT FUNCTION ////////////////////
export default function ModalInfosMovie({
  // Props
  name,
  desc,
  openModalInfosMovie,
  // Functions
  CloseModalInfosMovie,
  OpenModalTrailer,
}) {
  //////////////////// RESPONSIVE ////////////////////
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Modal
      open={openModalInfosMovie}
      onClose={CloseModalInfosMovie}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <BoxModalInfosMovie>
        <AiOutlineClose
          color='#FF0000'
          onClick={CloseModalInfosMovie}
          size={35}
          style={{
            cursor: "pointer",
            "&:hover": {
              color: "blue",
            },
          }}
        />
        <TypoMovie variant={matches ? "h6" : "h2"}>
          {name}
        </TypoMovie>
        <TypoDesc>{desc}</TypoDesc>
        <div>
          <div>
            <Button variant='contained' onClick={OpenModalTrailer}>
              <BsFillPlayFill size={sizeIcon} />
              <Typography>Lecture</Typography>
            </Button>
          </div>
        </div>
      </BoxModalInfosMovie>
    </Modal>
  );
}
