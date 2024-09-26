import React from 'react';
import { Nav, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Navbar = ({ setPage }) => {
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
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Nav className="me-auto mb-2 mb-lg-0">
                    <Nav.Link className="text-white" onClick={() => setPage("profile")}>
                        <h1 className="navbar-brand">Notes Maker</h1>
                    </Nav.Link>
                </Nav>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <Nav className="me-auto mb-2 mb-lg-0">
                        <Nav.Link className="text-white" onClick={() => handleNavigation("questionPapers")}>Question Papers</Nav.Link>
                        <Nav.Link className="text-white" onClick={() => handleNavigation("notes")}>Notes</Nav.Link>
                        <Nav.Link className="text-white" onClick={() => handleNavigation("feedback")}>Feedback</Nav.Link>
                        <Nav.Link className="text-white" onClick={() => setPage("profile")}>Profile</Nav.Link>
                    </Nav>
                    <Dropdown align="end">
                        <Dropdown.Toggle variant="link" id="dropdown-basic">
                            <img src="./logo192.png" width="50px" height="auto" className="img-fluid" alt="User" />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => setPage("profile")}>My Profile</Dropdown.Item>
                            <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
