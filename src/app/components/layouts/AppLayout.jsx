import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Button, Typography, styled } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import DropdownNavbar from "./dropdown/DropdownNavbar";
import moment from "moment";
import "moment/locale/fr";
import formatLocalTime from "../../utils/functions/Function";
var now = moment();

export default function AppLayout({
  handleTokenAndId,
  token,
  id_Of_ConnectedUser,
}) {
  const [toggled, setToggled] = useState(true);

  // DATE
  const [currentDate, setCurrentDate] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  ////////////////////////
  const [darkMode, setDarkMode] = useState(false);

  const [obj, setObj] = useState({});
  const [sort, setSort] = useState({ sort: "rating", order: "desc" });
  const [filterGenre, setFilterGenre] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getAllMovies = async () => {
      try {
        const url = `${
          process.env.REACT_APP_API_URL
        }/movies/allMoviesByCriteria?page=${page}&sort=${sort.sort},${
          sort.order
        }&genre=${filterGenre.toString()}&search=${search}`;
        const { data } = await axios.get(url);
        // console.log("dataMovies :", data);
        setObj(data);
      } catch (err) {
        console.log(err);
      }
    };

    getAllMovies();
  }, [sort, filterGenre, page, search]);

  //////////////////// STYLES ////////////////////
  const RootNavbar = styled(Box)(({ theme }) => ({
    alignItems: "center",
    background:
      "linear-gradient(to top, transparent 0%, rgb(0, 0, 0, 0.3) 50%)",
    color: "white",
    display: "flex",
    flexWrap: "nowrap",
    fontSize: "14px",
    height: " 100px",
    justifyContent: "space-between",
    position: "fixed",
    top: "0",
    width: "100%",
    zIndex: "999",
    [theme.breakpoints.down("sm")]: {},
  }));

  const styleLink = {
    color: "#FFF",
    cursor: "pointer",
    display: "flex",
    flexWrap: "nowrap",
    marginRight: "20px",
    marginLeft: "55px",
    textDecoration: "none",
    textShadow: "1px 1px 1px #000, 3px 3px 5px blue",
  };

  // const BoxDropdownNavbar = styled(Box)(({ theme }) => ({
  //   alignItems: "center",
  //   display: "flex",
  //   marginRight: "55px",
  // }));

  function toggleBtnDropdown() {
    setToggled(!toggled);
  }

  //////////////////// RETURN ////////////////////
  return (
    <>
      <RootNavbar>
        <Link href='/' style={styleLink}>
          <Typography variant='h5' sx={{ fontWeight: "bold" }}>
            Accueil
          </Typography>
        </Link>
        <Typography
          sx={{ fontWeight: "bold", marginRight: "30px" }}
          variant='h6'
        >
          {moment(now).format("dddd DD MMMM YYYY")} /{" "}
          {formatLocalTime(currentDate)}
          {id_Of_ConnectedUser}
        </Typography>
        <div
          style={{
            background: "red",
            display: "flex",
            flexDirection: "column",
            zIndex: 999,
          }}
        >
          {toggled ? (
            <Link to='admin/auth/login'>
              <Typography variant='h5'>Se connecter</Typography>
            </Link>
          ) : (
            <>
              <button onClick={toggleBtnDropdown}>Togglr</button>{" "}
              <DropdownNavbar
                id_Of_ConnectedUser={id_Of_ConnectedUser}
                handleTokenAndId={handleTokenAndId}
              />
            </>
          )}
        </div>

        <>
          {/* <DropdownNavbar
            id_Of_ConnectedUser={id_Of_ConnectedUser}
            handleTokenAndId={handleTokenAndId}
          /> */}
        </>
      </RootNavbar>
      <div
        style={{
          background: "",
          display: "flex",
          // justifyContent: "center",
          flexDirection: "column",
          height: "97vh",
          marginTop: "70px",
        }}
      >
        <Outlet context={[obj, page, setPage, darkMode]} />
      </div>
    </>
  );
}
