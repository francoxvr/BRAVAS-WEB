// utils/scrollHelper.js

import { useEffect } from 'react';

/**
 * Obtiene la siguiente sección en el orden de navegación
 */
export const getNextSection = (currentId) => {
  const sections = [
    'home',
    'marketing',
    'diseno-web',
    'servicios',
    'nosotros',
    'blog',
    'contacto'
  ];
  
  const currentIndex = sections.indexOf(currentId);
  const nextIndex = (currentIndex + 1) % sections.length;
  return sections[nextIndex];
};

/**
 * Hook para animaciones de scroll reveal
 */
export const useScrollReveal = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');

    const reveal = () => {
      elements.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (top < windowHeight - 120) {
          el.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', reveal);
    reveal(); // Ejecutar al cargar

    return () => window.removeEventListener('scroll', reveal);
  }, []);
};

/**
 * Scroll suave a un elemento por ID
 */
export const scrollToElement = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};