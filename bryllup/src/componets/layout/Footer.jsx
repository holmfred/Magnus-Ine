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
                        <NavLink to="/" className="nav-link">
                            Forside
                        </NavLink>
                        <NavLink to="/Program" className="nav-link">
                            Program
                        </NavLink>
                        <NavLink to="/Guests" className="nav-link">
                            Gjesteliste
                        </NavLink>
                        <NavLink to="/Info" className="nav-link">
                            Generell Info
                        </NavLink>
                        <NavLink to="/Wishlist" className="nav-link">
                            Ønskeliste
                        </NavLink>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}