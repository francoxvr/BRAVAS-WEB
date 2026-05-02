import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './Home.module.css';

/** Mismas imágenes e intervalo que el hero del Home */
export const PAGE_HERO_IMAGES = [
  '/assets/images/marketing/marketing1.png',
  '/assets/images/marketing/marketing3.png',
  '/assets/images/marketing/marketing4.png',
  '/assets/images/marketing/marketing7.png',
  '/assets/images/marketing/marketing9.jpg',
  '/assets/images/marketing/marketing10.jpg',
  '/assets/images/marketing/marketing11.png',
  '/assets/images/marketing/marketing12.png',
  '/assets/images/marketing/marketing13.png',
  '/assets/images/marketing/marketing14.png',
  '/assets/images/marketing/analisis.png',
  '/assets/images/marketing/crecimiento.png',
  '/assets/images/marketing/estadistica1.png',
  '/assets/images/marketing/estadistica2.png',
  '/assets/images/marketing/estrategia.png',
  '/assets/images/marketing/innovamos.png',
  '/assets/images/marketing/innovamos1.png',
  '/assets/images/marketing/redes2.png',
  '/assets/images/marketing/redes4.png',
];

type PageHeroProps = {
  /** Único texto que cambia entre páginas (ej. BRAVAS, SERVICIOS, NOSOTROS, CONTACTO) */
  title: string;
  /** id del `<section>` y base para `id="{sectionId}-target"` en el bloque de texto */
  sectionId: string;
  /** Línea "M A R K E T I N G" bajo el título (solo Home la muestra) */
  showSubbrand?: boolean;
};

export default function PageHero({ title, sectionId, showSubbrand = true }: PageHeroProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % PAGE_HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const targetId = `${sectionId}-target`;

  return (
    <div className={styles.heroWrapper}>
      <section className={styles.heroSection} id={sectionId}>
        <div className={styles.heroContainer}>
          <div className={styles.heroText} id={targetId}>
            <div className={styles.heroTitleBox}>
              <h1 className={styles.heroBrand}>{title}</h1>
              {showSubbrand ? (
                <span className={styles.heroSubbrand}>M A R K E T I N G</span>
              ) : null}
            </div>

            <p className={styles.heroSubtitle}>
              Transformamos tu presencia digital con estrategias innovadoras que hacen brillar tu marca.
            </p>

            <Link href="/contacto" className={styles.btnCta}>
              Impulsa tu Marca Ahora
            </Link>

            <div className={styles.heroServicesHighlight}>
              <span>Estrategia Digital</span>
              <i>•</i>
              <span>Branding</span>
              <i>•</i>
              <span>Performance Ads</span>
            </div>
          </div>

          <div className={styles.heroImagePlaceholder} />
        </div>
      </section>

      <div className={styles.heroImageWrapper}>
        <div className={styles.heroImageCard}>
          {PAGE_HERO_IMAGES.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Marketing Digital ${index + 1}`}
              className={`${styles.heroImage} ${index === currentImageIndex ? styles.active : ''}`}
            />
          ))}

          <div className={styles.carouselIndicators}>
            {PAGE_HERO_IMAGES.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`${styles.indicator} ${index === currentImageIndex ? styles.indicatorActive : ''}`}
                onClick={() => setCurrentImageIndex(index)}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
