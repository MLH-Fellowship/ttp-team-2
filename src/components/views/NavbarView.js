import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavbarView = (props) => {
  let testPath = useLocation().pathname;
  let currentPath;

  // On the home page, the path will just be /
  // To make sure we display a header for the page
  // We need to check the length of the string retrieved through useLocation.pathname
  // When we are on home route, the length of the string is just 1
  // When we are on any other route, the length will be greater than 1
  if (testPath.length != 1) {
    currentPath = testPath;
  } else {
    currentPath = "/home";
  }

  console.log("current path: ", currentPath);

  // now take string and cut away the '/' character
  let trimmedPath = currentPath.substring(1);

  // uppercase all letters in the string
  let navbar_title = trimmedPath.toUpperCase();

  // navbarLinks will allow us to change the display based on if user
  // is logged in or not
  let navbarLinks;

  if (props.isLoggedIn) {
    navbarLinks = (
      <>
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/profile" className="nav-link">
            Profile
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link" onClick={props.handleLogout}>
            Logout
          </Link>
        </li>
      </>
    );
  } else {
    navbarLinks = (
      <>
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/signup" className="nav-link">
            Signup
          </Link>
        </li>
      </>
    );
  }
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary">
        {/* <Link to={currentPath} className="navbar-brand">
          {navbar_title}
        </Link> */}
        {navbar_title}
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
          <ul className="navbar-nav mr-auto">{navbarLinks}</ul>
        </div>
      </nav>
    </div>
  );
};

export default NavbarView;
