import "./sass/style.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NAV from "./componets/layout/Nav.jsx";

// Pages
import Home from "./componets/pages/Home";
import Program from "./componets/pages/Program.jsx";
import Guests from "./componets/pages/Guests.jsx";
import Info from "./componets/pages/Info.jsx";
import About from "./componets/pages/About.jsx";
import Wishlist from "./componets/pages/Wishlist.jsx";

// Footer
import Footer from "./componets/layout/Footer.jsx";

function App() {
  return (
          <Router>
            <body>
              <NAV/>
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/Program' element={<Program />} />
                  <Route path='/Guests' element={<Guests />} />
                  <Route path='/Info' element={<Info />} />
                  <Route path='/About' element={<About />} />
                  <Route path='/Wishlist' element={<Wishlist />} />
                </Routes>
              <Footer />
            </body>
          </Router>
  );
}

export default App;
