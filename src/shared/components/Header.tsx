import React from "react";
import { Link } from "react-router-dom";
import "../../pages/homepage/components/SearchBar";
import "./Header.css";

export const Header = () => {
  return (
    <div className="header">
      <Link className="link_logo" to={`/`}>
        <h1 className="logo">MovieDB</h1>
      </Link>
    </div>
  );
};
