import { useState } from "react";
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
        <a className="navbar-brand" href="index.html">
          <img src={Logo} alt="Solanki" style={{ width: "5em" }} />
        </a>
        <div className="social-media order-lg-last">
          <p className="mb-0 d-flex">
            <a
              href="#"
              className="d-flex align-items-center justify-content-center"
            >
              <span className="fa fa-facebook">
                <i className="sr-only">Facebook</i>
              </span>
            </a>
            <a
              href="#"
              className="d-flex align-items-center justify-content-center"
            >
              <span className="fa fa-twitter">
                <i className="sr-only">Twitter</i>
              </span>
            </a>
            <a
              href="#"
              className="d-flex align-items-center justify-content-center"
            >
              <span className="fa fa-instagram">
                <i className="sr-only">Instagram</i>
              </span>
            </a>
            <a
              href="#"
              className="d-flex align-items-center justify-content-center"
            >
              <span className="fa fa-dribbble">
                <i className="sr-only">Dribbble</i>
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
              <a href="#" className="nav-link">
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
