import { Link } from 'react-router-dom';
import logo from '../../assets/BuildIT-noBackground.png';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <img src={logo} alt="BuildIT logo" className="h-9 w-auto" />
              <span className="text-lg font-semibold text-gray-900">BuildIT</span>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Digital solutions for small to medium businesses that need help with IT transformation,
              automation, and community management.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">Company</p>
            <div className="mt-3 flex flex-col gap-2 text-sm text-gray-600">
              <Link to="/services" className="hover:text-blue-600">
                Services
              </Link>
              <Link to="/ai-automation" className="hover:text-blue-600">
                AI & Automation
              </Link>
              <Link to="/projects" className="hover:text-blue-600">
                Projects
              </Link>
              <Link to="/about" className="hover:text-blue-600">
                About
              </Link>
              <Link to="/contact" className="hover:text-blue-600">
                Contact
              </Link>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">Legal</p>
            <div className="mt-3 flex flex-col gap-2 text-sm text-gray-600">
              <Link to="/privacy-policy" className="hover:text-blue-600">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="hover:text-blue-600">
                Terms of Service
              </Link>
              <Link to="/cookie-policy" className="hover:text-blue-600">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-6 text-sm text-gray-500 md:flex-row">
          <span>&copy; {new Date().getFullYear()} BuildIT. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-600">
              LinkedIn
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="hover:text-blue-600">
              Instagram
            </a>
            <a href="mailto:hello@buildit.ma" className="hover:text-blue-600">
              hello@buildit.ma
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

