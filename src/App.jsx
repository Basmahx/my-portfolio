import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/Landing";
import About from "./Pages/About";
import ProjectPage from "./Pages/Project";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
