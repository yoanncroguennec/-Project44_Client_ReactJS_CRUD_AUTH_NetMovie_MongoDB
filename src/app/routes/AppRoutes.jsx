import { useState } from "react";
import { useRoutes } from "react-router-dom";
import Cookies from "js-cookie";
// PAGES
import {
  ListMovieByCategory,
  ListMovies,
  Movie,
  Login,
} from "../pages";
// Layouts
import { AppLayout } from "../components/layouts";


export default function Router() {
  ///////// COOKIES
  const [token, setToken] = useState(Cookies.get("token") || null);
  const [id_Of_ConnectedUser, setId_Of_ConnectedUser] = useState(
    Cookies.get("yourIdUser") || null
  );
  // Cette fonction permet de stocker le token dans le state et dans les cookies ou supprimer le token dans le state et dans les cookies
  const handleTokenAndId = (token, id) => {
    if (token && id) {
      setToken(token);
      setId_Of_ConnectedUser(id);
      // setAdminOfConnectedUser(admin);
      Cookies.set("token", token, { expires: 14 });
      Cookies.set("yourIdUser", id, { expires: 14 });
      // Cookies.set("admin", admin, { expires: 14 });
    } else {
      setToken(null);
      setId_Of_ConnectedUser(null);
      // setAdminOfConnectedUser(null);
      Cookies.remove("token");
      Cookies.remove("yourIdUser");
      // Cookies.remove("sex");
    }
  };

  ///////// ROUTES
  let element = useRoutes([
    {
      element: (
        <AppLayout
          handleTokenAndId={handleTokenAndId}
          token={token}
          id_Of_ConnectedUser={id_Of_ConnectedUser}
        />
      ),
      children: [
        //////////////////////////////////////////////////////////
        ////////////////////////// USER //////////////////////////
        //////////////////////////////////////////////////////////

        ///////// HOME
        // { path: "/", element: <Home /> },
        ///////// MOVIES
        { path: "/", element: <ListMovies /> },
        {
          path: "movies/:id",
          element: (
            <Movie token={token} id_Of_ConnectedUser={id_Of_ConnectedUser} />
          ),
        },
        {
          path: "movies/listMovieByCategory",
          element: <ListMovieByCategory />,
        },
        // ///////// AUTH
        {
          path: "auth/login",
          element: <Login handleTokenAndId={handleTokenAndId} />,
        },
        // {
        //   path: "auth/myProfile",
        //   element: (
        //     <MyProfile
        //       token={token}
        //       id_Of_ConnectedUser={id_Of_ConnectedUser}
        //       handleTokenAndId={handleTokenAndId}
        //     />
        //   ),
        // },
        // ///////// RADIO / MUSICS
        // { path: "liveRadio", element: <LiveRadio token={token} /> },
        // ///////// WEATHER

        // //////////////////////////////////////////////////////////
        // ///////////////////// ADMINISTRATOR //////////////////////
        // //////////////////////////////////////////////////////////

        // ///////// ADMIN USERS LIST + SIGNIN
        // {
        //   path: "admin/administratorSide_UserLists",
        //   element: <AdministratorSide_UserLists token={token} />,
        // },
        // {
        //   path: "admin/auth/signup",
        //   element: <Signup token={token} handleTokenAndId={handleTokenAndId} />,
        // },
        // ///////// LIST MOVIES + CRUD MOVIES
        // {
        //   path: "admin/administratorListmovie",
        //   element: <Admin_ListMovie token={token} />,
        // },
        // {
        //   path: "admin/auth/newMovie",
        //   element: <Admin_NewMovie token={token} />,
        // },
        // ///////// CATEGORY LIST MOVIES + CRUD CATEGORY LIST MOVIES
        // {
        //   path: "admin/admin_CategoryListMovie",
        //   element: <Admin_CategoryListMovie token={token} />,
        // },
        // {
        //   path: "admin/admin_NewCategoryListMovie",
        //   element: <Admin_NewCategoryListMovie token={token} />,
        // },

        //////////////////////////////////////////////////////////
        ////////////////////// UTILS PAGES ///////////////////////
        //////////////////////////////////////////////////////////

        ///////// PAGE ERROR + PAGE UNDER CONSTRUCTION
        // { path: "*", element: <PageError /> },
      ],
    },
  ]);

  return element;
}
