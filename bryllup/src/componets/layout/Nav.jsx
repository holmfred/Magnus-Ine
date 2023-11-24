import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from './../../assets/Logo.png';



export default function NAV() {

  return (
    <header id="header">
      <NavLink to="/" className="brand-logo-mobile">
        <img src={Logo} alt="Logo" className="brand-logo-image" />
      </NavLink>
      <Navbar expand="lg">
        <NavLink to="/" className="brand-logo-desktop">
          <img src={Logo} alt="Logo" className="brand-logo-image" />
        </NavLink>
        <Container className="nav-container">

          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="hamburger">
            <i className="fa-solid fa-bars" ></i>
          </Navbar.Toggle>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="nav-container">
              <div className="nav-container-left"> 
                <NavLink to="/" className="nav-link">
                  Forside
                </NavLink>
                <NavLink to="/Program" className="nav-link">
                  Program
                </NavLink>
                <NavLink to="/Guests" className="nav-link">
                  Gjesteliste
                </NavLink>
              </div>
              <div className="nav-container-right">
                <NavLink to="/Info" className="nav-link">
                  Generell Info
                </NavLink>
                <NavLink to="/Wishlist" className="nav-link">
                  Ønskeliste
                </NavLink>
                <NavLink to="/" className="nav-link hidden">
                  Hidden
                </NavLink>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
