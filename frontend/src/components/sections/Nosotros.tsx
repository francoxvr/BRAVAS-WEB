import Image from 'next/image';
import PageHero from './PageHero';
import homeStyles from './Home.module.css';
import styles from './Nosotros.module.css';

export default function Nosotros() {
  return (
    <>
      <PageHero title="NOSOTROS" sectionId="nosotros" showSubbrand={false} />

      <section className={homeStyles.enfoqueSection} data-animate id="nosotros-resultados">
        <div className={homeStyles.enfoqueHeader} id="nosotros-resultados-target">
          <h2 className={homeStyles.enfoqueTitle}>Resultados que hablan por sí solos</h2>
          <p className={`${homeStyles.enfoqueSubtitle} ${styles.enfoqueSubtitleWrap}`}>
            En <strong>Bravas</strong> no improvisamos. Cada estrategia se diseña, mide y optimiza para lograr{' '}
            <strong>más ventas, más visibilidad y más clientes</strong>.
          </p>
        </div>

        <div className={styles.nosotrosBody}>
          <div className={styles.statsImage}>
            <Image
              src="/assets/images/marketing/marketing11.png"
              alt="Resultados Bravas Marketing"
              className={styles.fadeInImage}
              width={480}
              height={360}
            />
          </div>
          <div className={styles.statsContent}>
            <div className={styles.statsBadge}>+92% de satisfacción de clientes</div>
            <div className={styles.statsBadge}>+150 proyectos exitosos</div>
          </div>
        </div>
      </section>
    </>
  );
}
