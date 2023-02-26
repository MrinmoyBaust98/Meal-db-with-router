import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink className="nav-link" to="/resturent">
            Resturent
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/blog">
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
