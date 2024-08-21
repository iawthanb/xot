import '../../styles/App.scss';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/xot-logo.png';

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  // To avoid verbose, I decided to create this array and map each path down in {NavLink}.
  const links = [
    { page: '/', label: 'Home' },
    { page: '/timer', label: 'Timer' },
    { page: '/categories', label: 'Categories' },
    { page: '/saved', label: 'Saved' },
  ];

  const handleNavLinkClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" expanded={expanded} onToggle={setExpanded}>
      <Container>
        <Navbar.Brand as={NavLink} to="/" onClick={handleNavLinkClick}>
          <img src={logo} alt="XOT Logo" style={{ height: '80px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {links.map((link) => (
              <Nav.Item key={link.page}>
                <NavLink to={link.page} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={handleNavLinkClick}>
                  {link.label}
                </NavLink>
              </Nav.Item>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
