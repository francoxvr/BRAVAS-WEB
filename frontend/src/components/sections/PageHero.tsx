import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './Home.module.css';
import { getSiteConfig } from '@/lib/queries';

export const LOCAL_HERO_IMAGES = [
];

type HeroPage = 'home' | 'servicios' | 'nosotros' | 'contacto';

type PageHeroProps = {
  title: string;
  sectionId: string;
  page?: HeroPage;
  showSubbrand?: boolean;
  subtitle?: string;
  ctaText?: string;
  pills?: string[];
};

interface HeroConfig { subtitulo?: string; ctaTexto?: string; pills?: string[]; }

export default function PageHero({
  title, sectionId, page, showSubbrand = true,
  subtitle, ctaText = 'Impulsa tu Marca Ahora',
  pills = ['Estrategia Digital', 'Branding', 'Performance Ads'],
}: PageHeroProps) {
  const [images, setImages] = useState<string[]>(LOCAL_HERO_IMAGES);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [heroConfig, setHeroConfig] = useState<HeroConfig>({});

  useEffect(() => {
    getSiteConfig().then((d: (Record<string, HeroConfig> & { heroImagenes?: string[] }) | null) => {
      if (!d) return;
      if (d.heroImagenes?.length) setImages(d.heroImagenes);
      if (page) {
        const key = `hero${page.charAt(0).toUpperCase() + page.slice(1)}` as string;
        if (d[key]) setHeroConfig(d[key]);
      }
    });
  }, [page]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images.length]);

  const finalSubtitle = heroConfig.subtitulo ?? subtitle ?? 'Transformamos tu presencia digital con estrategias innovadoras que hacen brillar tu marca.';
  const finalCta = heroConfig.ctaTexto ?? ctaText;
  const finalPills = heroConfig.pills?.length ? heroConfig.pills : pills;

  return (
    <div className={styles.heroWrapper}>
      <section className={styles.heroSection} id={sectionId}>
        <div className={styles.heroContainer}>
          <div className={styles.heroText} id={`${sectionId}-target`} data-animate="fade-right">
            <div className={styles.heroTitleBox}>
              <h1 className={styles.heroBrand}>{title}</h1>
              {showSubbrand && <span className={styles.heroSubbrand}>M A R K E T I N G</span>}
            </div>
            {(showSubbrand || subtitle || heroConfig.subtitulo) && (
              <p className={styles.heroSubtitle}>{finalSubtitle}</p>
            )}
            <Link href="/contacto" className={`${styles.btnCta} ${!showSubbrand ? styles.btnCtaPage : ''}`}>
              {finalCta}
            </Link>
            <div className={`${styles.heroServicesHighlight} ${!showSubbrand ? styles.heroServicesHighlightPage : ''}`}>
              {finalPills.map((pill, i) => (
                <span key={pill}>{i > 0 && <i>•</i>}{pill}</span>
              ))}
            </div>
          </div>
          <div className={styles.heroImagePlaceholder} />
        </div>
      </section>
      <div className={styles.heroImageWrapper} data-animate="fade-left" data-animate-delay="1">
        <div className={styles.heroImageCard}>
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Marketing Digital ${index + 1}`}
              className={`${styles.heroImage} ${index === currentImageIndex ? styles.active : ''}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
