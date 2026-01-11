import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "/src/assets/kplogo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-gray-800 w-full sticky top-0 z-50">
        <nav className="flex justify-between items-center sm:p-3 p-3">
          
          {/* Logo */}
          <div className="flex items-center pl-5 gap-2 sm:pl-2">
            <img
              className="w-6 sm:w-8 rounded-full"
              src={logo}
              alt="logo"
            />
            <h3 className="text-2xl font-bold text-orange-500">
              KishorPawar
            </h3>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex text-orange-500 font-medium md:gap-10 gap-6 pr-5">
            <a className="pb-2 hover:border-b-2 hover:border-orange-500 transition-all duration-300" href="#home">Home</a>
            <a className="pb-2 hover:border-b-2 hover:border-orange-500 transition-all duration-300" href="#aboutme">About Me</a>
            <a className="pb-2 hover:border-b-2 hover:border-orange-500 transition-all duration-300" href="#skills">Skills</a>
            <a className="pb-2 hover:border-b-2 hover:border-orange-500 transition-all duration-300" href="#projects">Projects</a>
            <a className="pb-2 hover:border-b-2 hover:border-orange-500 transition-all duration-300" href="#contact">Contact Me</a>
          </div>

          {/* Hamburger Button */}
          <button
            className="p-2 sm:hidden text-orange-500 text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="sm:hidden bg-gray-900 text-orange-500 flex flex-col h-fit top-14 fixed inset-0 items-center gap-6 py-6 font-medium">
            <a onClick={() => setMenuOpen(false)} className="pb-2 hover:border-b-2 hover:border-orange-500 transition-all duration-300" href="#home">Home</a>
            <a onClick={() => setMenuOpen(false)} className="pb-2 hover:border-b-2 hover:border-orange-500 transition-all duration-300" href="#aboutme">About Me</a>
            <a onClick={() => setMenuOpen(false)} className="pb-2 hover:border-b-2 hover:border-orange-500 transition-all duration-300" href="#skills">Skills</a>
            <a onClick={() => setMenuOpen(false)} className="pb-2 hover:border-b-2 hover:border-orange-500 transition-all duration-300" href="#projects">Projects</a>
            <a onClick={() => setMenuOpen(false)} className="pb-2 hover:border-b-2 hover:border-orange-500 transition-all duration-300" href="#contact">Contact Me</a>
          </div>
        )}  
      </header>
    </>
  );
};

export default Navbar;
