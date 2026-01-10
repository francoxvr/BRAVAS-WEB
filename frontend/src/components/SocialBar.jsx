import React from 'react';

export default function SocialBar() {
  return (
    <div className="social-bar">
      <a href="https://wa.me/5493511234567" target="_blank" rel="noreferrer" className="social-item">
        <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" className="social-icon" />
        <span className="social-text whatsapp-text">WhatsApp</span>
      </a>

      <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-item">
        <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" className="social-icon" />
        <span className="social-text facebook-text">Facebook</span>
      </a>

      <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-item">
        <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="Instagram" className="social-icon" />
        <span className="social-text instagram-text">Instagram</span>
      </a>

      <a
        href="https://maps.google.com/?q=Av.+Hipólito+Yrigoyen+146,+Córdoba"
        target="_blank"
        rel="noreferrer"
        className="social-item"
      >
        <img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" alt="Ubicación" className="social-icon" />
        <span className="social-text location-text">Av. Hipólito Yrigoyen 146, Córdoba</span>
      </a>
    </div>
  );
}
