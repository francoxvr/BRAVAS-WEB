import { useEffect, useState } from 'react';
import { TrendingUp, Palette, Smartphone, Search } from 'lucide-react';
import { initScrollAnimations } from '../../utils/scrollAnimations';
import styles from './Blog.module.css';

export default function Blog() {
  const imagenes = [
    '/assets/images/marketing/marketing10.jpg',
    '/assets/images/marketing/marketing11.png',
    '/assets/images/marketing/marketing12.png',
  ];
  const [indice, setIndice] = useState(0);

  // Slider automático
  useEffect(() => {
    if (imagenes.length <= 1) return;
    const intervalo = setInterval(
      () => setIndice((p) => (p + 1) % imagenes.length),
      3500
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
      <section className={styles.heroSection} id="blog">
        <div className={styles.heroContainer}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>Blog de Bravas</h1>
            <p className={styles.heroSubtitle}>
              Consejos prácticos, tendencias actuales y estrategias probadas
              de marketing digital para hacer crecer tu negocio.
            </p>
            <button className={styles.btnCta}>Explorar Artículos</button>
            <p className={styles.heroExtra}>
              📰 Novedades · 📈 Casos de éxito · 💡 Tutoriales
            </p>
          </div>

          <div className={styles.heroImage}>
            <img
              key={indice}
              src={imagenes[indice]}
              alt={`Blog Bravas ${indice + 1}`}
              className={styles.fadeInImage}
            />
          </div>
        </div>
      </section>

      {/* CATEGORÍAS */}
      <section className={styles.categoriasSection}>
        <div className={styles.categoriasHeader}>
          <h2 className={styles.categoriasTitle}>Categorías</h2>
          <p className={styles.categoriasSubtitle}>
            Explora contenido por tema
          </p>
        </div>

        <div className={styles.categoriasGrid}>
          <div className={`${styles.categoriaCard} scroll-animate`}>
            <TrendingUp size={40} color="#f59e0b" />
            <h3>Marketing Digital</h3>
            <p>Estrategias que aumentan tus ventas y visibilidad.</p>
          </div>

          <div className={`${styles.categoriaCard} scroll-animate`}>
            <Palette size={40} color="#f59e0b" />
            <h3>Diseño Web</h3>
            <p>Sitios que convierten visitantes en clientes.</p>
          </div>

          <div className={`${styles.categoriaCard} scroll-animate`}>
            <Smartphone size={40} color="#f59e0b" />
            <h3>Redes Sociales</h3>
            <p>Contenido que engancha y fideliza audiencias.</p>
          </div>

          <div className={`${styles.categoriaCard} scroll-animate`}>
            <Search size={40} color="#f59e0b" />
            <h3>SEO</h3>
            <p>Posicionamiento que impulsa tu presencia online.</p>
          </div>
        </div>
      </section>

      {/* ARTÍCULOS DESTACADOS */}
      <section className={styles.articulosSection}>
        <div className={styles.articulosHeader}>
          <h2 className={styles.articulosTitle}>Artículos Destacados</h2>
        </div>

        <div className={styles.articulosGrid}>
          <div className={styles.articuloCard}>
            <span className={styles.articuloIcon}>💡</span>
            <h3>Cómo aumentar tu visibilidad online</h3>
            <p>Tips y estrategias para destacar en el mundo digital.</p>
          </div>

          <div className={styles.articuloCard}>
            <span className={styles.articuloIcon}>📈</span>
            <h3>Optimización de campañas de marketing</h3>
            <p>Aprende a medir y mejorar tus resultados constantemente.</p>
          </div>

          <div className={styles.articuloCard}>
            <span className={styles.articuloIcon}>🎨</span>
            <h3>Tendencias en diseño web 2026</h3>
            <p>Lo último en UX/UI que cautiva a los usuarios.</p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>
          ¿Listo para potenciar tu marca con nuestros tips?
        </h2>
        <button className={styles.btnCta}>Leer Más Artículos</button>
      </section>
    </>
  );
}
