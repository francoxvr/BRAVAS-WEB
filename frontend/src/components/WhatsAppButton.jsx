import React from 'react';
import { MessageCircle } from 'lucide-react';
import './WhatsAppButton.css';

export default function WhatsAppButton() {
  const whatsappNumber = '5493511234567';
  const message = encodeURIComponent('Hola! Me interesa conocer más sobre sus servicios de marketing digital.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="whatsapp-tooltip">¿Hablamos?</span>
    </a>
  );
}







