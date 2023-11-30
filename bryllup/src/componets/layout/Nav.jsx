import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import LogoWBackground from './../../assets/Logo_W_Background.png';



export default function NAV() {

  return (
    <header id="header">
      <NavLink to="/" className="brand-logo-mobile">
        <img src={LogoWBackground} alt="Logo" className="brand-logo-image" />
      </NavLink>
      <Navbar expand="lg">
        <NavLink to="/" className="brand-logo-desktop">
          <img src={LogoWBackground} alt="Logo" className="brand-logo-image" />
        </NavLink>
        <Container className="nav-container">
          
        <div className="nav-desktop">
          <div className="nav-desktop-left">
            <NavLink to="/Program" className="nav-link">
              Program
            </NavLink>
            <NavLink to="/Guests" className="nav-link">
              Gjesteliste
            </NavLink>
          </div>
          <div className="nav-desktop-right">
            <NavLink to="/Info" className="nav-link">
              Info
            </NavLink>
            <NavLink to="/Wishlist" className="nav-link">
              Ønskeliste
            </NavLink>
          </div>
          </div>
        </Container>
      </Navbar>
    </header>
  );
}
