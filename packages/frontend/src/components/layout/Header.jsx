import { Link } from 'react-router-dom';

/**
 * Header/Navbar component
 */
const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            BuildIT
          </Link>
          <div className="space-x-4">
            <Link
              to="/"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600"
            >
              About
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

