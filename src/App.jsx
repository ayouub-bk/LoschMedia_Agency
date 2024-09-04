import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomeScreen, About, Testimonials, Pricing, Contact } from "./pages";
import "./index.css";
import Topbar from "./Components/sections/Topbar";
import Footer from "./Components/sections/Footer";

const App = () => {
  return (
    <>
      <Topbar />
      <Routes>
        {/* <Topbar /> */}
        <Route path="/" element={<HomeScreen />} />
        <Route path="/About" element={<About />} />
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Pricing" element={<Pricing />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
