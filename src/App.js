import React from "react";
import "./style.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./nav";
import Home from "./home";
import About from "./About";
export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
