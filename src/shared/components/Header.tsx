import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
        <div className="header">
          <Link className="link_logo" to={`/`}>
            <h1 className="logo">MovieDB</h1>
          </Link>
            <div>
              <input className= "search" type= "text" placeholder= "Type a movie title"/>
              <input className= "submit" type= "submit" value= "search"/>
            </div>
        </div>
  )
} 
