import "../../css/HomePage.css";
import logo from "../../assets/Logo.png";
import { useState } from "react";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return ( 
      <div className="navbar-container">
        <div className="logo-container">
          <a href="/my_brand">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="navigation">
          <ol className={`${isActive ? "active" : ""} nav-links`}>
            <li>
              <a href="#about" className="active nav-link">
                <span className="numbering">01. </span>
                <span className="link-label">About</span>
              </a>
            </li>
            <li>
              <a href="#skills" className="active nav-link">
                <span className="numbering">02. </span>
                <span className="link-label">Skills</span>
              </a>
            </li>
            <li>
              <a href="#work" className="active nav-link">
                <span className="numbering">03. </span>
                <span className="link-label">Work</span>
              </a>
            </li>
            <li>
              <a href="#blogs" className="active nav-link">
                <span className="numbering">04. </span>
                <span className="link-label">Blogs</span>
              </a>
            </li>
            <li>
              <a href="#contact" className="active nav-link">
                <span className="numbering">05. </span>
                <span className="link-label">Contact</span>
              </a>
            </li>
            <li className="nav-btn">
              <a
                className="resume-link link-label"
                href="https://adrineuwera.github.io/Andela-Entry-Project/"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                Resume
              </a>
            </li>
            <li className="nav-btn" id="login-btn">
              <a
                className="log-btn"
                href="login.html"
                style={{
                  color: "hsl(0, 0%, 100%)",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Login
              </a>
            </li>
            <li className="nav-btn" id="logout-btn">
              <a
                className="log-btn"
                href="index.html"
                style={{
                  color: "hsl(0, 0%, 100%)",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Logout
              </a>
            </li>
          </ol>
          <div className="nav-btn" id="admin-dropdown-btn">
            <a className="admin-user-icon" href="index.html">
              <i className="fa-solid fa-circle-user"></i>
            </a>
          </div>
        </div>
        <div
          className={isActive ? "is-active" : ""}
          id="mobile_menu"
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className="admin-menu">
          <a
            className="dashboard-link"
            href="admin-dashboard.html"
            style={{ color: "hsla(0, 0%, 100%, 70%)", textDecoration: "none" }}
          >
            Dashboard
          </a>
          <a
            className="log-btn"
            id="ad-logout-btn"
            href="index.html"
            style={{ color: "hsl(0, 0%, 100%)", textDecoration: "none" }}
          >
            Logout
          </a>
        </div>
      </div> 
  );
};

export default Navbar;
