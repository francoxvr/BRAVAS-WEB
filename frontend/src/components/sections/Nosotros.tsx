import Image from 'next/image';
import PageHero from './PageHero';
import homeStyles from './Home.module.css';
import styles from './Nosotros.module.css';

export default function Nosotros() {
  return (
    <>
      <PageHero
        title="NOSOTROS"
        sectionId="nosotros"
        showSubbrand={false}
        subtitle="Conocé el equipo detrás de cada estrategia y por qué somos el partner ideal para tu marca."
        ctaText="Hablemos de tu proyecto"
        pills={['Equipo apasionado', 'Resultados reales', 'Compromiso total']}
      />
      <section className={styles.quienesSection} data-animate id="nosotros-quienes">
        <div className={styles.quienesOrbe1} />
        <div className={styles.quienesOrbe2} />
        <div className={styles.quienesSheen} />
        <div className={styles.quienesText}>
          <span className={styles.quienesTag}>Quiénes somos</span>
          <h2 className={styles.quienesTitle}>Somos Bravas.<br />Y lo damos todo.</h2>
          <p className={styles.quienesDesc}>
            Una agencia digital nacida con la misión de transformar marcas a través de estrategias creativas, datos y tecnología. Creemos que el marketing debe ser claro, medible y sobre todo, efectivo.
          </p>
          <p className={styles.quienesDesc}>
            Trabajamos junto a cada cliente como si el negocio fuera nuestro. Con compromiso total y orientación a resultados desde el primer día.
          </p>
          <div className={styles.quienesStats}>
            <div className={styles.quienesStat}>
              <span className={styles.quienesStatNum}>+150</span>
              <span className={styles.quienesStatLabel}>proyectos</span>
            </div>
            <div className={styles.quienesStat}>
              <span className={styles.quienesStatNum}>92%</span>
              <span className={styles.quienesStatLabel}>satisfacción</span>
            </div>
            <div className={styles.quienesStat}>
              <span className={styles.quienesStatNum}>5+</span>
              <span className={styles.quienesStatLabel}>años</span>
            </div>
          </div>
        </div>
        <div className={styles.quienesImage}>
          <div className={styles.quienesImageInner}>
            <img src="/assets/images/marketing/marketing12.png" alt="Bravas Marketing" className={styles.quienesImg} />
          </div>
          <div className={styles.quienesImgBadge}>Marketing que transforma</div>
        </div>
      </section>
      <section className={styles.misionSection} data-animate id="nosotros-mision">
        <div className={styles.misionBlock}>
          <span className={styles.misionTag}>Misión</span>
          <h2 className={styles.misionTitle}>Potenciar marcas que dejan huella.</h2>
          <p className={styles.misionDesc}>Diseñamos estrategias digitales claras, creativas y medibles que generan resultados reales y sostenibles para cada negocio que acompaña a Bravas.</p>
        </div>
        <div className={styles.visionBlock}>
          <span className={styles.visionTag}>Visión</span>
          <h2 className={styles.visionTitle}>Ser el partner que toda marca necesita.</h2>
          <p className={styles.visionDesc}>Convertirnos en el referente estratégico de PyMEs y emprendedores en Latinoamérica que buscan transformar su presencia digital con resultados reales.</p>
        </div>
      </section>

      <section className={styles.nosSection} data-animate id="nosotros-equipo">
        <div className={homeStyles.enfoqueHeader} id="nosotros-equipo-target">
          <h2 className={homeStyles.enfoqueTitle}>Nuestro Equipo</h2>
          <p className={homeStyles.enfoqueSubtitle}>Las personas detrás de cada estrategia que transforma marcas.</p>
        </div>
        <div className={styles.teamGrid}>
          <div className={styles.teamCard}>
            <div className={styles.teamPhoto}>
              <Image src="/assets/images/marketing/marketing13.png" alt="Directora Creativa" fill style={{objectFit:'cover'}} />
            </div>
            <div className={styles.teamBody}>
              <span className={styles.teamRole}>Directora Creativa</span>
              <h3 className={styles.teamName}>Valentina Cruz</h3>
              <p className={styles.teamDesc}>Lidera la visión creativa de cada proyecto con más de 8 años de experiencia en branding y comunicación digital.</p>
            </div>
          </div>
          <div className={styles.teamCard}>
            <div className={styles.teamPhoto}>
              <Image src="/assets/images/marketing/marketing12.png" alt="Especialista en Ads" fill style={{objectFit:'cover'}} />
            </div>
            <div className={styles.teamBody}>
              <span className={styles.teamRole}>Especialista en Ads</span>
              <h3 className={styles.teamName}>Matías Romero</h3>
              <p className={styles.teamDesc}>Experto en Google y Meta Ads con foco en maximizar el ROI de cada campaña publicitaria.</p>
            </div>
          </div>
          <div className={styles.teamCard}>
            <div className={styles.teamPhoto}>
              <Image src="/assets/images/marketing/redes2.png" alt="Estratega de Contenido" fill style={{objectFit:'cover'}} />
            </div>
            <div className={styles.teamBody}>
              <span className={styles.teamRole}>Estratega de Contenido</span>
              <h3 className={styles.teamName}>Lucía Fernández</h3>
              <p className={styles.teamDesc}>Crea contenido que conecta marcas con audiencias de forma auténtica y construye comunidades activas.</p>
            </div>
          </div>
          <div className={styles.teamCard}>
            <div className={styles.teamPhoto}>
              <Image src="/assets/images/marketing/analisis.png" alt="Analista de Datos" fill style={{objectFit:'cover'}} />
            </div>
            <div className={styles.teamBody}>
              <span className={styles.teamRole}>Analista de Datos</span>
              <h3 className={styles.teamName}>Tomás Quiroga</h3>
              <p className={styles.teamDesc}>Convierte métricas en decisiones estratégicas que impulsan el crecimiento de cada marca.</p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.porqueSection} data-animate id="nosotros-porque">
        <div className={styles.porqueSheen} />
        <span className={styles.porqueTag}>¿Por qué elegirnos?</span>
        <h2 className={styles.porqueTitulo}>Diferente desde<br />el primer día.</h2>
        <p className={styles.porqueSubtitle}>No somos una agencia más. Estas son las razones.</p>
        <div className={styles.porqueGrid}>
          {[
            { num: '01', texto: 'Resultados medibles desde la primera semana' },
            { num: '02', texto: 'Transparencia total en cada reporte' },
            { num: '03', texto: 'Estrategia personalizada, no genérica' },
            { num: '04', texto: 'Equipo ágil sin burocracia' },
            { num: '05', texto: 'Comunicación directa y constante' },
            { num: '06', texto: 'Foco en el largo plazo de tu negocio' },
          ].map((item) => (
            <div key={item.num} className={styles.porqueItem}>
              <span className={styles.porqueNum}>{item.num}</span>
              <span className={styles.porqueTexto}>{item.texto}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}