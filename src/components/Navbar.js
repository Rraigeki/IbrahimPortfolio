import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";
import { Link as ScrollLink } from "react-scroll"; // Import react-scroll Link

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const navigate = useNavigate(); // Use navigate from react-router-dom

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  // Function to handle navigation and scrolling to a section
  const handleNavClick = (sectionId) => {
    navigate("/"); // Navigate to home first
    setTimeout(() => {
      document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    }, 100); // Timeout ensures the navigation happens first
    updateExpanded(false); // Close navbar after click
  };

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <span
                className="nav-link"
                style={{ cursor: "pointer" }}
                onClick={() => handleNavClick("home")}
              >
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </span>
            </Nav.Item>

            <Nav.Item>
              <span
                className="nav-link"
                style={{ cursor: "pointer" }}
                onClick={() => handleNavClick("about")}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </span>
            </Nav.Item>

            <Nav.Item>
              <span
                className="nav-link"
                style={{ cursor: "pointer" }}
                onClick={() => handleNavClick("projects")}
              >
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} />{" "}
                Projects
              </span>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/Rraigeki?tab=repositories"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
