import Link from 'next/link';
import { Target, TrendingUp, Lightbulb, Users, Crosshair, BarChart } from 'lucide-react';
import styles from './Nosotros.module.css';

export default function Nosotros() {
  return (
    <>
      <section className={styles.heroSection} id="nosotros">
        <div className={styles.heroContainer}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>Nosotros</h1>

            <p className={styles.heroSubtitle}>
              Somos un equipo apasionado por el marketing digital, comprometido
              con hacer brillar tu marca y llevarla al siguiente nivel.
            </p>

            <Link href="/contacto" className={styles.btnCta}>
              Conocer nuestro equipo
            </Link>

            <p className={styles.heroExtra}>
              Experiencia • Resultados • Compromiso
            </p>
          </div>

          <div className={styles.heroImage}>
            <img
              src="/assets/images/marketing/marketing9.jpg"
              alt="Equipo Bravas Marketing"
              className={styles.fadeInImage}
            />
          </div>
        </div>
      </section>

      <section className={styles.valoresSection}>
        <div className={styles.valoresHeader}>
          <h2 className={styles.valoresTitle}>Nuestros Valores</h2>
          <p className={styles.valoresSubtitle}>
            Lo que nos define como equipo
          </p>
        </div>

        <div className={styles.valoresGrid}>
          <div className={styles.valorCard}>
            <Target size={40} color="#8b00ff" />
            <h3>Transparencia</h3>
            <p>Información clara, métricas reales y honestidad total.</p>
          </div>

          <div className={styles.valorCard}>
            <TrendingUp size={40} color="#8b00ff" />
            <h3>Crecimiento</h3>
            <p>Resultados medibles, escalables y sostenibles en el tiempo.</p>
          </div>

          <div className={styles.valorCard}>
            <Users size={40} color="#8b00ff" />
            <h3>Compromiso</h3>
            <p>Nos involucramos profundamente con cada proyecto.</p>
          </div>

          <div className={styles.valorCard}>
            <Lightbulb size={40} color="#8b00ff" />
            <h3>Innovación</h3>
            <p>Siempre actualizados con las últimas tendencias digitales.</p>
          </div>

          <div className={styles.valorCard}>
            <Crosshair size={40} color="#8b00ff" />
            <h3>Enfoque</h3>
            <p>Estrategias centradas en tus objetivos de negocio.</p>
          </div>

          <div className={styles.valorCard}>
            <BarChart size={40} color="#8b00ff" />
            <h3>Analítica</h3>
            <p>Decisiones basadas en datos y métricas concretas.</p>
          </div>
        </div>
      </section>

      <section className={styles.statsSection}>
        <div className={styles.statsContainer}>
          <div className={styles.statsImage}>
            <img
              src="/assets/images/marketing/marketing11.png"
              alt="Resultados Bravas Marketing"
              className={styles.fadeInImage}
            />
          </div>

          <div className={styles.statsContent}>
            <h2 className={styles.statsTitle}>
              Resultados que hablan por sí solos
            </h2>

            <p className={styles.statsDescription}>
              En <strong>Bravas</strong> no improvisamos. Cada estrategia se
              diseña, mide y optimiza para lograr{' '}
              <strong>más ventas, más visibilidad y más clientes</strong>.
            </p>

            <div className={styles.statsBadge}>
              +92% de satisfacción de clientes
            </div>

            <div className={styles.statsBadge}>
              +150 proyectos exitosos
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
