import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../components/layout';
import {
  Home,
  Services,
  AiAutomation,
  Projects,
  About,
  Contact,
  Blog,
  PrivacyPolicy,
  TermsOfService,
  CookiePolicy,
  MetaAds,
} from '../pages';

/**
 * Main application router
 */
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/ai-automation" element={<AiAutomation />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/meta-ads" element={<MetaAds />} />
          {/* Add more routes here */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRouter;

