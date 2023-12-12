import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to className="navbar-brand">
          Contacts
        </Link>

        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="favourites" className="nav-link">
              Favorites
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
