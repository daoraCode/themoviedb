import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <div className="header">
      <h1>MovieDB</h1>
      {/* <img src="images/logo.png" alt="logo app" /> */}
      <div>
        <input className= "search" type= "text"/>
        <input className= "submit" type= "submit"/>
      </div>
    </div>
  )
} 
