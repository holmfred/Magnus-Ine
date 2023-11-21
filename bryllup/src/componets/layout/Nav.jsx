import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Logo from './../../assets/Logo.png';


export default function NAV() {
  
  return (
    <Container>
      <NavLink to="/" className="brand-logo-mobile">
        <img src={Logo} alt="Logo" className='brand-logo-image'/>
      </NavLink>
      <NavLink to="/" className="brand-logo-desktop">
        <img src={Logo} alt="Logo" className='brand-logo-image'/>
      </NavLink>
    <Navbar collapseOnSelect expand="lg" className="navbar">
      <Container className='nav-container'>
        <Navbar.Collapse id="resposive-navbar-nav">
          <Nav className='mr-auto'>
            <div className='navbar-link-left'>
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
            <div className='navbar-link-right'>
              <NavLink eventkey="4" as={NavLink} to="/Info" className="nav-link">
                    Generell Info
              </NavLink>
              <NavLink to="/Wishlist" className="nav-link">
                    Ønskeliste
              </NavLink>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
  </Container>
  
  );
}
