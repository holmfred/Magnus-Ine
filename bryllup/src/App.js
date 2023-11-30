import "./sass/style.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NAV from "./componets/layout/Nav.jsx";

// Pages
import Home from "./componets/pages/Home";
import Program from "./componets/pages/Program.jsx";
import Guests from "./componets/pages/Guests.jsx";
import Info from "./componets/pages/Info.jsx";
import Wishlist from "./componets/pages/Wishlist.jsx";

// Footer
import Footer from "./componets/layout/Footer.jsx";

function App() {
  return (
          <Router>
            <body>
              <NAV/>
                <main>
                  <Routes>
                    <Route path='/Magnus-Ine' element={<Home />} />
                    <Route path='/Program' element={<Program />} />
                    <Route path='/Gjesteliste' element={<Guests />} />
                    <Route path='/Informasjon' element={<Info />} />
                    <Route path='/Ønskeliste' element={<Wishlist />} />
                  </Routes>
                </main>
              <Footer />
            </body>
          </Router>
  );
}

export default App;
