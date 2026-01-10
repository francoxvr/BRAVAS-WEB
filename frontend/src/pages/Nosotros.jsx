import React from 'react';
import { Target, TrendingUp } from 'lucide-react';
import './Nosotros.css';

export default function Nosotros() {
  return (
    <>
      {/* HERO */}
      <section className="hero-section" id="nosotros">
        <div className="hero-container">
          <div className="hero-text">
            <h1 className="hero-title">Nosotros</h1>
            <p className="hero-subtitle">
              Conocé al equipo que hace brillar tu marca.
            </p>
            <button className="btn-cta">Conocer Equipo</button>
            <p className="hero-extra">
              🚀 Experiencia · 📈 Resultados · 👥 Personas
            </p>
          </div>

          <div className="hero-image">
            <img
              src="/marketing9.jpg"
              alt="Equipo Bravas Marketing"
              className="fade-in-image"
            />
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section id="valores" className="servicios-section">
        <div className="servicios-grid">
          <div className="servicio-card">
            <Target size={40} color="#8b00ff" />
            <h3>Transparencia</h3>
            <p>Información clara y métricas reales.</p>
          </div>

          <div className="servicio-card">
            <TrendingUp size={40} color="#8b00ff" />
            <h3>Crecimiento</h3>
            <p>Resultados medibles y escalables.</p>
          </div>

          <div className="servicio-card">
            <span className="servicio-emoji">🤝</span>
            <h3>Compromiso</h3>
            <p>Nos involucramos con tu proyecto.</p>
          </div>

          <div className="servicio-card">
            <span className="servicio-emoji">💡</span>
            <h3>Innovación</h3>
            <p>Siempre actualizados con lo último.</p>
          </div>

          <div className="servicio-card">
            <span className="servicio-emoji">🎯</span>
            <h3>Enfoque</h3>
            <p>Estrategias centradas en objetivos.</p>
          </div>

          <div className="servicio-card">
            <span className="servicio-emoji">📊</span>
            <h3>Analítica</h3>
            <p>Decisiones basadas en datos.</p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-section" id="stats">
        <div className="stats-container">
          <div className="stats-image">
            <img
              src="/marketing11.png"
              alt="Estadísticas de rendimiento"
              className="fade-in-image"
            />
          </div>

          <div className="stats-content">
            <h2 className="stats-title">Resultados que hablan</h2>
            <p className="stats-description">
              En <strong>Bravas</strong> no hay lugar para la improvisación.
              Cada estrategia se mide, analiza y optimiza para lograr
              <strong> más ventas, más visibilidad y más clientes</strong>.
            </p>
            <div className="stats-badge">
              🚀 Rendimiento optimizado al 92%
            </div>
          </div>
        </div>
      </section>
    </>
  );
}