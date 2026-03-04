import React, { useState } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo / Name */}
        <a href="#home" className="text-2xl font-bold text-white">
          NS
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="hover:text-orange-500 transition-colors duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col bg-black text-white px-6 py-4 space-y-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="hover:text-orange-500 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
