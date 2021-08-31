import React from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => (
  <div className="navbar">
    <Link className="navbar_view-properties" to="/">
      View Properties
    </Link>
    <Link className="navbar_add-properties" to="/add-property">
      Add a Property
    </Link>
  </div>
);

export default NavBar;
