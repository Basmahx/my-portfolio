import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/assets/logo.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track mobile menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu
  };

  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 w-full z-50">
      <nav className="backdrop-blur-lg bg-white/85 w-full px-6 py-4 shadow-sm">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <Link to="/" className="opacity-90">
            <img
              src={logo}
              alt="Logo"
              className="h-10 w-auto object-contain sm:h-8 md:h-10 lg:h-12"
            />
          </Link>

          {/* Desktop Navigation List */}
          <ul className="hidden sm:flex gap-6 text-gray-700 text-sm font-medium">
            <li>
              <a
                href="/#projets"
                className="hover:opacity-80 transition-opacity">
                Projets
              </a>
            </li>
            <li>
              <Link to="/about" className="hover:opacity-80 transition-opacity">
                À propos
              </Link>
            </li>
            <li>
              <a
                href="mailto:b.alzenbake@gmail.com"
                className="hover:opacity-80 transition-opacity"
                target="_blank"
                rel="noopener noreferrer">
                Contactez-moi
              </a>
            </li>
          </ul>

          {/* Hamburger Menu Button for Mobile */}
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`sm:hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}>
          <ul className="flex flex-col items-center gap-6 text-gray-700 text-sm font-medium py-4">
            <li>
              <a
                href="/#projets"
                className="hover:opacity-80 transition-opacity"
                onClick={() => setIsOpen(false)}>
                Projets
              </a>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:opacity-80 transition-opacity"
                onClick={() => setIsOpen(false)}>
                À propos
              </Link>
            </li>
            <li>
              <a
                href="mailto:b.alzenbake@gmail.com"
                className="hover:opacity-80 transition-opacity"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}>
                Contactez-moi
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
