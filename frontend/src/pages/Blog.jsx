import React, { useEffect, useState } from 'react';
import { initScrollAnimations } from '../utils/scrollAnimations';
import './Blog.css';

export default function Blog() {
  // Slider usando imágenes existentes en /public
  const imagenes = ['marketing10.jpg', 'marketing11.png', 'marketing12.png'];
  const [indice, setIndice] = useState(0);

  // Slider seguro
  useEffect(() => {
    if (imagenes.length <= 1) return;
    const intervalo = setInterval(
      () => setIndice((p) => (p + 1) % imagenes.length),
      3000
    );
    return () => clearInterval(intervalo);
  }, [imagenes.length]);

  // Animaciones de scroll
  useEffect(() => {
    const cleanup = initScrollAnimations();
    return cleanup;
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="hero-section" id="blog">
        <div className="hero-container">
          <div className="hero-text">
            <h1 className="hero-title">Blog de Bravas</h1>
            <p className="hero-subtitle">
              Consejos, tendencias y estrategias de marketing digital.
            </p>
            <button className="btn-cta">Explorar Artículos</button>
            <p className="hero-extra">
              📰 Novedades · 📈 Casos de éxito · 💡 Tutoriales
            </p>
          </div>

          {/* Imagen hero */}
          <div className="hero-image">
            <img
              key={indice}
              src={`/${imagenes[indice]}`}
              alt={`Blog Bravas ${indice + 1}`}
              className="fade-in-image"
            />
          </div>

          <div className="blur-blob"></div>
        </div>
      </section>

      {/* CATEGORÍAS */}
      <section className="servicios-section" id="temas">
        <h2>Categorías</h2>
        <div className="servicios-grid">
          <div className="servicio-card">
            <span>📈</span>
            <h3>Marketing Digital</h3>
            <p>Estrategias que aumentan tus ventas.</p>
          </div>
          <div className="servicio-card">
            <span>🎨</span>
            <h3>Diseño Web</h3>
            <p>Sitios que convierten visitantes en clientes.</p>
          </div>
          <div className="servicio-card">
            <span>📱</span>
            <h3>Redes Sociales</h3>
            <p>Contenido que engancha y fideliza.</p>
          </div>
          <div className="servicio-card">
            <span>🔍</span>
            <h3>SEO</h3>
            <p>Posicionamiento que impulsa tu visibilidad.</p>
          </div>
        </div>
      </section>

      {/* ARTÍCULOS DESTACADOS */}
      <section className="stats-section" id="articulos">
        <h2>Artículos Destacados</h2>
        <div className="stats-content">
          <div className="stat-item">
            <h3>💡 Cómo aumentar tu visibilidad online</h3>
            <p>Tips y estrategias para destacar en el mundo digital.</p>
          </div>
          <div className="stat-item">
            <h3>📈 Optimización de campañas de marketing</h3>
            <p>Aprende a medir y mejorar tus resultados.</p>
          </div>
          <div className="stat-item">
            <h3>🎨 Tendencias en diseño web 2026</h3>
            <p>Lo último en UX/UI que cautiva a los usuarios.</p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta-section">
        <h2>¿Listo para potenciar tu marca con nuestros tips?</h2>
        <button className="btn-cta">Leer Más Artículos</button>
      </section>
    </>
  );
}