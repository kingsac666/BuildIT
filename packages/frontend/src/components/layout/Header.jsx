import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import logo from '../../assets/BuildIT-noBackground.png';
import { getWhatsAppLink } from '../../utils/whatsapp';

/**
 * Header/Navbar component
 */
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappLink = getWhatsAppLink();

  const navLinkClasses = ({ isActive }) =>
    `text-sm font-medium transition-colors ${
      isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="BuildIT logo" className="h-9 w-auto" />
            <span className="text-xl font-semibold text-gray-900">BuildIT</span>
          </Link>

          <div className="hidden items-center gap-6 lg:flex">
            <NavLink to="/" className={navLinkClasses}>Home</NavLink>
            <NavLink to="/services" className={navLinkClasses}>Services</NavLink>
            <NavLink to="/ai-automation" className={navLinkClasses}>
              AI & Automation
            </NavLink>
            <NavLink to="/projects" className={navLinkClasses}>Projects</NavLink>
            <NavLink to="/about" className={navLinkClasses}>About</NavLink>
            <NavLink to="/contact" className={navLinkClasses}>Contact</NavLink>
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={whatsappLink}
              className="text-sm font-medium text-gray-700 hover:text-blue-600"
              target="_blank"
              rel="noreferrer"
            >
              Talk to Us on WhatsApp
            </a>
            <Link
              to="/contact"
              className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
            >
              Get a Free Consultation
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-gray-300 p-2 text-gray-700 lg:hidden"
            onClick={() => setIsOpen(prev => !prev)}
            aria-label="Toggle navigation"
          >
            <span className="text-lg">{isOpen ? '✕' : '☰'}</span>
          </button>
        </div>

        {isOpen && (
          <div className="mt-4 flex flex-col gap-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm lg:hidden">
            <NavLink to="/" className={navLinkClasses} onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/services" className={navLinkClasses} onClick={() => setIsOpen(false)}>
              Services
            </NavLink>
            <NavLink to="/ai-automation" className={navLinkClasses} onClick={() => setIsOpen(false)}>
              AI & Automation
            </NavLink>
            <NavLink to="/projects" className={navLinkClasses} onClick={() => setIsOpen(false)}>
              Projects
            </NavLink>
            <NavLink to="/about" className={navLinkClasses} onClick={() => setIsOpen(false)}>
              About
            </NavLink>
            <NavLink to="/contact" className={navLinkClasses} onClick={() => setIsOpen(false)}>
              Contact
            </NavLink>

            <div className="border-t border-gray-200 pt-3">
              <a
                href={whatsappLink}
                className="text-sm font-medium text-gray-700 hover:text-blue-600"
                target="_blank"
                rel="noreferrer"
              >
                Talk to Us on WhatsApp
              </a>
              <Link
                to="/contact"
                className="mt-3 block rounded-full bg-blue-600 px-4 py-2 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                onClick={() => setIsOpen(false)}
              >
                Get a Free Consultation
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
