import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


const NavBar = () => {
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/Commercial">Commercial</Nav.Link>
                    <Nav.Link href="/Residential">Residential</Nav.Link>
                    <Nav.Link href="/Process">Process</Nav.Link>
                    <Nav.Link href="/Contact">Contact</Nav.Link>

                </Nav>
            </Navbar>
            <br />
        </div>
        
    );
};

export default NavBar;