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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export default function PopupAboutUs() {
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
        A propos de l'application
      </Typography>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby='alert-dialog-slide-description'
      >
        <DialogTitle>{"Net Movie"}</DialogTitle>
        <DialogContent>
          <Typography variant='body1'>Version : 1.0.0</Typography>
          <Typography variant='body1'>Net Movie et les logos sont des marques de Net Movie.<br />Tous droits réservés.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Fermez</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
