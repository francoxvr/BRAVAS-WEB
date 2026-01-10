import React, { useEffect, useState } from 'react';
import { Target, TrendingUp, Users, Coffee, Globe } from 'lucide-react';
import { initScrollAnimations } from '../utils/scrollAnimations';
import ScrollToBottom from '../components/ScrollToBottom';
import './Home.css';

export default function Home({ darkMode }) {
  /* ---- CARRUSEL HERO ---- */
  const imagenesHero = ['marketing13.png', 'marketing1.png', 'marketing14.png'];
  const [idxHero, setIdxHero] = useState(0);

  /* ---- HERO INTERVALO ---- */
  useEffect(() => {
    if (imagenesHero.length <= 1) return;
    const i = setInterval(() => setIdxHero((v) => (v + 1) % imagenesHero.length), 3000);
    return () => clearInterval(i);
  }, [imagenesHero.length]);

  /* ---- SCROLL ANIMATIONS ---- */
  useEffect(() => {
    const cleanup = initScrollAnimations();
    return cleanup;
  }, []);

  return (
    <>
      {/* HERO CON GRADIENTE */}
      <section className="hero-section" id="home">
        <div className="hero-container">
          <div className="hero-text">
            <div className="hero-title-box">
              <h1 className="hero-brand">BRAVAS</h1>
              <p className="hero-subbrand">MARKETING</p>
            </div>
            <p className="hero-subtitle">
              Transformamos tu presencia digital con estrategias innovadoras que hacen brillar tu marca.
            </p>
            <button className="btn-cta">Impulsa tu Marca Ahora</button>

            <div className="hero-badges">
              <span>💡 Creatividad</span>
              <span>📊 Datos</span>
              <span>📈 Más visibilidad</span>
            </div>
          </div>

          <div className="hero-image">
            <img
              src={`/${imagenesHero[idxHero]}`}
              alt={`Marketing Bravas ${idxHero + 1}`}
              className="fade-in-image"
              key={idxHero}
            />
          </div>
        </div>
      </section>

      {/* BLOQUE DE VALOR CON GALERÍA */}
      <section className="quienes-section" id="enfoque">
        <div className="quienes-container-full">
          <div className="quienes-header">
            <h2 className="section-title">
              Impulsamos el crecimiento digital de tu negocio
            </h2>
            <p className="section-description">
              Ayudamos a marcas y emprendimientos a destacarse en el entorno digital
              mediante estrategias claras, creativas y orientadas a resultados reales.
            </p>
          </div>

          <div className="gallery-grid">
            <div className="gallery-card">
              <div className="gallery-image">
                <img src="/marketing13.png" alt="Estrategia Digital" />
              </div>
              <h3 className="gallery-title">Estrategia Digital</h3>
              <p className="gallery-description">
                Diseñamos planes personalizados que conectan tu marca con tu audiencia objetivo.
              </p>
            </div>

            <div className="gallery-card">
              <div className="gallery-image">
                <img src="/marketing1.png" alt="Análisis de Datos" />
              </div>
              <h3 className="gallery-title">Análisis de Datos</h3>
              <p className="gallery-description">
                Medimos y optimizamos cada acción para maximizar tus resultados.
              </p>
            </div>

            <div className="gallery-card">
              <div className="gallery-image">
                <img src="/marketing14.png" alt="Crecimiento Sostenible" />
              </div>
              <h3 className="gallery-title">Crecimiento Sostenible</h3>
              <p className="gallery-description">
                Construimos presencia digital que genera valor a largo plazo.
              </p>
            </div>
          </div>

          <div className="quienes-cta">
            <button className="btn-cta">Conocé nuestro enfoque</button>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="servicios-section" id="servicios">
        <h2>Servicios</h2>
        <div className="servicios-grid">
          <div className="servicio-card">
            <Target size={40} color="#8b00ff" />
            <h3>Estrategia</h3>
            <p>Planes personalizados para tu marca.</p>
          </div>
          <div className="servicio-card">
            <TrendingUp size={40} color="#8b00ff" />
            <h3>SEO</h3>
            <p>Visibilidad que convierte.</p>
          </div>
          <div className="servicio-card">
            <Users size={40} color="#8b00ff" />
            <h3>Clientes</h3>
            <p>Conexión con tu público objetivo.</p>
          </div>
          <div className="servicio-card">
            <Coffee size={40} color="#8b00ff" />
            <h3>Consultoría</h3>
            <p>Asesoramiento para tomar mejores decisiones.</p>
          </div>
          <div className="servicio-card">
            <Globe size={40} color="#8b00ff" />
            <h3>Marketing Global</h3>
            <p>Estrategias que cruzan fronteras.</p>
          </div>
          <div className="servicio-card">
            <span className="servicio-emoji">📊</span>
            <h3>Analytics</h3>
            <p>Datos en tiempo real para optimizar resultados.</p>
          </div>
        </div>
      </section>

      {/* CLIENTES FELICES */}
      <section className="clientes-section" id="clientes">
        <h2>Clientes Felices</h2>
        <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px', fontSize: '1.1rem', color: '#555' }}>
          Nos encanta ver cómo nuestros clientes crecen gracias a nuestras estrategias digitales.
          Sus resultados nos motivan cada día.
        </p>
        <div className="clientes-grid">
          <div className="cliente-card">
            <p>"Bravas transformó nuestra presencia online y triplicamos las ventas en 3 meses."</p>
            <span>— María González, Empresa X</span>
          </div>
          <div className="cliente-card">
            <p>"Resultados visibles en pocas semanas. El mejor equipo de marketing con el que trabajamos."</p>
            <span>— Juan Pérez, Empresa Y</span>
          </div>
          <div className="cliente-card">
            <p>"Equipo profesional, creativo y siempre disponible. Superaron nuestras expectativas."</p>
            <span>— Laura Martínez, Empresa Z</span>
          </div>
        </div>
      </section>

      {/* ESTADÍSTICAS */}
      <section className="stats-section" id="stats">
        <h2>Resultados</h2>
        <div className="stats-content">
          <div className="stat-item">
            <h3>🚀 120% Crecimiento</h3>
            <p>En visibilidad de marca promedio para nuestros clientes.</p>
          </div>
          <div className="stat-item">
            <h3>📈 80+ Clientes</h3>
            <p>Satisfechos con nuestros servicios y resultados.</p>
          </div>
          <div className="stat-item">
            <h3>💻 150 Proyectos</h3>
            <p>Implementados con éxito en los últimos 2 años.</p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta-section">
        <h2>¿Listo para hacer crecer tu marca?</h2>
        <button className="btn-cta">Contáctanos Hoy</button>
      </section>

      {/* FLECHA PARA BAJAR */}
      <ScrollToBottom darkMode={darkMode} />
    </>
  );
}