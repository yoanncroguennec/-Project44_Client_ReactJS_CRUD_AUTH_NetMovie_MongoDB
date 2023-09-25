import { useState } from "react";
import { useRoutes } from "react-router-dom";
import Cookies from "js-cookie";
import AppLayout from "../components/layouts/AppLayout";
// // PAGES
import { Admin_NewMovie, AdministratorSide_UserLists, Home, ListMovies, LiveRadio, Login, Movie, MyProfile, Signup } from "../pages";
// // Layouts
// import { AppLayout } from "../components/layouts";

export default function Router() {
  const [token, setToken] = useState(Cookies.get("token") || null);
  const [id_Of_ConnectedUser, setId_Of_ConnectedUser] = useState(
    Cookies.get("yourIdUser") || null
  );
  const [adminOfConnectedUser, setAdminOfConnectedUser] = useState(
    Cookies.get("admin") || null
  );


  // Cette fonction permet de stocker le token dans le state et dans les cookies ou supprimer le token dans le state et dans les cookies
  const handleTokenAndId = (token, id, admin) => {
    if (token && id) {
      setToken(token);
      setId_Of_ConnectedUser(id);
      setAdminOfConnectedUser(admin);
      Cookies.set("token", token, { expires: 14 });
      Cookies.set("yourIdUser", id, { expires: 14 });
      Cookies.set("admin", admin, { expires: 14 });
    } else {
      setToken(null);
      setId_Of_ConnectedUser(null);
      setAdminOfConnectedUser(null);
      Cookies.remove("token");
      Cookies.remove("yourIdUser");
      Cookies.remove("sex");
    }
  };

  let element = useRoutes([
    {
      element: (
        <AppLayout
          handleTokenAndId={handleTokenAndId}
          token={token}
          id_Of_ConnectedUser={id_Of_ConnectedUser}
          adminOfConnectedUser={adminOfConnectedUser}
        />
      ),
      children: [
        //////////////////////////////////////////////////////////
        //////////////////////// USER SIDE ///////////////////////
        //////////////////////////////////////////////////////////
        // { path: "/", element: <Home /> },
        { path: "/", element: <ListMovies /> },
        { path: "movies/:id", element: <Movie token={token} /> },
        { path: "liveRadio", element: <LiveRadio token={token} /> },
        // //////////////////////////////////////////////////////////
        // /////////////////// ADMINISTRATOR SIDE ///////////////////
        // //////////////////////////////////////////////////////////
        {
          path: "admin/auth/login",
          element: <Login handleTokenAndId={handleTokenAndId} />,
        },
        {
          path: "admin/auth/myProfile",
          element: (
            <MyProfile
              token={token}
              id_Of_ConnectedUser={id_Of_ConnectedUser}
              handleTokenAndId={handleTokenAndId}
            />
          ),
        },
        {
          path: "admin/administratorSide_UserLists",
          element: <AdministratorSide_UserLists token={token} />,
        },
        {
          path: "admin/auth/signup",
          element: <Signup token={token} handleTokenAndId={handleTokenAndId} />,
        },
        {
          path: "admin/auth/newMovie",
          element: <Admin_NewMovie token={token} />,
        },
        // { path: "*", element: <PageError /> },
      ],
    },
  ]);

  return element;
}
