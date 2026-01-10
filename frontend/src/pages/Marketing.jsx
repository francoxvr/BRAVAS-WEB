import React from 'react';
import { TrendingUp, Target, BarChart3, Megaphone } from 'lucide-react';
import './Marketing.css';

export default function Marketing() {
  return (
    <>
      {/* HERO */}
      <section className="hero-section" id="marketing">
        <div className="hero-container">
          <div className="hero-text">
            <h1 className="hero-title">Marketing Digital</h1>
            <p className="hero-subtitle">
              Estrategias inteligentes para crecer, vender y posicionar tu marca.
            </p>

            <button className="btn-cta">
              Potenciar mi marca
            </button>

            <p className="hero-extra">
              🚀 Estrategia · 📈 Crecimiento · 🎯 Resultados
            </p>
          </div>

          <div className="hero-image">
            <img
              src="/marketing7.jpg"
              alt="Estrategias de Marketing Digital"
              className="fade-in-image"
            />
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="servicios-section">
        <div className="servicios-grid">
          <div className="servicio-card scroll-animate">
            <Target size={40} color="#8b00ff" />
            <h3>Estrategia Digital</h3>
            <p>
              Definimos objetivos claros y planes orientados a resultados reales.
            </p>
          </div>

          <div className="servicio-card scroll-animate">
            <TrendingUp size={40} color="#8b00ff" />
            <h3>SEO & Posicionamiento</h3>
            <p>
              Aumentamos tu visibilidad orgánica en buscadores.
            </p>
          </div>

          <div className="servicio-card scroll-animate">
            <Megaphone size={40} color="#8b00ff" />
            <h3>Publicidad Digital</h3>
            <p>
              Campañas optimizadas en Google Ads y redes sociales.
            </p>
          </div>

          <div className="servicio-card scroll-animate">
            <BarChart3 size={40} color="#8b00ff" />
            <h3>Analítica & Métricas</h3>
            <p>
              Medimos, analizamos y optimizamos cada acción.
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stats-image scroll-animate">
            <img
              src="/marketing12.png"
              alt="Resultados de marketing digital"
              className="fade-in-image"
            />
          </div>

          <div className="stats-content scroll-animate">
            <h2 className="stats-title">
              Marketing orientado a resultados
            </h2>

            <p className="stats-description">
              Las marcas que trabajan con estrategias digitales bien definidas
              logran hasta un <strong>92% más de visibilidad</strong> y un aumento
              sostenido en conversiones.
            </p>

            <div className="stats-badge">
              📊 Optimización continua basada en datos
            </div>
          </div>
        </div>
      </section>
    </>
  );
}