import { Link } from "react-router-dom";
import logo from "/assets/logo.svg";

const Header = () => (
  <header className="fixed top-0 left-1/2 -translate-x-1/2 w-full z-50">
    <nav className="backdrop-blur-lg bg-white/85 w-full px-6 py-4 shadow-sm">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <Link to="/" className="opacity-90">
          <img src={logo} alt="Logo" className="h-10 w-auto object-contain" />
        </Link>

        {/* Navigation List */}
        <ul className="flex gap-6 text-gray-700 text-sm font-medium">
          <li>
            <a href="/#projets" className="hover:opacity-80 transition-opacity">
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
              href="#"
              className="hover:opacity-80 transition-opacity"
              target="_blank"
              rel="noopener noreferrer">
              CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;
