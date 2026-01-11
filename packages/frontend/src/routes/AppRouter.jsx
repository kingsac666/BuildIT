import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, Footer } from '../components/layout';
import { Home, About } from '../pages';

/**
 * Main application router
 */
const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* Add more routes here */}
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;

