import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/NavBar";

import Footer from "./components/Footer";

import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  // Create an array of Route components using the map function


  return (
    <div className="position-relative">
      <Router basename="/">
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
