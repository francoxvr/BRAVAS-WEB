import React from 'react';
import {
  Monitor,
  TrendingUp,
  Megaphone,
  Mail,
  BarChart3,
  Palette
} from 'lucide-react';
import './Servicios.css';

export default function Servicios() {
  return (
    <>
      {/* HERO */}
      <section className="hero-section" id="servicios">
        <div className="hero-container">
          <div className="hero-text">
            <h1 className="hero-title">Servicios</h1>
            <p className="hero-subtitle">
              Soluciones digitales diseñadas para hacer crecer tu negocio.
            </p>

            <button className="btn-cta">
              Solicitar asesoría
            </button>

            <p className="hero-extra">
              🎯 Estrategia · 🚀 Crecimiento · 📊 Resultados
            </p>
          </div>

          <div className="hero-image">
            <img
              src="/marketing10.jpg"
              alt="Servicios digitales profesionales"
              className="fade-in-image"
            />
          </div>
        </div>
      </section>

      {/* LISTADO DE SERVICIOS */}
      <section className="servicios-section">
        <div className="servicios-grid">
          <div className="servicio-card scroll-animate">
            <TrendingUp size={40} color="#8b00ff" />
            <h3>Marketing Digital</h3>
            <p>
              Estrategias personalizadas para aumentar ventas y visibilidad.
            </p>
          </div>

          <div className="servicio-card scroll-animate">
            <Monitor size={40} color="#8b00ff" />
            <h3>Diseño Web</h3>
            <p>
              Sitios modernos, rápidos y optimizados para convertir.
            </p>
          </div>

          <div className="servicio-card scroll-animate">
            <Megaphone size={40} color="#8b00ff" />
            <h3>Publicidad Digital</h3>
            <p>
              Campañas pagas enfocadas en resultados medibles.
            </p>
          </div>

          <div className="servicio-card scroll-animate">
            <Mail size={40} color="#8b00ff" />
            <h3>Email Marketing</h3>
            <p>
              Comunicación efectiva que fideliza clientes.
            </p>
          </div>

          <div className="servicio-card scroll-animate">
            <BarChart3 size={40} color="#8b00ff" />
            <h3>Analítica & Métricas</h3>
            <p>
              Datos claros para tomar mejores decisiones.
            </p>
          </div>

          <div className="servicio-card scroll-animate">
            <Palette size={40} color="#8b00ff" />
            <h3>Branding</h3>
            <p>
              Identidad visual coherente y memorable.
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stats-content scroll-animate">
            <h2 className="stats-title">
              ¿Listo para llevar tu marca al siguiente nivel?
            </h2>

            <p className="stats-description">
              Trabajamos con enfoque estratégico y resultados reales.
            </p>

            <div className="stats-badge">
              💜 Bravas Marketing Digital
            </div>
          </div>
        </div>
      </section>
    </>
  );
}