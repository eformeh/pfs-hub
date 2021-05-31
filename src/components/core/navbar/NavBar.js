import { faSuperpowers } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import { Button, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../../assets/theHubLogo.svg';
export default function NavBar() {
    return (
        <div>

            <Navbar fixed="top" collapseOnSelect expand="lg" bg="light" variant="light" >
                <Navbar.Brand href="#home"><img src={logo} logo width="65px" height="65px" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Talent</Nav.Link>
                        <Nav.Link href="/Employers">Employers</Nav.Link>
                        <NavDropdown title="About Us" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#BoardMembers">Board Members</NavDropdown.Item>
                            <NavDropdown.Item href="#ExecutiveTeam">Executive Team</NavDropdown.Item>
                            <NavDropdown.Item href="#ourPartners">Our Partners</NavDropdown.Item>
                            <NavDropdown.Item href="#ourClients">Our Clients</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#testimonials">Testimonials</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Link href="#login">login</Nav.Link>
                        <Nav.Link href="#register"><Button className="btn-sm" bg="dark" variant="outline-dark">Register</Button></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div >
    )
}

