import React from 'react';
import { Header, Footer } from './';

/**
 * App layout that provides header, footer and page background
 */
const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 text-gray-900">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
