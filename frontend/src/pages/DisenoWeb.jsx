import React from 'react';
import { Target, TrendingUp } from 'lucide-react';
import './DisenoWeb.css';

export default function DisenoWeb() {
  return (
    <>
      {/* HERO */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-text">
            <h1 className="hero-title">Diseño Web</h1>
            <p className="hero-subtitle">
              Sitios web modernos, rápidos y pensados para convertir.
            </p>
            <p className="hero-extra">🌐 UX · ⚡ Performance · 🎯 Conversión</p>
          </div>

          <div className="hero-image">
            <img src="/marketing10.jpg" alt="Diseño Web Profesional" className="fade-in-image" />
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="servicios-section">
        <div className="servicios-grid">
          <div className="servicio-card">
            <Target size={40} color="#8b00ff" />
            <h3>UX/UI</h3>
            <p>Diseños intuitivos centrados en el usuario.</p>
          </div>

          <div className="servicio-card">
            <TrendingUp size={40} color="#8b00ff" />
            <h3>Optimización</h3>
            <p>Velocidad, SEO y rendimiento real.</p>
          </div>

          <div className="servicio-card">
            <span className="servicio-emoji">📱</span>
            <h3>Responsive</h3>
            <p>Adaptado a todos los dispositivos.</p>
          </div>

          <div className="servicio-card">
            <span className="servicio-emoji">🛒</span>
            <h3>E-commerce</h3>
            <p>Tiendas online listas para vender.</p>
          </div>
        </div>
      </section>
    </>
  );
}