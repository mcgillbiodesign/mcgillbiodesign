import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../img/logo.png"

const Navigation = () => (
  <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg">
    <Navbar.Brand href="/">
      <img src={logo} width="100px" alt="McGill BioDesign"/>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link className="navLink" href="/">About</Nav.Link>
        <Nav.Link href="/projects">Projects</Nav.Link>
        <Nav.Link href="/team">Team</Nav.Link>
        <Nav.Link href="/sponsors">Sponsors</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;
