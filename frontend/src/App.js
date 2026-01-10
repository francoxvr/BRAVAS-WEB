import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import SocialBar from './components/SocialBar';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Marketing from './pages/Marketing';
import DisenoWeb from './pages/DisenoWeb';
import Servicios from './pages/Servicios';
import Blog from './pages/Blog';
import Contacto from './pages/Contacto';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`app-container ${darkMode ? 'dark' : 'light'}`}>
      <SocialBar />
      <Header
        scrolled={scrolled}
        darkMode={darkMode}
        toggleTheme={() => setDarkMode(!darkMode)}
      />

      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} />} />  {/* ← AGREGAR darkMode */}
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/diseno-web" element={<DisenoWeb />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacto" element={<Contacto darkMode={darkMode} />} />
      </Routes>

      <Footer />
      <ScrollToTop />
    </div>
  );
}