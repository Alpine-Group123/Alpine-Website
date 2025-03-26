import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger } from "@fortawesome/free-solid-svg-icons"; // Import the hamburger icon
import headerLogo from "../assets/images/mountaineer_circular_image.png";
import { navLinks } from "../constants";

const Navigation = () => {
  const [expanded, setExpanded] = useState(false); // State to control the menu toggle
  const [visitorCount, setVisitorCount] = useState(0);
  const [activeLink, setActiveLink] = useState("");

  const handleSetActive = (label) => setActiveLink(label);

  // Function to track visitor count
  useEffect(() => {
    let count = localStorage.getItem("visitorCount");
    count = count ? parseInt(count) + 1 : 1;
    localStorage.setItem("visitorCount", count);
    setVisitorCount(count);
  }, []);

  return (
    <Navbar
      expand="lg"
      bg="dark"
      fixed="top"
      className="shadow-sm py-2"
      expanded={expanded}
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand href="/" className="head">
          <img
            src={headerLogo}
            alt="Logo"
            width={50}
            height={47}
            style={{ borderRadius: "50%" }} // Circular logo
          />
          <h2>Alpine Ascents</h2>

          <div className="pt-2 h6 font-bold">Visitors: {visitorCount}</div>
        </Navbar.Brand>

        {/* Mobile Toggle Button with Hamburger Icon */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : true)}
        >
          <FontAwesomeIcon icon={faHamburger} className="text-white" />{" "}
          {/* Hamburger Icon */}
        </Navbar.Toggle>

        {/* Navigation Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {navLinks.map((link) => (
              <Nav.Link
                key={link.label}
                href={link.href}
                className={`nav text-white fw-medium mx-3 ${
                  activeLink === link.label ? "active" : ""
                }`}
                onClick={() => handleSetActive(link.label)}
              >
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
