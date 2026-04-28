import Link from 'next/link';
import Image from 'next/image';
import {
  Activity,
  Sun,
  ArrowUpRight,
} from 'lucide-react';
import styles from './Servicios.module.css';

function ClockIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#4e1a6b"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="12" x2="9" y2="8" />
      <line
        x1="12"
        y1="12"
        x2="12"
        y2="5"
        className="clockHand"
      />
    </svg>
  );
}

const nuestrosServicios = [
  {
    id: 1,
    titulo: 'Marketing Digital',
    descripcion:
      'Estrategias personalizadas para aumentar tu visibilidad y ventas en los canales digitales más efectivos.',
    items: [
      'Gestión de redes sociales',
      'SEO & posicionamiento',
      'Email marketing',
      'Copywriting & contenido',
    ],
    iconBg: '#f0e8fa',
    iconClass: '',
    icon: <ClockIcon />,
  },
  {
    id: 2,
    titulo: 'Publicidad Digital',
    descripcion:
      'Campañas pagas optimizadas en Google, Meta y más plataformas con ROI comprobable y mejora continua.',
    items: [
      'Google Ads & Search',
      'Meta Ads (Facebook/Instagram)',
      'Remarketing',
      'Reportes de performance',
    ],
    iconBg: '#fef5dc',
    iconClass: styles.iconPulse,
    icon: <Activity size={26} color="#b45309" />,
  },
  {
    id: 3,
    titulo: 'Branding & Identidad',
    descripcion:
      'Creamos y fortalecemos la personalidad única de tu marca para destacar y conectar emocionalmente con tu audiencia.',
    items: [
      'Identidad visual & logo',
      'Manual de marca',
      'Estrategia de posicionamiento',
      'Diseño gráfico',
    ],
    iconBg: '#fce7f3',
    iconClass: styles.iconSun,
    icon: <Sun size={26} color="#9d174d" />,
  },
  {
    id: 4,
    titulo: 'Analítica & Growth',
    descripcion:
      'Seguimiento continuo y estrategias de crecimiento acelerado con datos reales para escalar tu negocio de forma sostenible.',
    items: [
      'Google Analytics & Tag Manager',
      'Dashboards de métricas',
      'A/B testing',
      'Estrategia de crecimiento',
    ],
    iconBg: '#d1fae5',
    iconClass: styles.iconArrow,
    icon: <ArrowUpRight size={26} color="#065f46" />,
  },
];

export default function Servicios() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <div className={styles.heroWrapper}>
        <section className={styles.heroSection} id="servicios">
          <div className={styles.heroContainer}>
            <div className={styles.heroText}>
              <div className={styles.heroTitleBox}>
                <h1 className={styles.heroBrand}>SERVICIOS</h1>
              </div>
              <p className={styles.heroSubtitle}>
                Diseñamos, ejecutamos y optimizamos cada aspecto de tu
                presencia digital para que solo te preocupes por crecer.
              </p>
              <Link href="/contacto" className={styles.btnCta}>
                Conocer nuestros servicios
              </Link>
              <div className={styles.heroServicesHighlight}>
                <span>Marketing Digital</span>
                <i>•</i>
                <span>Publicidad</span>
                <i>•</i>
                <span>Branding</span>
              </div>
            </div>
            <div className={styles.heroImagePlaceholder}></div>
          </div>
        </section>

        <div className={styles.heroImageWrapper}>
          <div className={styles.heroImageCard}>
            <Image
              src="/assets/images/marketing/marketing10.jpg"
              alt="Servicios digitales profesionales"
              className={`${styles.heroImage} ${styles.active}`}
              width={550}
              height={370}
            />
          </div>
        </div>
      </div>

      {/* ── 4 bloques de servicios ────────────────────────────────────── */}
      <section className={styles.nuestrosSection} data-animate>
        <div className={styles.nuestrosInner}>
          <div className={styles.nuestrosHeader}>
            <h2>Nuestros Servicios</h2>
            <p>
              Soluciones digitales completas diseñadas para hacer crecer tu
              negocio y alcanzar tus objetivos.
            </p>
          </div>
          <div className={styles.nuestrosGrid}>
            {nuestrosServicios.map((s) => (
              <div key={s.id} className={styles.nuestroCard}>
                <div
                  className={`${styles.nuestroIconWrap} ${s.iconClass}`}
                  style={{ backgroundColor: s.iconBg }}
                >
                  {s.icon}
                </div>
                <h3>{s.titulo}</h3>
                <p>{s.descripcion}</p>
                <ul>
                  {s.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Soluciones Integrales ─────────────────────────────────────── */}
      <section className={styles.integralSection} data-animate>
        <div className={styles.integralInner}>
          <div className={styles.integralHeader}>
            <h2>Soluciones Integrales de Marketing</h2>
            <p>Todo lo que tu marca necesita en un solo lugar para crecer de forma sostenible.</p>
          </div>

          <div className={styles.integralGrid}>
            {/* Card grande con imagen */}
            <div className={styles.integralCardBig}>
              <div className={styles.integralCardBigImg}>
                <Image
                  src="/assets/images/marketing/marketing10.jpg"
                  alt="Gestión de Contenidos"
                  width={500}
                  height={200}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className={styles.integralCardBigBody}>
                <h3>Gestión de Contenidos & Redes</h3>
                <p>Creación de contenido estratégico y ejecución en plataformas sociales para engagement real y comunidades activas.</p>
              </div>
            </div>

            {/* Cards medianas derecha */}
            <div className={styles.integralCardRight}>
              <div className={styles.integralCardSm}>
                <h3>Analítica y Growth</h3>
                <p>Monitoreo de KPIs clave para optimizar decisiones y escalar resultados de forma continua.</p>
              </div>
              <div className={styles.integralCardSm}>
                <h3>Estrategia de Crecimiento</h3>
                <p>Seguimiento continuo y estrategias para escalar tu negocio de forma sostenible y medible.</p>
              </div>
            </div>

            {/* Fila de 3 cards abajo */}
            <div className={styles.integralRowBottom}>
              <div className={styles.integralCardBot}>
                <h3>Branding & Identidad</h3>
                <p>Desarrollo de identidad visual y de marca sólida que conecta emocionalmente con tu audiencia.</p>
              </div>
              <div className={styles.integralCardBot}>
                <h3>Análisis & Métricas</h3>
                <p>Evaluación de datos y reportes de rendimiento para tomar decisiones inteligentes.</p>
              </div>
              <div className={styles.integralCardBot}>
                <h3>SEO & Posicionamiento</h3>
                <p>Mejora de visibilidad orgánica en motores de búsqueda para atraer más clientes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA final ────────────────────────────────────────────────── */}
      <section className={styles.statsSection} data-animate>
        <div className={styles.statsContainer}>
          <div className={styles.statsContent}>
            <h2 className={styles.statsTitle}>
              ¿Listo para llevar tu marca al siguiente nivel?
            </h2>
            <p className={styles.statsDescription}>
              Trabajamos con enfoque estratégico, resultados medibles y
              compromiso total con tu éxito.
            </p>
            <Link href="/contacto" className={styles.statsBadge}>
              Contactar con Bravas
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}