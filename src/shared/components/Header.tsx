import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";

export const Header = () => {
  return (
    <div className="header">
      <h1>MovieDB</h1>
      <img src={logo} alt="logo app" width={50} height={50}/>
      {/* <img src="images/logo.png" alt="logo app" /> */}
      <div>
        <input className= "search" type= "text"/>
        <input className= "submit" type= "submit"/>
      </div>
    </div>
  )
} 
