import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="light" expand="md">
      <Navbar.Brand href="#home">睡吧婷婷</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#about">關於我們</Nav.Link>
          <Nav.Link href="#services">如何運作</Nav.Link>
          <Nav.Link href="#contact">上傳您的聲音</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;