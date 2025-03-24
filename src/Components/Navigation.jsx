import { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger } from '@fortawesome/free-solid-svg-icons'; // Import the hamburger icon
import headerLogo from '../assets/images/mountaineer_circular_image.png';
import { navLinks } from '../constants';

const Navigation = () => {
  const [expanded, setExpanded] = useState(false); // State to control the menu toggle

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
        </Navbar.Brand>

        {/* Mobile Toggle Button with Hamburger Icon */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : true)}
        >
          <FontAwesomeIcon icon={faHamburger} className="text-white" /> {/* Hamburger Icon */}
        </Navbar.Toggle>

        {/* Navigation Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {navLinks.map((link) => (
              <Nav.Link
                key={link.label}
                href={link.href}
                className=" nav text-white fw-medium mx-3 "
                onClick={() => setExpanded(false)} // Close menu on link click
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