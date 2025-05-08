import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./main/Home";
import About from "./Pages/About";
import ProjectPage from "./Pages/Project";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./Pages/Error";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
