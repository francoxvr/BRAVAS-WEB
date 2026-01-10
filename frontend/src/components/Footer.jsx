import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-grid">
        {/* Tarjeta 1: Logo y descripción */}
        <div className="footer-card">
          <div className="footer-logo-small">
            <img src="/logo192.png" alt="Bravas" />
          </div>
          <h4 className="footer-header">Bravas Marketing</h4>
          <p>Transformamos tu presencia digital con estrategias innovadoras que hacen brillar tu marca.</p>
        </div>

        {/* Tarjeta 2: Servicios */}
        <div className="footer-card">
          <h4 className="footer-header">Servicios</h4>
          <ul>
            <li><a href="/marketing">Marketing Digital</a></li>
            <li><a href="/diseno-web">Diseño Web</a></li>
            <li><a href="/servicios">Publicidad Digital</a></li>
            <li><a href="/servicios">Redes Sociales</a></li>
          </ul>
        </div>

        {/* Tarjeta 3: Empresa */}
        <div className="footer-card">
          <h4 className="footer-header">Empresa</h4>
          <ul>
            <li><a href="/nosotros">Nosotros</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contacto">Contacto</a></li>
            <li><a href="/servicios">SEO</a></li>
            <li><a href="/servicios">Branding</a></li>
          </ul>
        </div>

        {/* Tarjeta 4: Contacto + Síguenos */}
        <div className="footer-card">
          <h4 className="footer-header">Contacto</h4>
          <div className="contact-item">
            <Mail size={18} style={{ color: '#ff1493' }} />
            <a href="mailto:info@bravas.com">info@bravas.com</a>
          </div>
          <div className="contact-item">
            <Phone size={18} style={{ color: '#60a5fa' }} />
            <a href="tel:+5493511234567">+54 9 351 123 4567</a>
          </div>
          <div className="contact-item">
            <MapPin size={18} style={{ color: '#ff1493' }} />
            <span>Córdoba, Argentina</span>
          </div>

          {/* Síguenos dentro de Contacto */}
          <div className="footer-social-section">
            <h4 className="footer-header social-header">Síguenos</h4>
            <div className="footer-social-mini">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="Instagram" />
              </a>
              <a href="https://wa.me/5493511234567" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-legal">
        <p>&copy; 2025 <strong>BRAVAS MARKETING </strong>. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}