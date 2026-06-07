import { useEffect, useRef, useState } from 'react';
import PageHero from './PageHero';
import styles from './Home.module.css';
import { getHomeData } from '@/lib/queries';

interface EnfoqueCard { emoji: string; titulo: string; descripcion: string; }
interface CrecimientoCard { titulo: string; descripcion: string; imagenes?: string[]; }
interface ProcesoStep { titulo: string; descripcion: string; }
interface InnovacionFeature { emoji: string; titulo: string; descripcion: string; }
interface HomeData {
  propuestaTag?: string; propuestaTitulo?: string; propuestaSubtitulo?: string; propuestaItems?: string[];
  enfoqueHeader?: string; enfoqueSubtitulo?: string; enfoqueCards?: EnfoqueCard[];
  crecimientoTitulo?: string; crecimientoSubtitulo?: string; crecimientoCards?: CrecimientoCard[];
  procesoHeader?: string; procesoSubtitulo?: string; procesoSteps?: ProcesoStep[];
  innovacionHeader?: string; innovacionSubtitulo?: string; innovacionFeatures?: InnovacionFeature[]; innovacionImagenes?: string[];
}

const DEFAULT_DATA: HomeData = {
  propuestaTitulo: 'Estrategias digitales que generan resultados.',
  propuestaSubtitulo: 'No vendemos humo. Diseñamos, ejecutamos y medimos cada acción para que tu marca crezca de verdad.',
  propuestaItems: ['Estrategia digital personalizada para tu negocio','Publicidad paga con ROI comprobable','Branding & identidad visual que conecta','Contenido que genera comunidad','Analítica y métricas en tiempo real','Acompañamiento estratégico constante'],
  enfoqueSubtitulo: 'Combinamos estrategia, creatividad y tecnología para impulsar tu marca con soluciones digitales.',
  enfoqueCards: [
    { emoji: '🎯', titulo: 'Estrategia Digital', descripcion: 'Planificación integral basada en objetivos medibles y análisis profundo de tu mercado para resultados sostenibles.' },
    { emoji: '✨', titulo: 'Branding & Identidad', descripcion: 'Creamos y fortalecemos la personalidad única de tu marca para destacar y conectar emocionalmente con tu audiencia.' },
    { emoji: '🚀', titulo: 'Performance Ads', descripcion: 'Campañas publicitarias optimizadas en Google, Meta y más plataformas con ROI comprobable y mejora continua.' },
    { emoji: '💡', titulo: 'Contenido Creativo', descripcion: 'Social media, copywriting y diseño que capta la atención y construye relaciones auténticas con tus clientes.' },
    { emoji: '📊', titulo: 'Analítica & Métricas', descripcion: 'Seguimiento continuo y reportes detallados para tomar decisiones inteligentes basadas en datos reales.' },
    { emoji: '📈', titulo: 'Growth Marketing', descripcion: 'Estrategias de crecimiento acelerado y optimización constante para escalar tu negocio de manera sostenible.' },
  ],
  crecimientoTitulo: 'Impulsamos el crecimiento de tu negocio',
  crecimientoSubtitulo: 'Estrategias digitales claras y creativas que generan resultados reales para tu marca.',
  procesoSubtitulo: 'Metodología probada en 4 fases para maximizar resultados.',
  procesoSteps: [
    { titulo: 'Análisis & Estrategia', descripcion: 'Investigación profunda y definición de objetivos claros.' },
    { titulo: 'Diseño & Creatividad', descripcion: 'Desarrollo de identidad visual y contenido estratégico.' },
    { titulo: 'Implementación', descripcion: 'Ejecución de campañas en múltiples canales digitales.' },
    { titulo: 'Optimización', descripcion: 'Medición continua y mejora basada en datos reales.' },
  ],
  innovacionSubtitulo: 'Combinamos creatividad, tecnología y análisis de datos para crear estrategias que generan resultados.',
  innovacionFeatures: [
    { emoji: '🚀', titulo: 'Transformación Digital', descripcion: 'Combinamos creatividad, tecnología y análisis de datos para estrategias efectivas' },
    { emoji: '📊', titulo: 'Estrategia 360°', descripcion: 'Integramos todos los canales digitales para maximizar tu alcance' },
    { emoji: '📈', titulo: 'Resultados Medibles', descripcion: 'Cada acción está respaldada por datos y métricas concretas' },
    { emoji: '⚡', titulo: 'Soporte Continuo', descripcion: 'Acompañamiento permanente y optimización constante para garantizar el éxito de tu proyecto' },
  ],
};

