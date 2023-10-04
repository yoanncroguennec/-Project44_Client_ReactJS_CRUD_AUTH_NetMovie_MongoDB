import React, { useState } from "react";

export default function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li
      style={{
        width: "calc(60px * 0.8)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <a href='#' className='icon-button' onClick={() => setOpen(!open)}>
        {/* Icons Menu Dropdown partie non déroulant */}
        {props.icon}
      </a>
      {console.log(open)}
      {/* Ouverture enfants dopdown */}
      {open && props.children}
    </li>
  );
}
