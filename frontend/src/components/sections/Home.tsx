import { useEffect, useState } from 'react';
import styles from './Home.module.css';

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentEstrategiaIndex, setCurrentEstrategiaIndex] = useState(0);
  const [currentAnalisisIndex, setCurrentAnalisisIndex] = useState(0);
  const [currentCrecimientoIndex, setCurrentCrecimientoIndex] = useState(0);
  const [currentInnovacion1Index, setCurrentInnovacion1Index] = useState(0);
  const [currentInnovacion2Index, setCurrentInnovacion2Index] = useState(0);
  const [currentInnovacion3Index, setCurrentInnovacion3Index] = useState(0);
  
  // Array de imágenes del carrusel hero
  const carouselImages = [
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

  // Array de imágenes para la card de Estrategia Digital
  const estrategiaImages = [
    '/assets/images/marketing/estadistica2.png',
    '/assets/images/marketing/estrategia.png',
  ];

  // Array de imágenes para la card de Análisis de Datos
  const analisisImages = [
    '/assets/images/marketing/marketing1.png',
    '/assets/images/marketing/analisis.png',
  ];

  // Array de imágenes para la card de Crecimiento Sostenible
  const crecimientoImages = [
    '/assets/images/marketing/crecimiento.png',
    '/assets/images/marketing/innovamos1.png',
  ];

  // Arrays de imágenes para la sección de Innovación
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

  // Carrusel automático hero - cambia cada 6 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % carouselImages.length
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  // Carrusel automático para Estrategia Digital - cambia cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEstrategiaIndex((prevIndex) => 
        (prevIndex + 1) % estrategiaImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [estrategiaImages.length]);

  // Carrusel automático para Análisis de Datos - cambia cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAnalisisIndex((prevIndex) => 
        (prevIndex + 1) % analisisImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [analisisImages.length]);

  // Carrusel automático para Crecimiento Sostenible - cambia cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCrecimientoIndex((prevIndex) => 
        (prevIndex + 1) % crecimientoImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [crecimientoImages.length]);

  // Carrusel automático para Innovación Imagen 1 - cambia cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInnovacion1Index((prevIndex) => 
        (prevIndex + 1) % innovacion1Images.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [innovacion1Images.length]);

  // Carrusel automático para Innovación Imagen 2 - cambia cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInnovacion2Index((prevIndex) => 
        (prevIndex + 1) % innovacion2Images.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [innovacion2Images.length]);

  // Carrusel automático para Innovación Imagen 3 - cambia cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInnovacion3Index((prevIndex) => 
        (prevIndex + 1) % innovacion3Images.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [innovacion3Images.length]);

  return (
    <>
      {/* PRIMERA SECCIÓN - HERO */}
      <div className={styles.heroWrapper}>
        <section className={styles.heroSection} id="home">
          <div className={styles.heroContainer}>
            {/* TEXTO */}
            <div className={styles.heroText} id="home-target">
              <div className={styles.heroTitleBox}>
                <h1 className={styles.heroBrand}>BRAVAS</h1>
                <span className={styles.heroSubbrand}>M A R K E T I N G</span>
              </div>

              <p className={styles.heroSubtitle}>
                Transformamos tu presencia digital con estrategias innovadoras que
                hacen brillar tu marca.
              </p>

              {/* BOTÓN CTA */}
              <button className={styles.btnCta}>
                Impulsa tu Marca Ahora
              </button>

              {/* SERVICIOS (HIGHLIGHT) */}
              <div className={styles.heroServicesHighlight}>
                <span>Estrategia Digital</span>
                <i>·</i>
                <span>Branding</span>
                <i>·</i>
                <span>Performance Ads</span>
              </div>
            </div>

            {/* Placeholder grid */}
            <div className={styles.heroImagePlaceholder}></div>
          </div>
        </section>

        {/* CARRUSEL DE IMÁGENES */}
        <div className={styles.heroImageWrapper}>
          <div className={styles.heroImageCard}>
            {carouselImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Marketing Digital ${index + 1}`}
                className={`${styles.heroImage} ${
                  index === currentImageIndex ? styles.active : ''
                }`}
              />
            ))}
            
            {/* Indicadores del carrusel */}
            <div className={styles.carouselIndicators}>
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.indicator} ${
                    index === currentImageIndex ? styles.indicatorActive : ''
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                  aria-label={`Ir a imagen ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* SEGUNDA SECCIÓN - ENFOQUE INTEGRAL */}
      <section id="enfoque" data-animate className={styles.enfoqueSection}>
        <div className={styles.enfoqueHeader} id="enfoque-target">
          <h2 className={styles.enfoqueTitle}>Nuestro Enfoque</h2>
          <p className={styles.enfoqueSubtitle}>
            Combinamos estrategia, creatividad y tecnología para impulsar tu marca con soluciones digitales.
          </p>
        </div>

        <div className={styles.cardsGrid}>
          {/* Card 1 - Estrategia */}
          <div className={`${styles.serviceCard} ${styles.card1}`}>
            <div className={styles.cardIcon}>🎯</div>
            <h3 className={styles.cardTitle}>Estrategia Digital</h3>
            <p className={styles.cardDescription}>
              Planificación integral basada en objetivos medibles y análisis profundo de tu mercado para resultados sostenibles.
            </p>
          </div>

          {/* Card 2 - Branding */}
          <div className={`${styles.serviceCard} ${styles.card2}`}>
            <div className={styles.cardIcon}>✨</div>
            <h3 className={styles.cardTitle}>Branding & Identidad</h3>
            <p className={styles.cardDescription}>
              Creamos y fortalecemos la personalidad única de tu marca para destacar y conectar emocionalmente con tu audiencia.
            </p>
          </div>

          {/* Card 3 - Performance */}
          <div className={`${styles.serviceCard} ${styles.card3}`}>
            <div className={styles.cardIcon}>🚀</div>
            <h3 className={styles.cardTitle}>Performance Ads</h3>
            <p className={styles.cardDescription}>
              Campañas publicitarias optimizadas en Google, Meta y más plataformas con ROI comprobable y mejora continua.
            </p>
          </div>

          {/* Card 4 - Contenido */}
          <div className={`${styles.serviceCard} ${styles.card4}`}>
            <div className={styles.cardIcon}>💡</div>
            <h3 className={styles.cardTitle}>Contenido Creativo</h3>
            <p className={styles.cardDescription}>
              Social media, copywriting y diseño que capta la atención y construye relaciones auténticas con tus clientes.
            </p>
          </div>

          {/* Card 5 - Analítica */}
          <div className={`${styles.serviceCard} ${styles.card5}`}>
            <div className={styles.cardIcon}>📊</div>
            <h3 className={styles.cardTitle}>Analítica & Métricas</h3>
            <p className={styles.cardDescription}>
              Seguimiento continuo y reportes detallados para tomar decisiones inteligentes basadas en datos reales.
            </p>
          </div>

          {/* Card 6 - Growth */}
          <div className={`${styles.serviceCard} ${styles.card6}`}>
            <div className={styles.cardIcon}>📈</div>
            <h3 className={styles.cardTitle}>Growth Marketing</h3>
            <p className={styles.cardDescription}>
              Estrategias de crecimiento acelerado y optimización constante para escalar tu negocio de manera sostenible.
            </p>
          </div>
        </div>
      </section>

      {/* TERCERA SECCIÓN - CRECIMIENTO DIGITAL */}
      <section id="crecimiento" className={styles.crecimientoSection}>
        {/* Header */}
        <div className={styles.crecimientoHeader} id="crecimiento-target">
          <h2 className={styles.crecimientoTitle}>
            Impulsamos el crecimiento de tu negocio
          </h2>
          <p className={styles.crecimientoSubtitle}>
            Estrategias digitales claras y creativas que generan resultados reales para tu marca.
          </p>
        </div>

        {/* Grid de Cards */}
        <div className={styles.crecimientoGrid}>
          {/* Card 1 - Estrategia Digital con CARRUSEL */}
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

          {/* Card 2 - Análisis de Datos con CARRUSEL */}
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

          {/* Card 3 - Crecimiento Sostenible con CARRUSEL */}
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

      {/* CUARTA SECCIÓN - PROCESO DE TRABAJO */}
      <section id="proceso" className={styles.procesoSection}>
        {/* Header */}
        <div className={styles.procesoHeader} id="proceso-target">
          <h2 className={styles.procesoTitle}>
            Nuestro Proceso de Trabajo
          </h2>
          <p className={styles.procesoSubtitle}>
            Metodología probada en 4 fases para maximizar resultados.
          </p>
        </div>

        {/* Timeline horizontal */}
        <div className={styles.procesoTimeline}>
          {/* Paso 1 */}
          <div className={styles.procesoStep}>
            <div className={styles.procesoNumber}>1</div>
            <h3 className={styles.procesoStepTitle}>Análisis & Estrategia</h3>
            <p className={styles.procesoStepDescription}>
              Investigación profunda y definición de objetivos claros.
            </p>
          </div>

          {/* Paso 2 */}
          <div className={styles.procesoStep}>
            <div className={styles.procesoNumber}>2</div>
            <h3 className={styles.procesoStepTitle}>Diseño & Creatividad</h3>
            <p className={styles.procesoStepDescription}>
              Desarrollo de identidad visual y contenido estratégico.
            </p>
          </div>

          {/* Paso 3 */}
          <div className={styles.procesoStep}>
            <div className={styles.procesoNumber}>3</div>
            <h3 className={styles.procesoStepTitle}>Implementación</h3>
            <p className={styles.procesoStepDescription}>
              Ejecución de campañas en múltiples canales digitales.
            </p>
          </div>

          {/* Paso 4 */}
          <div className={styles.procesoStep}>
            <div className={styles.procesoNumber}>4</div>
            <h3 className={styles.procesoStepTitle}>Optimización</h3>
            <p className={styles.procesoStepDescription}>
              Medición continua y mejora basada en datos reales.
            </p>
          </div>
        </div>
      </section>

      {/* QUINTA SECCIÓN - INNOVACIÓN CONSTANTE */}
      <section id="innovacion" className={styles.innovacionSection}>
        {/* Header */}
        <div className={styles.innovacionHeader} id="innovacion-target">
          <h2 className={styles.innovacionHeaderTitle}>
            Innovación Constante
          </h2>
          <p className={styles.innovacionHeaderSubtitle}>
            Combinamos creatividad, tecnología y análisis de datos para crear estrategias que generan resultados.
          </p>
        </div>

        <div className={styles.innovacionContainer}>
          {/* Columna izquierda - Features */}
          <div className={styles.innovacionContent}>
            {/* Grid de características (6 cards) */}
            <div className={styles.innovacionFeatures}>
              {/* Feature 1 - Transformación Digital */}
              <div className={styles.innovacionFeature}>
                <div className={styles.featureIcon}>🚀</div>
                <div className={styles.featureText}>
                  <h4 className={styles.featureTitle}>Transformación Digital</h4>
                  <p className={styles.featureDescription}>
                    Combinamos creatividad, tecnología y análisis de datos para estrategias efectivas
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className={styles.innovacionFeature}>
                <div className={styles.featureIcon}>📊</div>
                <div className={styles.featureText}>
                  <h4 className={styles.featureTitle}>Estrategia 360°</h4>
                  <p className={styles.featureDescription}>
                    Integramos todos los canales digitales para maximizar tu alcance
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className={styles.innovacionFeature}>
                <div className={styles.featureIcon}>💡</div>
                <div className={styles.featureText}>
                  <h4 className={styles.featureTitle}>Innovación Constante</h4>
                  <p className={styles.featureDescription}>
                    Aplicamos las últimas tendencias y tecnología del marketing digital
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className={styles.innovacionFeature}>
                <div className={styles.featureIcon}>📈</div>
                <div className={styles.featureText}>
                  <h4 className={styles.featureTitle}>Resultados Medibles</h4>
                  <p className={styles.featureDescription}>
                    Cada acción está respaldada por datos y métricas concretas
                  </p>
                </div>
              </div>

              {/* Feature 5 */}
              <div className={styles.innovacionFeature}>
                <div className={styles.featureIcon}>🎯</div>
                <div className={styles.featureText}>
                  <h4 className={styles.featureTitle}>Enfoque Personalizado</h4>
                  <p className={styles.featureDescription}>
                    Cada estrategia se ajusta a las necesidades únicas de tu negocio
                  </p>
                </div>
              </div>

              {/* Feature 6 - Card a lo largo */}
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

          {/* Columna derecha - Grid de imágenes con CARRUSELES */}
          <div className={styles.innovacionImages}>
            <div className={styles.imageGrid}>
              {/* Imagen 1 - Carrusel */}
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
              
              {/* Imagen 2 - Carrusel */}
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
              
              {/* Imagen 3 - Carrusel */}
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
