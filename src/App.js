import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

import React from "react";
import Decrypt from "./Decrypt";
import Encrypt from "./Encrypt";
import Generate from "./Generate";
import Home from "./Home";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li class="center">
            <Link id="nav-link" to="/">
              Encrypt - Decrypt
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/encrypt" element={<Encrypt />} />
        <Route exact path="/decrypt" element={<Decrypt />} />
        <Route exact path="/generate" element={<Generate />} />
      </Routes>
    </Router>
  );
}

export default App;
