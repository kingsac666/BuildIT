import React from 'react';
import { Header, Footer } from './';

/**
 * App layout that provides header, footer and page background
 */
const Layout = ({ children }) => {
  return (
    //  dark:bg-gray-900 
    <div className="min-h-screen bg-gray-50flex flex-col">
      {/* <Header /> */}
      <main className="flex-grow">{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
