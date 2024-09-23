import React from 'react';
import { Button } from 'react-bootstrap';

const Navbar = ({ setPage }) => {
    const token = localStorage.getItem('tokened');

    if (token === null) {
        window.location.replace("/login");
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <h2>Notes Maker</h2>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {/* Using Button with onClick to setPage */}
                            <Button variant="primary" onClick={() => setPage("home")}>Home</Button>
                        </li>
                        <li className="nav-item">
                            <Button variant="secondary" onClick={() => setPage("question-papers")}>Question Papers</Button>
                        </li>
                        <li className="nav-item">
                            <Button variant="secondary" onClick={() => setPage("notes")}>Notes</Button>
                        </li>
                        <li className="nav-item">
                            <Button variant="secondary" onClick={() => setPage("feedback")}>Feedback</Button>
                        </li>
                    </ul>
                    <div className="dropdown">
                        <a className="btn btn-default dropdown-toggle" role="button" id="menu1" data-toggle="dropdown" aria-expanded="false">
                            <img src="/assets/user.png" width="50px" height="auto" className="img-fluid" alt="User" />
                        </a>
                        <ul className="dropdown-menu text-align-left" aria-labelledby="navbarDropdownMenuLink">
                            <li><a className="dropdown-item" href="/profile">My Profile</a></li>
                            <li><button className="dropdown-item" onClick={() => {
                                localStorage.removeItem('tokened');
                                window.location.replace("/login");
                            }}>Logout</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
