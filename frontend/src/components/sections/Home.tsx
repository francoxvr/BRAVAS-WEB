import { useEffect, useState } from 'react';
import PageHero from './PageHero';
import styles from './Home.module.css';

export default function Home() {
  const [currentEstrategiaIndex, setCurrentEstrategiaIndex] = useState(0);
  const [currentAnalisisIndex, setCurrentAnalisisIndex] = useState(0);
  const [currentCrecimientoIndex, setCurrentCrecimientoIndex] = useState(0);
  const [currentInnovacion1Index, setCurrentInnovacion1Index] = useState(0);
  const [currentInnovacion2Index, setCurrentInnovacion2Index] = useState(0);
  const [currentInnovacion3Index, setCurrentInnovacion3Index] = useState(0);

  const estrategiaImages = [
    '/assets/images/marketing/estadistica2.png',
    '/assets/images/marketing/estrategia.png',
  ];

  const analisisImages = [
    '/assets/images/marketing/marketing1.png',
    '/assets/images/marketing/analisis.png',
  ];

  const crecimientoImages = [
    '/assets/images/marketing/crecimiento.png',
    '/assets/images/marketing/innovamos1.png',
  ];

  const innovacion1Images = [
    '/assets/images/marketing/marketing10.jpg',
    '/assets/images/marketing/marketing14.png',
  ];

  const innovacion2Images = [
    '/assets/images/marketing/marketing11.png',
    '/assets/images/marketing/marketing4.png',
  ];

  const innovacion3Images = [
    '/assets/images/marketing/estadistica1.png',
    '/assets/images/marketing/innovamos.png',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEstrategiaIndex((prevIndex) => (prevIndex + 1) % estrategiaImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [estrategiaImages.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAnalisisIndex((prevIndex) => (prevIndex + 1) % analisisImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [analisisImages.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCrecimientoIndex((prevIndex) => (prevIndex + 1) % crecimientoImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [crecimientoImages.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInnovacion1Index((prevIndex) => (prevIndex + 1) % innovacion1Images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [innovacion1Images.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInnovacion2Index((prevIndex) => (prevIndex + 1) % innovacion2Images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [innovacion2Images.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInnovacion3Index((prevIndex) => (prevIndex + 1) % innovacion3Images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [innovacion3Images.length]);

  return (
    <>
      <PageHero title="BRAVAS" sectionId="home" />

      <section id="enfoque" data-animate className={styles.enfoqueSection}>
        <div className={styles.enfoqueHeader} id="enfoque-target">
          <h2 className={styles.enfoqueTitle}>Nuestro Enfoque</h2>
          <p className={styles.enfoqueSubtitle}>
            Combinamos estrategia, creatividad y tecnología para impulsar tu marca con soluciones digitales.
          </p>
        </div>

        <div className={styles.cardsGrid}>
          <div className={`${styles.serviceCard} ${styles.card1}`}>
            <div className={styles.cardIcon}>🎯</div>
            <h3 className={styles.cardTitle}>Estrategia Digital</h3>
            <p className={styles.cardDescription}>
              Planificación integral basada en objetivos medibles y análisis profundo de tu mercado para resultados sostenibles.
            </p>
          </div>

          <div className={`${styles.serviceCard} ${styles.card2}`}>
            <div className={styles.cardIcon}>✨</div>
            <h3 className={styles.cardTitle}>Branding & Identidad</h3>
            <p className={styles.cardDescription}>
              Creamos y fortalecemos la personalidad única de tu marca para destacar y conectar emocionalmente con tu audiencia.
            </p>
          </div>

          <div className={`${styles.serviceCard} ${styles.card3}`}>
            <div className={styles.cardIcon}>🚀</div>
            <h3 className={styles.cardTitle}>Performance Ads</h3>
            <p className={styles.cardDescription}>
              Campañas publicitarias optimizadas en Google, Meta y más plataformas con ROI comprobable y mejora continua.
            </p>
          </div>

          <div className={`${styles.serviceCard} ${styles.card4}`}>
            <div className={styles.cardIcon}>💡</div>
            <h3 className={styles.cardTitle}>Contenido Creativo</h3>
            <p className={styles.cardDescription}>
              Social media, copywriting y diseño que capta la atención y construye relaciones auténticas con tus clientes.
            </p>
          </div>

          <div className={`${styles.serviceCard} ${styles.card5}`}>
            <div className={styles.cardIcon}>📊</div>
            <h3 className={styles.cardTitle}>Analítica & Métricas</h3>
            <p className={styles.cardDescription}>
              Seguimiento continuo y reportes detallados para tomar decisiones inteligentes basadas en datos reales.
            </p>
          </div>

          <div className={`${styles.serviceCard} ${styles.card6}`}>
            <div className={styles.cardIcon}>📈</div>
            <h3 className={styles.cardTitle}>Growth Marketing</h3>
            <p className={styles.cardDescription}>
              Estrategias de crecimiento acelerado y optimización constante para escalar tu negocio de manera sostenible.
            </p>
          </div>
        </div>
      </section>

      <section id="crecimiento" className={styles.crecimientoSection}>
        <div className={styles.crecimientoHeader} id="crecimiento-target">
          <h2 className={styles.crecimientoTitle}>
            Impulsamos el crecimiento de tu negocio
          </h2>
          <p className={styles.crecimientoSubtitle}>
            Estrategias digitales claras y creativas que generan resultados reales para tu marca.
          </p>
        </div>

        <div className={styles.crecimientoGrid}>
          <div className={styles.crecimientoCard}>
            <div className={styles.crecimientoCardImage}>
              {estrategiaImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Estrategia Digital ${index + 1}`}
                  className={`${styles.crecimientoImage} ${
                    index === currentEstrategiaIndex ? styles.active : ''
                  }`}
                />
              ))}
            </div>
            <div className={styles.crecimientoCardContent}>
              <h3 className={styles.crecimientoCardTitle}>Estrategia Digital</h3>
              <p className={styles.crecimientoCardDescription}>
                Diseñamos planes personalizados que conectan tu marca con tu audiencia objetivo.
              </p>
            </div>
          </div>

          <div className={styles.crecimientoCard}>
            <div className={styles.crecimientoCardImage}>
              {analisisImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Análisis de Datos ${index + 1}`}
                  className={`${styles.crecimientoImage} ${
                    index === currentAnalisisIndex ? styles.active : ''
                  }`}
                />
              ))}
            </div>
            <div className={styles.crecimientoCardContent}>
              <h3 className={styles.crecimientoCardTitle}>Análisis de Datos</h3>
              <p className={styles.crecimientoCardDescription}>
                Medimos y optimizamos cada acción para maximizar tu inversión.
              </p>
            </div>
          </div>

          <div className={styles.crecimientoCard}>
            <div className={styles.crecimientoCardImage}>
              {crecimientoImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Crecimiento Sostenible ${index + 1}`}
                  className={`${styles.crecimientoImage} ${
                    index === currentCrecimientoIndex ? styles.active : ''
                  }`}
                />
              ))}
            </div>
            <div className={styles.crecimientoCardContent}>
              <h3 className={styles.crecimientoCardTitle}>Crecimiento Sostenible</h3>
              <p className={styles.crecimientoCardDescription}>
                Construimos presencia digital que genera valor a largo plazo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="proceso" className={styles.procesoSection}>
        <div className={styles.procesoHeader} id="proceso-target">
          <h2 className={styles.procesoTitle}>
            Nuestro Proceso de Trabajo
          </h2>
          <p className={styles.procesoSubtitle}>
            Metodología probada en 4 fases para maximizar resultados.
          </p>
        </div>

        <div className={styles.procesoTimeline}>
          <div className={styles.procesoStep}>
            <div className={styles.procesoNumber}>1</div>
            <h3 className={styles.procesoStepTitle}>Análisis & Estrategia</h3>
            <p className={styles.procesoStepDescription}>
              Investigación profunda y definición de objetivos claros.
            </p>
          </div>

          <div className={styles.procesoStep}>
            <div className={styles.procesoNumber}>2</div>
            <h3 className={styles.procesoStepTitle}>Diseño & Creatividad</h3>
            <p className={styles.procesoStepDescription}>
              Desarrollo de identidad visual y contenido estratégico.
            </p>
          </div>

          <div className={styles.procesoStep}>
            <div className={styles.procesoNumber}>3</div>
            <h3 className={styles.procesoStepTitle}>Implementación</h3>
            <p className={styles.procesoStepDescription}>
              Ejecución de campañas en múltiples canales digitales.
            </p>
          </div>

          <div className={styles.procesoStep}>
            <div className={styles.procesoNumber}>4</div>
            <h3 className={styles.procesoStepTitle}>Optimización</h3>
            <p className={styles.procesoStepDescription}>
              Medición continua y mejora basada en datos reales.
            </p>
          </div>
        </div>
      </section>

      <section id="innovacion" className={styles.innovacionSection}>
        <div className={styles.innovacionHeader} id="innovacion-target">
          <h2 className={styles.innovacionHeaderTitle}>
            Innovación Constante
          </h2>
          <p className={styles.innovacionHeaderSubtitle}>
            Combinamos creatividad, tecnología y análisis de datos para crear estrategias que generan resultados.
          </p>
        </div>

        <div className={styles.innovacionContainer}>
          <div className={styles.innovacionContent}>
            <div className={styles.innovacionFeatures}>
              <div className={styles.innovacionFeature}>
                <div className={styles.featureIcon}>🚀</div>
                <div className={styles.featureText}>
                  <h4 className={styles.featureTitle}>Transformación Digital</h4>
                  <p className={styles.featureDescription}>
                    Combinamos creatividad, tecnología y análisis de datos para estrategias efectivas
                  </p>
                </div>
              </div>

              <div className={styles.innovacionFeature}>
                <div className={styles.featureIcon}>📊</div>
                <div className={styles.featureText}>
                  <h4 className={styles.featureTitle}>Estrategia 360°</h4>
                  <p className={styles.featureDescription}>
                    Integramos todos los canales digitales para maximizar tu alcance
                  </p>
                </div>
              </div>

              <div className={styles.innovacionFeature}>
                <div className={styles.featureIcon}>💡</div>
                <div className={styles.featureText}>
                  <h4 className={styles.featureTitle}>Innovación Constante</h4>
                  <p className={styles.featureDescription}>
                    Aplicamos las últimas tendencias y tecnología del marketing digital
                  </p>
                </div>
              </div>

              <div className={styles.innovacionFeature}>
                <div className={styles.featureIcon}>📈</div>
                <div className={styles.featureText}>
                  <h4 className={styles.featureTitle}>Resultados Medibles</h4>
                  <p className={styles.featureDescription}>
                    Cada acción está respaldada por datos y métricas concretas
                  </p>
                </div>
              </div>

              <div className={styles.innovacionFeature}>
                <div className={styles.featureIcon}>🎯</div>
                <div className={styles.featureText}>
                  <h4 className={styles.featureTitle}>Enfoque Personalizado</h4>
                  <p className={styles.featureDescription}>
                    Cada estrategia se ajusta a las necesidades únicas de tu negocio
                  </p>
                </div>
              </div>

              <div className={styles.innovacionFeature}>
                <div className={styles.featureIcon}>⚡</div>
                <div className={styles.featureText}>
                  <h4 className={styles.featureTitle}>Soporte Continuo</h4>
                  <p className={styles.featureDescription}>
                    Acompañamiento permanente y optimización constante para garantizar el éxito de tu proyecto
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.innovacionImages}>
            <div className={styles.imageGrid}>
              <div className={styles.gridImage}>
                {innovacion1Images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Innovación ${index + 1}`}
                    className={`${styles.gridCarouselImage} ${
                      index === currentInnovacion1Index ? styles.active : ''
                    }`}
                  />
                ))}
              </div>

              <div className={styles.gridImage}>
                {innovacion2Images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Innovación ${index + 1}`}
                    className={`${styles.gridCarouselImage} ${
                      index === currentInnovacion2Index ? styles.active : ''
                    }`}
                  />
                ))}
              </div>

              <div className={styles.gridImage}>
                {innovacion3Images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Innovación ${index + 1}`}
                    className={`${styles.gridCarouselImage} ${
                      index === currentInnovacion3Index ? styles.active : ''
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
