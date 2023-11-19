import "./sass/style.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NAV from "./componets/layout/Nav.jsx";

// Pages
import Home from "./componets/pages/Home";
import Program from "./componets/pages/Program.jsx";
import Guests from "./componets/pages/Gjesteliste.jsx";
import Info from "./componets/pages/Generell Info.jsx";
import About from "./componets/pages/Om Oss.jsx";

// Footer
import Footer from "./componets/layout/Footer.jsx";

function App() {
  return (
          <Router>
            <NAV/>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Program' element={<Program />} />
                <Route path='/Guests' element={<Guests />} />
                <Route path='/Info' element={<Info />} />
                <Route path='/About' element={<About />} />
              </Routes>
            <Footer />
          </Router>
  );
}

export default App;
