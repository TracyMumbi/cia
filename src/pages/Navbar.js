import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <NavLink to="/">
        {/* <img src="logo192.png" alt="Home" /> */}
        Home
      </NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/missions">Missions</NavLink>
      <NavLink to="/login">Login</NavLink>
    </div>
  );
}

export default Navbar;