const cardClasses = [styles.card1, styles.card2, styles.card3, styles.card4, styles.card5, styles.card6];
const localCrecimientoImages = [
  ['/assets/images/marketing/estadistica2.png', '/assets/images/marketing/estrategia.png'],
  ['/assets/images/marketing/marketing1.png', '/assets/images/marketing/analisis.png'],
  ['/assets/images/marketing/crecimiento.png', '/assets/images/marketing/innovamos1.png'],
];
const localInnovacionImages = [
  '/assets/images/marketing/marketing10.jpg',
  '/assets/images/marketing/marketing11.png',
  '/assets/images/marketing/estadistica1.png',
];

export default function Home() {
  const [data, setData] = useState<HomeData>(DEFAULT_DATA);
  const [carouselIndexes, setCarouselIndexes] = useState([0, 0, 0]);
  const [sheenPlay, setSheenPlay] = useState([false, false, false]);
  const prevCarouselIndexes = useRef(carouselIndexes);

  useEffect(() => {
    getHomeData().then((d: HomeData | null) => { if (d) setData({ ...DEFAULT_DATA, ...d }); });
  }, []);

  useEffect(() => {
    const intervals = [0, 1, 2].map((i) =>
      setInterval(() => {
        setCarouselIndexes((prev) => { const next = [...prev]; next[i] = (next[i] + 1) % 2; return next; });
      }, 8000 + i * 200)
    );
    return () => intervals.forEach(clearInterval);
  }, []);

  useEffect(() => {
    const changed = carouselIndexes.map((value, i) => value !== prevCarouselIndexes.current[i]);
    prevCarouselIndexes.current = carouselIndexes;
    if (!changed.some(Boolean)) return;
    setSheenPlay(changed);
    const stop = setTimeout(() => setSheenPlay([false, false, false]), 900);
    return () => clearTimeout(stop);
  }, [carouselIndexes]);

  const crecimientoCards = data.crecimientoCards?.length
    ? data.crecimientoCards
    : [
        { titulo: 'Estrategia Digital', descripcion: 'Diseñamos planes personalizados que conectan tu marca con tu audiencia objetivo.' },
        { titulo: 'Análisis de Datos', descripcion: 'Medimos y optimizamos cada acción para maximizar tu inversión.' },
        { titulo: 'Crecimiento Sostenible', descripcion: 'Construimos presencia digital que genera valor a largo plazo.' },
      ];

  const innovacionImagenes = data.innovacionImagenes?.length ? data.innovacionImagenes : localInnovacionImages;

  return (
    <>
      <PageHero title="BRAVAS" sectionId="home" page="home" />

      <section id="propuesta" data-animate className={styles.propuestaSection}>
        <div className={styles.propuestaOrbe1} /><div className={styles.propuestaOrbe2} /><div className={styles.propuestaSheen} />
        <span className={styles.propuestaTag}>{data.propuestaTag ?? '¿Qué hacemos?'}</span>
        <h2 className={styles.propuestaTitulo}>{data.propuestaTitulo}</h2>
        <p className={styles.propuestaSubtitle}>{data.propuestaSubtitulo}</p>
        <div className={styles.propuestaGrid}>
          {(data.propuestaItems ?? []).map((texto, i) => (
            <div key={i} className={styles.propuestaItem}>
              <span className={styles.propuestaNum}>{String(i + 1).padStart(2, '0')}</span>
              <span className={styles.propuestaTexto}>{texto}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="enfoque" data-animate className={styles.enfoqueSection}>
        <div className={styles.enfoqueHeader} id="enfoque-target">
          <h2 className={styles.enfoqueTitle}>{data.enfoqueHeader ?? 'Nuestro Enfoque'}</h2>
          <p className={styles.enfoqueSubtitle}>{data.enfoqueSubtitulo}</p>
        </div>
        <div className={styles.cardsGrid}>
          {(data.enfoqueCards ?? []).map((card, i) => (
            <div key={i} className={`${styles.serviceCard} ${cardClasses[i] ?? ''}`}>
              <div className={styles.cardIcon}>{card.emoji}</div>
              <h3 className={styles.cardTitle}>{card.titulo}</h3>
              <p className={styles.cardDescription}>{card.descripcion}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="crecimiento" className={styles.crecimientoSection} data-animate>
        <div className={styles.crecimientoHeader} id="crecimiento-target">
          <h2 className={styles.crecimientoTitle}>{data.crecimientoTitulo}</h2>
          <p className={styles.crecimientoSubtitle}>{data.crecimientoSubtitulo}</p>
        </div>
        <div className={styles.crecimientoGrid}>
          {crecimientoCards.map((card, i) => {
            const tinaImages = data.crecimientoCards?.[i]?.imagenes;
            const images = tinaImages?.length ? tinaImages : localCrecimientoImages[i] ?? [];
            return (
              <div key={i} className={styles.crecimientoCard}>
                <div className={`${styles.crecimientoCardImage} ${sheenPlay[i] ? styles.sheenPlay : ''}`}>
                  {images.map((image, j) => (
                    <img key={j} src={image} alt={`${card.titulo} ${j + 1}`}
                      className={`${styles.crecimientoImage} ${j === carouselIndexes[i] ? styles.active : ''}`} />
                  ))}
                </div>
                <div className={styles.crecimientoCardContent}>
                  <h3 className={styles.crecimientoCardTitle}>{card.titulo}</h3>
                  <p className={styles.crecimientoCardDescription}>{card.descripcion}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="proceso" className={styles.procesoSection} data-animate>
        <div className={styles.procesoHeader} id="proceso-target">
          <h2 className={styles.procesoTitle}>{data.procesoHeader ?? 'Nuestro Proceso de Trabajo'}</h2>
          <p className={styles.procesoSubtitle}>{data.procesoSubtitulo}</p>
        </div>
        <div className={styles.procesoTimeline}>
          {(data.procesoSteps ?? []).map((step, i) => (
            <div key={i} className={styles.procesoStep}>
              <div className={styles.procesoNumber}>{i + 1}</div>
              <h3 className={styles.procesoStepTitle}>{step.titulo}</h3>
              <p className={styles.procesoStepDescription}>{step.descripcion}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="innovacion" className={styles.innovacionSection} data-animate>
        <div className={styles.innovacionHeader} id="innovacion-target">
          <h2 className={styles.innovacionHeaderTitle}>{data.innovacionHeader ?? 'Innovación Constante'}</h2>
          <p className={styles.innovacionHeaderSubtitle}>{data.innovacionSubtitulo}</p>
        </div>
        <div className={styles.innovacionContainer}>
          <div className={styles.innovacionContent}>
            <div className={styles.innovacionFeatures}>
              {(data.innovacionFeatures ?? []).map((feature, i) => (
                <div key={i} className={styles.innovacionFeature}>
                  <div className={styles.featureIcon}>{feature.emoji}</div>
                  <div className={styles.featureText}>
                    <h4 className={styles.featureTitle}>{feature.titulo}</h4>
                    <p className={styles.featureDescription}>{feature.descripcion}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.innovacionImages}>
            <div className={styles.imageGrid}>
              {innovacionImagenes.map((image, i) => (
                <div key={i} className={styles.gridImage}>
                  <img src={image} alt={`Innovación ${i + 1}`} className={`${styles.gridCarouselImage} ${styles.active}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
