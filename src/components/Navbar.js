import React from "react";
import { Link } from "react-router-dom";

import './Navbar.css';

function Navbar() {
  return (
    <nav className="nav-bar">
      <div className="nav-cont">
        <div className="nav-title">
          <h3>smart-retail</h3>
        </div>

        <div className="nav-list">
          <Link className="nav-link" to={"/Home"}>
            Home
          </Link>
          <Link className="nav-link" to={"/About"}>
            solution-1
          </Link>
          <Link className="nav-link" to={"/Skills"}>
            solution-2
          </Link>
          <Link className="nav-link" to={"/Contact"}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
