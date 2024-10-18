import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import SocialMedia from "./components/SocialMedia";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/socialmedia" element={<SocialMedia />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
