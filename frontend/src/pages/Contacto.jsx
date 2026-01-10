import React from 'react';
import ContactForm from '../components/ContactForm';
import './Contacto.css';

export default function Contacto({ darkMode }) {
  return (
    <div className={`app-container ${darkMode ? 'dark' : 'light'}`}>
      {/* HERO */}
      <section className={`hero-section ${darkMode ? 'dark' : ''}`} id="contacto">
        <div className="hero-container">
          <div className="hero-text">
            <h1 className="hero-title contacto-title">Contacto</h1>
            <p className="hero-subtitle">
              Estamos acá para ayudarte. Escribinos, llamanos o visitanos. Tu próximo proyecto empieza hoy.
            </p>
            <button
              className="btn-cta"
              onClick={() => {
                const formSection = document.getElementById('contacto-form');
                if (formSection) formSection.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Escríbenos por WhatsApp
            </button>
            <p className="hero-extra">📱 WhatsApp · 📧 Email · 🏢 Oficina</p>
          </div>
          <div className="hero-image">
            <img src="/marketing9.jpg" alt="Contacto Bravas Marketing" className="fade-in-image" />
          </div>
        </div>
      </section>

      {/* FORMULARIO */}
      <section
        id="contacto-form"
        className={`servicios-section searchable ${darkMode ? 'dark' : ''}`}
      >
        <ContactForm darkMode={darkMode} />
      </section>
    </div>
  );
}