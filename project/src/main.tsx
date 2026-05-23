import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import FoerderungPage from './pages/FoerderungPage.tsx';
import AboutMalimPage from './pages/AboutMalimPage.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/foerderung" element={<FoerderungPage />} />
        <Route path="/ueber-malim" element={<AboutMalimPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
