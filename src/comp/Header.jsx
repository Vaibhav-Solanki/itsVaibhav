import { useState } from "react";
import { FaLinkedinIn, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import Logo from "../logo.png";
import "./Header.css";
function Header() {
  const [first, setfirst] = useState(false);
  function menuShrink() {
    setfirst((pre) => !pre);
  }
  return (
    <nav
      className="navbar navbar-expand-lg ftco_navbar ftco-navbar-light blr"
      id="ftco-navbar"
    >
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={Logo} alt="Solanki" width="100px" />
        </a>
        <div className="social-media order-lg-last">
          <p className="mb-0 d-flex">
            <a
              href="https://www.linkedin.com/in/vaibhav-s-solanki/"
              target="_blank"
              rel="noreferrer"
              className="d-flex align-items-center justify-content-center"
            >
              <span>
                <FaLinkedinIn />
              </span>
            </a>
            <a
              href="https://github.com/Vaibhav-Solanki"
              target="_blank"
              rel="noreferrer"
              className="d-flex align-items-center justify-content-center"
            >
              <span>
                <FaGithub />
              </span>
            </a>
            <a
              href="https://www.instagram.com/inco.solanki/"
              target="_blank"
              rel="noreferrer"
              className="d-flex align-items-center justify-content-center"
            >
              <span>
                <FaInstagram />
              </span>
            </a>
            <a
              href="https://twitter.com/VaibhavSolankie"
              target="_blank"
              rel="noreferrer"
              className="d-flex align-items-center justify-content-center"
            >
              <span>
                <FaTwitter />
              </span>
            </a>
          </p>
        </div>
        <button className="navbar-toggler" type="button" onClick={menuShrink}>
          <span className="fa fa-bars"></span> Menu
        </button>
        <div
          className={"collapse navbar-collapse " + (first ? "show" : "")}
          id="ftco-nav"
        >
          <ul className="navbar-nav ml-auto mr-md-3">
            <li className="nav-item active">
              <a href="#home" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#stack" className="nav-link">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a href="#project" className="nav-link">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
