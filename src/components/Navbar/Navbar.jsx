import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navComp">
      <NavLink
        to="/"
        style={({ isActive }) => {
          return {
            color: isActive ? "aqua" : "white",
            textDecoration: "none",
            fontWeight: "bold",
          };
        }}
      >
        HOME
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => {
          return {
            color: isActive ? "aqua" : "white",
            textDecoration: "none",
            fontWeight: "bold",
          };
        }}
      >
        ABOUT ME
      </NavLink>
      <NavLink
        to="projects"
        style={({ isActive }) => {
          return {
            color: isActive ? "aqua" : "white",
            textDecoration: "none",
            fontWeight: "bold",
          };
        }}
      >
        MY PROJECTS
      </NavLink>
      <NavLink
        to="/contact"
        style={({ isActive }) => {
          return {
            color: isActive ? "aqua" : "white",
            textDecoration: "none",
            fontWeight: "bold",
          };
        }}
      >
        CONTACT{" "}
      </NavLink>
    </div>
  );
};

export default Navbar;
