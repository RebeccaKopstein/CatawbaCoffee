import React from "react";
import { Link } from "react-router-dom";

const NavTabs = () => (
  <div id ="top">
  {/* <nav class="navbar navbar-expand-sm navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button> */}
<div id="test">
  <ul className="nav nav-tabs ">
    <li className="nav-item">
      <Link
        to="/"
        className={
          window.location.pathname === "/" ? "nav-link active" : "nav-link"
        }
      >
        Home
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/about"
        className={
          window.location.pathname === "/about" ? "nav-link active" : "nav-link"
        }
      >
        About
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/gallery"
        className={
          window.location.pathname === "/gallery" ? "nav-link active" : "nav-link"
        }
      >
        Gallery
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/contact"
        className={
          window.location.pathname === "/contact"
            ? "nav-link active"
            : "nav-link"
        }
      >
        Contact
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/menu"
        className={
          window.location.pathname === "/menu" ? "nav-link active" : "nav-link"
        }
      >
        Menu
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/events"
        className={
          window.location.pathname === "/events"
            ? "nav-link active"
            : "nav-link"
        }
      >
        Events
      </Link>
    </li>
  </ul>

</div>
{/* </nav> */}
</div>

);

export default NavTabs;
