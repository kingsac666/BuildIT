import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../components/layout';
import { Home, About, Blog } from '../pages';

/**
 * Main application router
 */
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          {/* Add more routes here */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRouter;

