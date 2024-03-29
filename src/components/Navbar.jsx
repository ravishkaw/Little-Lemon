import { pageLinks } from "../data";
import logo from "../assets/Logo.svg";
import {Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md px-2 sticky-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto">
            {pageLinks.map((links) => {
              return (
                <Link key={links.id} to={links.href} className="nav-link">
                  {links.text}
                </Link>
              );
            })}
            <HashLink className="nav-link" smooth to="/#about">
              About
            </HashLink>
            <button className="btn login">Login</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
