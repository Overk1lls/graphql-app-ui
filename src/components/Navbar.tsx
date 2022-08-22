import React from 'react';
import { NavLink } from 'react-router-dom';
import { RouteNames } from './AppRouter';

const Navbar = () => {
  return (
    <header className="fixed-top">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar-nav"
            aria-controls="navbar-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar-nav">
            <ul className="navbar-nav mr-auto mb-3 mb-lg-0">
              <li className="navbar-brand">SSU E-Olymp Students</li>
              <li className="nav-item">
                <NavLink className="nav-link" to={RouteNames.Home}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={RouteNames.AboutUs}>
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href={'http://www.e-olymp.com/uk'}
                  target="_blank"
                  rel="noreferrer"
                >
                  E-Olymp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
