import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import './ScrollToBottom.css';

export default function ScrollToBottom({ darkMode }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      // Ocultar cuando estés cerca del final de la página
      if (scrollTop + windowHeight >= documentHeight - 200) {
        setIsVisible(false);
      } else if (scrollTop > 100) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNextSection = () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + window.innerHeight / 3; // Detecta en qué sección estás
    
    let nextSection = null;
    
    // Buscar la siguiente sección completa
    for (let i = 0; i < sections.length; i++) {
      const sectionTop = sections[i].offsetTop;
      
      // Si la sección está más abajo que tu posición actual
      if (sectionTop > scrollPosition) {
        nextSection = sections[i];
        break;
      }
    }
    
    // Scroll suave al inicio de la siguiente sección
    if (nextSection) {
      window.scrollTo({
        top: nextSection.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToNextSection}
      className={`scroll-to-bottom-container ${darkMode ? 'dark-mode' : ''}`}
      aria-label="Ir a siguiente sección"
    >
      <ChevronDown size={24} />
    </button>
  );
}