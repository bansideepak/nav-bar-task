import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-white font-bold px-2 py-1 rounded bg-blue-600"
      : "text-gray-300 px-2 py-1 hover:text-white hover:bg-blue-600 rounded";

  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-white text-lg font-bold">NEUROM</div>

        {/* Desktop view*/}

        <div className="hidden md:flex gap-4">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/services" className={navLinkClass}>
            Services
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </div>

        <button className="md:hidden text-gray-300" onClick={toggleMenu}>
          ☰
        </button>
      </div>

      {/* Toggle menu */}

      {isOpen && (
        <div className="md:hidden flex flex-col gap-2 p-4">
          <NavLink onClick={closeMenu} to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink onClick={closeMenu} to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink onClick={closeMenu} to="/services" className={navLinkClass}>
            Services
          </NavLink>
          <NavLink onClick={closeMenu} to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
