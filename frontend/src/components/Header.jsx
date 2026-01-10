import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import './Header.css';

export default function Header({ scrolled, darkMode, toggleTheme }) {
  /* violeta sin rosa (modo oscuro) */
  useEffect(() => {
    if (!darkMode) return;
    const style = document.createElement('style');
    style.innerHTML = `
      .app-container.dark .nav-item:hover::after {
        background: linear-gradient(90deg, #2e1065 0%, #6d28d9 50%, #7c3aed 100%) !important;
      }
    `;
    document.head.appendChild(style);
    return () => style.remove();
  }, [darkMode]);

  return (
    <header className={`header-sticky ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="header-content">
        <img src="/logo192.png" alt="Bravas" className="logo-img" />

        <nav className="nav-menu">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/nosotros" className="nav-item">Nosotros</Link>
          <Link to="/marketing" className="nav-item">Marketing</Link>
          <Link to="/diseno-web" className="nav-item">Diseño Web</Link>
          <Link to="/servicios" className="nav-item">Servicios</Link>
          <Link to="/blog" className="nav-item">Blog</Link>
          <Link to="/contacto" className="nav-item">Contacto</Link>

          <button onClick={toggleTheme} className="theme-toggle" aria-label="Cambiar tema">
            {darkMode ? (
              <div className="theme-icon-wrapper sun-wrapper">
                <Sun size={24} className="icon-sun" strokeWidth={2.5} fill="#FDB813" />
              </div>
            ) : (
              <div className="theme-icon-wrapper moon-wrapper">
                <Moon size={22} className="icon-moon" strokeWidth={1.5} fill="#FDB813" />
                <span className="star star-1"></span>
                <span className="star star-2"></span>
                <span className="star star-3"></span>
              </div>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}