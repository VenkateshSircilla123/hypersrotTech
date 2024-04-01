import React from "react";
import "./navbar.css";
import { FaUserAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navContainer">
      <h1 style={{ marginLeft: "20px" }}>Task Board</h1>
      <FaUserAlt size={25} style={{ marginRight: "30px" }} />
    </div>
  );
};

export default Navbar;
