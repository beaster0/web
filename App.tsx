
import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Layout from './components/Layout';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Research = lazy(() => import('./pages/Research'));
const People = lazy(() => import('./pages/People'));
const Publications = lazy(() => import('./pages/Publications'));
const Facilities = lazy(() => import('./pages/Facilities'));
const Database = lazy(() => import('./pages/Database'));
const Gallery = lazy(() => import('./pages/Gallery'));

// 页面包裹组件，定义动画参数
const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -15 }}
    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/research" element={<PageWrapper><Research /></PageWrapper>} />
        <Route path="/people" element={<PageWrapper><People /></PageWrapper>} />
        <Route path="/publications" element={<PageWrapper><Publications /></PageWrapper>} />
        <Route path="/facilities" element={<PageWrapper><Facilities /></PageWrapper>} />
        <Route path="/database" element={<PageWrapper><Database /></PageWrapper>} />
        <Route path="/gallery" element={<PageWrapper><Gallery /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 border-4 border-blue-600/20 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          </div>
        }>
          <AnimatedRoutes />
        </Suspense>
      </Layout>
    </HashRouter>
  );
};

export default App;
