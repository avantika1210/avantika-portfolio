export default function Navbar() {
  return (
    <nav className="fixed top-4 right-6 z-50">
    <ul className="flex space-x-6 text-lg font-medium text-white font-classy">
        <li>
          <a
            href="#hero"
            className="transition-all duration-300 hover:text-teal-400 hover:scale-110 hover:drop-shadow-[0_0_10px_#14b8a6]"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="transition-all duration-300 hover:text-teal-400 hover:scale-110 hover:drop-shadow-[0_0_10px_#14b8a6]"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="transition-all duration-300 hover:text-teal-400 hover:scale-110 hover:drop-shadow-[0_0_10px_#14b8a6]"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="transition-all duration-300 hover:text-teal-400 hover:scale-110 hover:drop-shadow-[0_0_10px_#14b8a6]"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="transition-all duration-300 hover:text-teal-400 hover:scale-110 hover:drop-shadow-[0_0_10px_#14b8a6]"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}