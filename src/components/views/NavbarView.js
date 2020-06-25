import React from "react";
import { Link } from "react-router-dom";

const NavbarView = (props) => {
  let navbarLinks;
  if (props.isLoggedIn) {
    navbarLinks = (
      <li className="nav-item">
        <Link to="/profile" className="nav-link">Profile</Link>
      </li>
    );
  } else {
    navbarLinks = (
      <>
        <li className="nav-item">
          <Link to="/login" className="nav-link">Login</Link>
        </li>
        <li className="nav-item">
          <Link to="/signup" className="nav-link">Signup</Link>
        </li>
      </>
    );
  }
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary">
        <Link to="/" className="navbar-brand">
          Home
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
          <ul className="navbar-nav mr-auto">
            {navbarLinks}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavbarView;
