import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Hamburger and Close icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = ["Home", "About", "Projects", "Skills", "Contact"];
  const hrefMap = {
    Home: "#hero",
    About: "#about",
    Projects: "#projects",
    Skills: "#skills",
    Contact: "#contact",
  };

  return (
    <nav className="fixed top-4 right-4 z-50 w-full max-w-screen px-4 sm:px-6 flex justify-end">
      <div className="sm:hidden">
        <button
          onClick={toggleMenu}
          className="text-white text-3xl hover:text-teal-400 transition"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Desktop Nav */}
      <ul className="hidden sm:flex gap-6 text-lg font-medium text-white font-classy bg-black/40 backdrop-blur-md px-4 py-2 rounded-full shadow-md">
        {navItems.map((item) => (
          <li key={item}>
            <a
              href={hrefMap[item]}
              className="transition-all duration-300 hover:text-teal-400 hover:scale-110 hover:drop-shadow-[0_0_10px_#14b8a6]"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <ul className="absolute top-16 right-4 bg-black/90 text-white font-classy rounded-xl shadow-lg px-6 py-4 space-y-4 text-base w-48 sm:hidden z-50">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={hrefMap[item]}
                className="block transition-all duration-300 hover:text-teal-400"
                onClick={() => setIsOpen(false)} // close menu after click
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}