import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

const Home = () => <div className="p-4">Welcome to the Home Page</div>;
const About = () => <div className="p-4">Learn more About Us</div>;
const Services = () => <div className="p-4">Our Services</div>;
const Contact = () => <div className="p-4">Contact Us</div>;

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
