import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import {
  Navbar,
  Nav,
  Container
} from "react-bootstrap";

const Navibar = () => {



  return (
    <div className="Navibar">
      <Navbar collapseOnSelect expand="xxl" bg="" variant="dark">
        <Container className="d-flex justify-content-center">
          <Navbar.Brand 
          as={Link}
          to="/"
          // onClick={() => updateExpanded(false)}
          href="#home"><img className="Navibar--logo" src="images/nav_logo.webp" alt="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav nav-fill">
            <Nav className="me-auto">
              <Nav.Link
                as={Link}
                to="/issue"
                // onClick={() => updateExpanded(false)}
                className="Navi--txt font-16 text-white font-sans px-4 mx-auto" href="#">
                ISSUE #1
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/meetpunk"
                // onClick={() => updateExpanded(false)}
                className="Navi--txt font-16 text-white font-sans px-4 mx-auto" href="#">
                MEET THE PUNKS
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/faqs"
                // onClick={() => updateExpanded(false)}
                className="Navi--txt font-16 text-white font-sans px-4 mx-auto" href="#">
                FAQS
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/about"
                // onClick={() => updateExpanded(false)}
                className="Navi--txt font-16 text-white font-sans px-4 mx-auto" href="#">
                ABOUT
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link className="mx-auto" href="#"><button className="pinkbtn font-16">STAKE</button></Nav.Link>
              <Nav.Link className="mx-auto" href="#"><button className="pinkbtn font-16">METAHERO IDENTITIES</button></Nav.Link>
              <Nav.Link className="mx-auto" href="#"><button className="pinkbtn font-16">METAHERO IDENTITIES</button></Nav.Link>
            </Nav>
            <Nav className="flex-row d-flex justify-content-center">
              <Nav.Link href="#"><img className="icon" src="images/twitter.webp" alt="" /></Nav.Link>
              <Nav.Link href="#"><img className="icon" src="images/discord.webp" alt="" /></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div >
  );
};
export default Navibar;