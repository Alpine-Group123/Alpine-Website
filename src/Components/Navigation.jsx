import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

const Navigation = () => {
  return (
    <header className="pb-5 ff-secondary">
      <nav className="fs-6 fw-light navbar navbar-expand-sm p-4 ps-5 mb-5 fixed-top">
        <FontAwesomeIcon
          icon={faBars}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
          style={{ color: "#fff" }}
        />

        <div
          className="collapse navbar-collapse"
          id="collapsibleNavbar text-white"
        >
          <ul
            className="bg-color-dark navbar-nav ms-auto pe-4 ps-4 rounded"
            id="ul"
          >
            <li className="nav-item pe-3">
              <Link
                className="d-inline-block position-relative nav-link nav-toggler"
                role="button"
                to="home"
                smooth={true}
                duration={900}
              >
                HOME
              </Link>
            </li>
            <li className="nav-item pe-3">
              <Link
                className="d-inline-block position-relative nav-link nav-toggler"
                role="button"
                to="about"
              >
                PAGES
              </Link>
            </li>
            <li className="nav-item pe-3">
              <Link
                className="d-inline-block position-relative nav-link nav-toggler"
                to="portfolio"
                smooth={true}
                duration={900}
              >
                TREKS
              </Link>
            </li>

            <li className="nav-item pe-3">
              <Link
                className="d-inline-block position-relative nav-link nav-toggler"
                to="career"
                smooth={true}
                duration={900}
              >
                CONTACT US
              </Link>
            </li>
            <li className="nav-item pe-3">
              <Link
                className="nav-toggler d-inline-block position-relative"
                to="https://resume.io/r/dj6p5YMIv"
                target="_blank"
                rel="noopener noreferrer"
                smooth={true}
                duration={900}
              ></Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
