import React, { forwardRef, useEffect, useState } from "react";
import {
  Typography,
  DialogContent,
  DialogTitle,
  Slide,
  AccordionDetails,
  ListItem,
  ListItemText,
  Divider,
  useTheme,
  useMediaQuery,
  Tooltip,
} from "@mui/material";
import axios from "axios";
// STYLES
import {
  BoxAccordion,
  RootDialog,
  BoxAccordionSummary,
  TypoTitleAccordionSummary,
  RootListMovies,
  DialogActionsBtnCloseDialog,
  BtnCloseDialog,
  TypoBtnCloseDialog,
} from "./StylesWelcomePopupAnnouncingTheLatestfilmsAndSeries";
// ICONS
import { SlArrowDown } from "../../../utils/assets/icons";


////////////////////// EFFECT TRANSITION DISPLAY DIALOG //////////////////////
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} timeout={1500} />;
});

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
////////////////////// EXPORT FUNCTION //////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
export default function WelcomePopupAnnouncingTheLatestfilmsAndSeries() {
  //////////////////// RESPONSIVE ////////////////////
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  // STYLES
  const styleImgMovie = {
    border: "5px solid #000",
    borderRadius: "50%",
    height: `${matches ? "100px" : "130px"}`,
    marginRight: `${matches ? "10px" : "50px"}`,
    width: `${matches ? "100px" : "230px"}`,
  };

  // GET API Display Latest Movies In BDD
  const [displayLatestMoviesInBDD, setdisplayLatestMoviesInBDD] = useState([]);

  useEffect(() => {
    const getAllDisplayLatestMoviesInBDD = async () => {
      try {
        const url = `${process.env.REACT_APP_API_URL}/movies/displayLatestMoviesInBDD`;
        const { data } = await axios.get(url);
        // console.log("displayLatestMoviesInBDD :", data.movies);
        setdisplayLatestMoviesInBDD(data.movies);
      } catch (err) {
        console.log(err);
      }
    };

    getAllDisplayLatestMoviesInBDD();
  }, [displayLatestMoviesInBDD]);

  // STATE MODAL DIALOG
  const [open, setOpen] = useState(true);

  /////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////
  ////////////////////////// RETURN ///////////////////////////
  /////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////
  return (
    <RootDialog open={open} TransitionComponent={Transition} keepMounted>
      <DialogContent>
        <DialogTitle align='center' variant='h4'>
          {"Derniers films & séries ajoutés sur Net Movie :"}
        </DialogTitle>

        <BoxAccordion>
          <BoxAccordionSummary expandIcon={<SlArrowDown size={35} />}>
            <TypoTitleAccordionSummary variant='h6'>
              Derniers Films
            </TypoTitleAccordionSummary>
          </BoxAccordionSummary>
          <AccordionDetails>
            <RootListMovies>
              {displayLatestMoviesInBDD
                // sortByAlphabeticalOrder
                .sort((a, b) => a.name > b.name)
                .map(({ _id, name, img, actors }) => (
                  <>
                    <Tooltip title={`Accèdez au film "${name}"`}>
                      <ListItem
                        button
                        // ATTENTION ! Laisser "component='a'", sinon le lien ne marche pas
                        component='a'
                        href={`movies/${_id}`}
                      >
                        <img src={img} alt={name} style={styleImgMovie} />
                        <ListItemText primary={name} secondary={actors} />
                      </ListItem>
                    </Tooltip>

                    <Divider />
                  </>
                ))}
            </RootListMovies>
          </AccordionDetails>
        </BoxAccordion>

        <BoxAccordion>
          <BoxAccordionSummary expandIcon={<SlArrowDown size={35} />}>
            <TypoTitleAccordionSummary variant='h6'>
              Dernières Séries
            </TypoTitleAccordionSummary>
          </BoxAccordionSummary>
          <AccordionDetails>
            <Typography>Désolé, aucunes séries pour le moment. 😥</Typography>
          </AccordionDetails>
        </BoxAccordion>
      </DialogContent>
      <DialogActionsBtnCloseDialog align='center' sx={{}}>
        <BtnCloseDialog
          onClick={() => {
            setOpen(false);
          }}
          href={`featured_SliderCategoryListMovies`}
          variant='contained'
        >
          <TypoBtnCloseDialog>Accèdez aux films</TypoBtnCloseDialog>
        </BtnCloseDialog>
      </DialogActionsBtnCloseDialog>
    </RootDialog>
  );
}
