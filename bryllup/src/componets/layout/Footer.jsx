import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

export default function Footer() {
    return (
        <header id="footer">
            <Navbar expand="xl">
                <Container className="mobile-nav-container">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav">
                    <i className="fa-solid fa-bars" ></i>
                    </Navbar.Toggle>
                    
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="nav-container">
                        <NavLink to="/Magnus-Ine/Program" className="nav-link">
                            Program
                        </NavLink>
                        <NavLink to="/Magnus-Ine/Gjesteliste" className="nav-link">
                            Gjesteliste
                        </NavLink>
                        <NavLink to="/Magnus-Ine/Informasjon" className="nav-link">
                            Info
                        </NavLink>
                        <NavLink to="/Magnus-Ine/Ønskeliste" className="nav-link">
                            Ønskeliste
                        </NavLink>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}