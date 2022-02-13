import { Route, Routes, useLocation } from "react-router-dom";
import WorldHeritageSite from "./components/WorldHeritageSite/WorldHeritageSite";
import WorldHeritageSites from "./components/WorldHeritageSites/WorldHeritageSites";
import "./app.css";
import { AnimatePresence } from "framer-motion";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Services } from "./components/pages/Services";

function App() {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<WorldHeritageSites />} />
          <Route path="/site/:id" element={<WorldHeritageSite />} />
          <Route path="/site/data" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
