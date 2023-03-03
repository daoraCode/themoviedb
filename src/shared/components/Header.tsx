import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";

export const Header = () => {
  return (
    <div className="header">
      <h1>MovieDB</h1>
      <div>
        <input className= "search" type= "text" placeholder= "Type a movie title"/>
        <input className= "submit" type= "submit" value= "search"/>
      </div>
    </div>
  )
} 
