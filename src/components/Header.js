import React from "react";
import "../components/style/Header.css";

function Header() {
  return (
    <div className="navBar">
      <ul className="navList">
        <a className="links" href="#">
          <li className="lists">Home</li>
        </a>
        <a className="links" href="#">
          <li className="lists">Home</li>
        </a>
        <a className="links" href="#">
          <li className="lists">Home</li>
        </a>
        <a className="links" href="#">
          <li className="lists">Home</li>
        </a>
      </ul>
    </div>
  );
}

export default Header;
