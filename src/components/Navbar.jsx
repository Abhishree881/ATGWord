import React from "react";
import logo from "../assets/img/logo.svg";
import "../assets/styles/navbar.css";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  return (
    <div className="nav">
      <img src={logo} />
      <div className="search">
        <SearchIcon style={{ cursor: "pointer" }} />
        <input
          type="text"
          placeholder="Search for your favourite groups in ATG"
        />
      </div>
      <div className="login">
        Create account. <span style={{ color: "#2F6CE5" }}>It's free</span>
      </div>
    </div>
  );
};

export default Navbar;
