import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import { BoxAdminOutlet, RootAdminOutlet } from "./StylesAdminLayout";
export default function AdminLayout({
  handleTokenAndId,
  token,
  id_Of_ConnectedUser,
}) {
  return (
    <div>
      NAVBAR
      <br />
      {id_Of_ConnectedUser}
      {/* <Navbar
        id_Of_ConnectedUser={id_Of_ConnectedUser}
        token={token}
        handleTokenAndId={handleTokenAndId}
      /> */}
      <RootAdminOutlet>
        <BoxAdminOutlet>
            <Outlet context={[]} />
        </BoxAdminOutlet>
      </RootAdminOutlet>
    </div>
  );
}
