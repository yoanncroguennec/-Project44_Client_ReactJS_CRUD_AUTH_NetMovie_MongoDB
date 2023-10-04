import React, { forwardRef, useState } from "react";
import {
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
// ICONS
import { MdExpandMore } from "react-icons/md";
import { BsFillInfoCircleFill } from "react-icons/bs";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export default function PopupConfidentiality_DropdownNavbar() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Typography onClick={handleClickOpen} variant='body2'>
        Politique de confidentialités
      </Typography>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby='alert-dialog-slide-description'
      >
        <DialogTitle>{"Politique de confidentialités"}</DialogTitle>
        <DialogContent>
          <Typography variant='body1'>
            Nous avons mis à jour les paramètres de confidentialité le 27
            septembre 2023
          </Typography>
          <Accordion>
            <AccordionSummary
              expandIcon={<MdExpandMore />}
              // aria-controls='panel1a-content'
              // id='panel1a-header'
            >
              <Typography>Quelles informations recueillons-nous ?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nous recueillons et stockons dans notre base de données,
                l'adresse IP de votre appareil (Ordinateur, tablette,
                télévision...). Ceci dès lors de votre inscription sur notre
                site internet, mais également au moment de votre connexion, afin
                de sécuriser le site internet. Cette action est également
                bénéfique pour le confort de tous les utilisateurs du site.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<MdExpandMore />}
              // aria-controls='panel3a-content'
              // id='panel3a-header'
            >
              <Typography
                align='center'
                sx={{
                  color: "#F00020",
                  fontWeight: "bold",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                variant='h6'
              >
                <BsFillInfoCircleFill
                  size={35}
                  style={{ marginRight: "20px" }}
                />
                Note d'informations
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{ color: "#F00020", fontWeight: "bold" }}
                variant='body1'
              >
                Tout identifiant & mot de passe donnée à autrui, le compte sera
                supprimé ou bloqué.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Fermez</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
