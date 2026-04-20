// utils/scrollAnimations.js

export function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  );

  // Seleccionar elementos que queremos animar
  const elementsToAnimate = document.querySelectorAll(`
    .scroll-animate,
    .servicio-card,
    .stats-container > *,
    .stats-image,
    .cliente-card,
    .stat-item
  `);

  elementsToAnimate.forEach((element) => {
    observer.observe(element);
  });

  // Cleanup function
  return () => {
    elementsToAnimate.forEach((element) => {
      observer.unobserve(element);
    });
  };
}