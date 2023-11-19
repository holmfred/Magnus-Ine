import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Logo from './../../assets/Logo.png';


export default function NAV() {
  
  return (
    <header id="header">
      <NavLink to="/" className="brand-logo-mobile">
        <img src={Logo} alt="Logo" className='brand-logo-image'/>
      </NavLink>
      <NavLink to="/" className="brand-logo-desktop">
        <img src={Logo} alt="Logo" className='brand-logo-image'/>
      </NavLink>
      <Container className='nav-container'>
        <Navbar.Collapse id="resposive-navbar-nav">
          <Nav>
            <NavLink to="/Program" className="nav-link">
                  Program
            </NavLink>
            <NavLink to="/Guests" className="nav-link">
                  Gjesteliste
            </NavLink>
            <NavLink to="/Info" className="nav-link">
                  Generell Info
            </NavLink>
            <NavLink to="/About" className="nav-link">
                  Om Oss
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </header>
  );
}
