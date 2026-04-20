import { Target, TrendingUp, Smartphone, ShoppingCart } from 'lucide-react';
import styles from './DisenoWeb.module.css';

export default function DisenoWeb() {
  return (
    <>
      {/* HERO */}
      <section className={styles.heroSection} id="diseno-web">
        <div className={styles.heroContainer}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>Diseño Web</h1>
            <p className={styles.heroSubtitle}>
              Sitios web modernos, rápidos y pensados para convertir visitantes
              en clientes. Diseños que venden.
            </p>
            
            <button className={styles.btnCta}>
              Ver portafolio
            </button>

            <p className={styles.heroExtra}>
              🌐 UX · ⚡ Performance · 🎯 Conversión
            </p>
          </div>

          <div className={styles.heroImage}>
            <img
              src="/assets/images/marketing/marketing10.jpg"
              alt="Diseño Web Profesional"
              className={styles.fadeInImage}
            />
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className={styles.serviciosSection}>
        <div className={styles.serviciosGrid}>
          <div className={styles.servicioCard}>
            <Target size={42} color="#8b00ff" />
            <h3>UX/UI Design</h3>
            <p>Diseños intuitivos centrados en la experiencia del usuario.</p>
          </div>

          <div className={styles.servicioCard}>
            <TrendingUp size={42} color="#8b00ff" />
            <h3>Optimización</h3>
            <p>Velocidad, SEO y rendimiento optimizado al máximo.</p>
          </div>

          <div className={styles.servicioCard}>
            <Smartphone size={42} color="#8b00ff" />
            <h3>Responsive</h3>
            <p>Perfectamente adaptado a todos los dispositivos.</p>
          </div>

          <div className={styles.servicioCard}>
            <ShoppingCart size={42} color="#8b00ff" />
            <h3>E-commerce</h3>
            <p>Tiendas online profesionales listas para vender.</p>
          </div>
        </div>
      </section>
    </>
  );
}
