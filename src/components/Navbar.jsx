import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-light navbar-expand-lg">
      {/* link instead of anchor tag */}
      <Link to="/" className="navbar-brand">
        <i className="fas fa-fire"></i> ExcersizeTracker
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Exersize Log
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/create" className="nav-link">
              Create Exersize Log
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/user" className="nav-link">
              Create User
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
