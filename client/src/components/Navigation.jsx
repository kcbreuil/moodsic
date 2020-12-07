import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/" className="logo">
        MoodsicApp
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/add">Add a Song</Nav.Link>
          <Nav.Link href="/songs">Songs</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
