import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {

  return (
    <header className="pb-5 ff-secondary">
      <nav className="fs-5 fw-light navbar navbar-expand-sm p-4 ps-5 mb-5 fixed-top">
        <FontAwesomeIcon
          icon={faBars}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
          style={{ color: "#fff" }}
        />

        <div className="collapse navbar-collapse" id="collapsibleNavbar text-white">
          <ul
            className="bg-color-dark navbar-nav ms-auto pe-4 ps-4 rounded"
            id="ul"
          >
            <li className="nav-item pe-3">
              <a
                className="d-inline-block position-relative nav-link nav-toggler"
                role="button"
                href="#about"
              >
                HOME
              </a>
            </li>
            <li className="nav-item pe-3">
              <a
                className="d-inline-block position-relative nav-link nav-toggler"
                role="button"
                href="#skills"
              >
               PAGES
              </a>
            </li>
            <li className="nav-item pe-3">
              <a
                className="d-inline-block position-relative nav-link nav-toggler"
                href="#portfolio"
              >
               TREKS
              </a>
            </li>
            
            <li className="nav-item pe-3">
              <a
                className="d-inline-block position-relative nav-link nav-toggler"
                href="#career"
              >
               CONTACT US
              </a>
            </li>
            <li className="nav-item pe-3">
              <a
                className="nav-toggler d-inline-block position-relative"
                href="https://resume.io/r/dj6p5YMIv"
                target="_blank"
                rel="noopener noreferrer"
              >
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;