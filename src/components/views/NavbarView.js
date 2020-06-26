import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css"

const NavbarView = (props) => {
  // declares a state variable called buttonToggled with initial state false
  // setToggled will be used to update this variable
  const [buttonToggled, setToggled] = useState(false);

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

  // console.log("toggled: ", buttonToggled);

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
    <div className={buttonToggled ? "navbar-main-container-toggled" : "navbar-main-container"}>
      <nav className="navbar navbar-dark bg-primary">
        <div className="navbar-title-current-path">
          <h2>{navbar_title}</h2>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          // when button is clicked, set state to opposite of what it is now
          onClick={() => setToggled(!buttonToggled)}
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
