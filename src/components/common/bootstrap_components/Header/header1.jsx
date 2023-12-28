import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const withHeader = (WrappedComponent) => {
  return function ReusableHeader() {
    const navLinks = [
      { to: '/', text: 'Home' },
      { to: '/login', text: 'Login' },
      { to: '/register', text: 'Register' },
    ];

    return (
      <Navbar bg="light" position="sticky" expand="lg">
        <Container>
          <WrappedComponent navLinks={navLinks} />
        </Container>
      </Navbar>
    );
  };
};

function InnerHeader({ navLinks }) {
  return (
    <>
      <Navbar.Brand as={Link} to="/">
        <img
          alt=""
          src="/vite.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        React Components
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          {navLinks.map((link, index) => (
            <Nav.Link key={index} as={Link} to={link.to}>
              {link.text}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </>
  );
}

const BasicHeader = withHeader(InnerHeader);

export default BasicHeader;
