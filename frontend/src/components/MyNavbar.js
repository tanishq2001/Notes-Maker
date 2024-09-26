import React from 'react';
import { Navbar, Nav, Dropdown, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const MyNavbar = ({ setPage }) => {
    // const token = localStorage.getItem('tokened');

    const handleLogout = () => {
        // localStorage.removeItem('tokened'); // Clear the token
        // window.location.replace("/login"); // Uncomment to redirect to login page
    };

    const handleNavigation = (section) => {
        setPage("home");
        setTimeout(() => {
            const element = document.getElementById(section);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    return (
      <Navbar expand="lg" bg="dark" variant="dark">
        <Navbar.Brand onClick={() => setPage("profile")}>
          <h1>Notes Maker</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto">
            <Nav.Link onClick={() => handleNavigation("questionPapers")}>Question Papers</Nav.Link>
            <Nav.Link onClick={() => handleNavigation("notes")}>Notes</Nav.Link>
            <Nav.Link onClick={() => handleNavigation("feedback")}>Feedback</Nav.Link>
            <Nav.Link onClick={() => setPage("profile")}>Profile</Nav.Link>
          </Nav>
          <Dropdown align="end">
            <Dropdown.Toggle variant="link" id="dropdown-basic">
              <img src="./logo192.png" width="50px" height="auto" alt="User" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setPage("profile")}>My Profile</Dropdown.Item>
              <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Navbar>
    );
  };
  
  export default MyNavbar;