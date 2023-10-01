import {
  Box,
  Drawer,
  Button,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
//   InboxIcon,
  MailIcon,
  Typography,
  Tooltip,
} from "@mui/material";
import React, { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { GrUserAdmin } from "react-icons/gr";

export default function DrawerNavigationAdmin() {
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (e) => {
    if (
      e.type === "keydown" &&
      (e.key === "Tab" || e.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };


  const itemDrawerNavigationAdmin = [
    {
      icon: "",
      text: "Nouvel utilisateur (Amis/Famille)",
      tooltip: "Seulement Amis/Famille pour sécurisé",
      url: "admin/auth/signup",
    },
    {
      icon: "",
      text: "Liste des Utilisateurs Inscrits",
      tooltip: "Seulement Amis/Famille pour sécurisé",
      url: "admin/administratorSide_UserLists",
    },
    {
      icon: "",
      text: "Nouveau film",
      tooltip: "",
      url: "admin/auth/newMovie",
    },
    {
      icon: "",
      text: "Liste des catégories de films",
      tooltip: "",
      url: "admin/admin_CategoryListMovie",
    },
    {
      icon: "",
      text: "Nouvelle catégorie de film",
      tooltip: "",
      url: "",
    },
    {
      icon: "",
      text: "",
      tooltip: "",
      url: "",
    },
    {
      icon: "",
      text: "",
      tooltip: "",
      url: "",
    },
  ];


  const list = (anchor) => (
    <Box
      className='testBg'
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 350 }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div style={{ background: "rgba(0, 0, 0, 0.5)", borderRadius: "15px", width: "80%", flexDirection: "column", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Typography>ADMINISTRATEUR</Typography>
        <List>
          {itemDrawerNavigationAdmin.map(({ text, url, tooltip, icon }) => (
            <ListItem key={text} disablePadding>
              <Link to={url}>
                <ListItemButton>
                  <ListItemIcon>
                    {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
        {/* <List> */}
        {/* {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
        {/* <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </div>
    </Box>
  );
  return (
    <div>
      {[""].map((anchor) => (
        <React.Fragment key={anchor}>
          <Tooltip title='Admin'>
            <div
              style={{
                background: "#FFF",
                borderRadius: "50%",
                height: "30px",
                width: "30px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={toggleDrawer(anchor, true)}
            >
              {" "}
              <GrUserAdmin size={25} />
            </div>
          </Tooltip>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            // sx={{background: "red"}}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
