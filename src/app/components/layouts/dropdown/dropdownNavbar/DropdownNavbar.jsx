import { BsBellFill, BsMessenger, BsFillCaretDownFill } from "react-icons/bs";
import React, { useState, useEffect } from "react";
import { FaPlusCircle } from "react-icons/fa";
import axios from "axios";
import { NavItem, DropdownMenu, DrawerNavigationAdmin } from "../..";
import { Button, useMediaQuery, useTheme } from "@mui/material";


export default function DropdownNavbar({
  token,
  handleTokenAndId,
  id_Of_ConnectedUser,
}) {
  //////////////////// RESPONSIVE ////////////////////
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  // ADMIN;
  const [userInfosConnected, setUserInfosConnected] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/users/${id_Of_ConnectedUser}`
        );
        console.log("sex :", response.data);
        // console.log("sex :", response.data.account.sex);
        setUserInfosConnected(response.data);
        // setSexOfTheLoggedInUser(response.data.account.sex);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id_Of_ConnectedUser]);

  const { admin } = userInfosConnected;

  const navItem = [
    {
      icon: <FaPlusCircle />,
    },
    {
      icon: <BsBellFill />,
    },
    {
      icon: <BsMessenger />,
    },
  ];
  return (
    <nav style={{ width: "50px" }}>
      <ul className='navbar-nav'>
        {navItem.map(({ icon }) => (
          <NavItem icon={icon} />
        ))}
        {admin ? (
          <Button>
            <DrawerNavigationAdmin />
          </Button>
        ) : (
          ""
        )}

        <NavItem icon={<BsFillCaretDownFill />}>
          <DropdownMenu
            id_Of_ConnectedUser={id_Of_ConnectedUser}
            token={token}
            handleTokenAndId={handleTokenAndId}
          />
        </NavItem>
      </ul>
    </nav>
  );
}
