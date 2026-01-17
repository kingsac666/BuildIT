import React from 'react';
import { useLocation } from 'react-router-dom';
import useScrollReveal from '../../hooks/useScrollReveal';
import { Header, Footer } from './';

/**
 * App layout that provides header, footer and page background
 */
const Layout = ({ children }) => {
  const location = useLocation();
  useScrollReveal(undefined, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 text-gray-900">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
