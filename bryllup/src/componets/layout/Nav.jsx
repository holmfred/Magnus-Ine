import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
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
          
        <div className="nav-desktop">
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
          </div>
        </Container>
      </Navbar>
    </header>
  );
}
