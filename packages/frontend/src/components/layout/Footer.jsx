/**
 * Footer component
 */
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} BuildIT. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

