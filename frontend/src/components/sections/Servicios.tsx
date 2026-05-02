import Link from 'next/link';
import Image from 'next/image';
import { Activity, Sun, ArrowUpRight } from 'lucide-react';
import PageHero from './PageHero';
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
      <line x1="12" y1="12" x2="12" y2="5" className="clockHand" />
    </svg>
  );
}

const nuestrosServicios = [
  {
    id: 1,
    titulo: 'Marketing Digital',
    descripcion: 'Estrategias personalizadas para aumentar tu visibilidad y ventas en los canales digitales más efectivos.',
    items: ['Gestión de redes sociales', 'SEO & posicionamiento', 'Email marketing', 'Copywriting & contenido'],
    iconBg: '#f0e8fa',
    iconClass: '',
    icon: <ClockIcon />,
  },
  {
    id: 2,
    titulo: 'Publicidad Digital',
    descripcion: 'Campañas pagas optimizadas en Google, Meta y más plataformas con ROI comprobable y mejora continua.',
    items: ['Google Ads & Search', 'Meta Ads (Facebook/Instagram)', 'Remarketing', 'Reportes de performance'],
    iconBg: '#fef5dc',
    iconClass: styles.iconPulse,
    icon: <Activity size={26} color="#b45309" />,
  },
  {
    id: 3,
    titulo: 'Branding & Identidad',
    descripcion: 'Creamos y fortalecemos la personalidad única de tu marca para destacar y conectar emocionalmente con tu audiencia.',
    items: ['Identidad visual & logo', 'Manual de marca', 'Estrategia de posicionamiento', 'Diseño gráfico'],
    iconBg: '#fce7f3',
    iconClass: styles.iconSun,
    icon: <Sun size={26} color="#9d174d" />,
  },
  {
    id: 4,
    titulo: 'Analítica & Growth',
    descripcion: 'Seguimiento continuo y estrategias de crecimiento acelerado con datos reales para escalar tu negocio de forma sostenible.',
    items: ['Google Analytics & Tag Manager', 'Dashboards de métricas', 'A/B testing', 'Estrategia de crecimiento'],
    iconBg: '#d1fae5',
    iconClass: styles.iconArrow,
    icon: <ArrowUpRight size={26} color="#065f46" />,
  },
];

const herramientas = [
  {
    categoria: 'Publicidad',
    color: '#4ade80',
    tools: [
      {
        nombre: 'Google Ads',
        desc: 'Campañas de búsqueda y display',
        bg: '#e8f0fe',
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#1a73e8" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        nombre: 'Meta Ads',
        desc: 'Facebook e Instagram Ads',
        bg: '#e7f3ff',
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="2" width="20" height="20" rx="5" fill="#1877f2" />
            <path d="M16 8h-2a1 1 0 00-1 1v2h3l-.5 3H13v7h-3v-7H8v-3h2V9a4 4 0 014-4h2v3z" fill="white" />
          </svg>
        ),
      },
      {
        nombre: 'LinkedIn Ads',
        desc: 'Publicidad B2B profesional',
        bg: '#f0f9ff',
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#0077b5" />
            <path d="M6 8a2 2 0 100-4 2 2 0 000 4zm-2 2h4v10H4V10zm7 0h3.6v1.4c.5-.9 1.7-1.8 3.4-1.8C18.5 9.6 20 11 20 14v6h-4v-5.3c0-1.3-.5-2.2-1.6-2.2-.9 0-1.4.6-1.6 1.2-.1.2-.1.5-.1.8V20h-4V10z" fill="white" />
          </svg>
        ),
      },
    ],
  },
  {
    categoria: 'Analítica',
    color: '#60a5fa',
    tools: [
      {
        nombre: 'Google Analytics 4',
        desc: 'Métricas y comportamiento web',
        bg: '#fff3e0',
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="2" fill="#f57c00" />
            <path d="M7 15l3-3 3 3 4-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
      {
        nombre: 'Semrush',
        desc: 'SEO, keywords y competencia',
        bg: '#fce4ec',
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#e91e63" />
            <path d="M12 4l2 5h5l-4 3 1.5 5L12 14l-4.5 3 1.5-5L5 9h5z" fill="white" />
          </svg>
        ),
      },
      {
        nombre: 'Search Console',
        desc: 'Posicionamiento orgánico',
        bg: '#e8f5e9',
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#4caf50" />
            <path d="M5 19h14M5 12h4v7H5zm5-5h4v12h-4zm5-3h4v15h-4z" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ),
      },
    ],
  },
  {
    categoria: 'Diseño & Contenido',
    color: '#f472b6',
    tools: [
      {
        nombre: 'Canva',
        desc: 'Diseño visual y branding',
        bg: '#fff0f6',
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#7c3aed" />
            <circle cx="12" cy="12" r="5" stroke="white" strokeWidth="2" />
            <circle cx="12" cy="12" r="2" fill="white" />
          </svg>
        ),
      },
      {
        nombre: 'Adobe Creative',
        desc: 'Photoshop, Illustrator, Premiere',
        bg: '#fdf4ff',
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#ff7262" />
            <path d="M8 8h8M8 12h8M8 16h5" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        nombre: 'Later / Buffer',
        desc: 'Programación de contenido',
        bg: '#f0fdf4',
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#00c875" />
            <path d="M7 12l3 3 7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
    ],
  },
  {
    categoria: 'Email & CRM',
    color: '#fb923c',
    tools: [
      {
        nombre: 'Mailchimp',
        desc: 'Email marketing y automatización',
        bg: '#fff8e1',
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#ffe01b" />
            <path d="M4 8l8 5 8-5M4 8v10h16V8M4 8h16" stroke="#1f1f1f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
      {
        nombre: 'HubSpot',
        desc: 'CRM y gestión de leads',
        bg: '#fff5f0',
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#ff5722" />
            <path d="M12 4C8 4 5 7 5 11c0 2.5 1.3 4.7 3.3 6l.7 3h6l.7-3C17.7 15.7 19 13.5 19 11c0-4-3-7-7-7z" fill="white" />
          </svg>
        ),
      },
      {
        nombre: 'ActiveCampaign',
        desc: 'Automatización avanzada',
        bg: '#f0f4ff',
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#3b5bdb" />
            <path d="M12 8v4l3 3" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <circle cx="12" cy="12" r="7" stroke="white" strokeWidth="1.5" />
          </svg>
        ),
      },
    ],
  },
  {
    categoria: 'Gestión & Proyectos',
    color: '#a78bfa',
    tools: [
      {
        nombre: 'Notion',
        desc: 'Documentación y estrategia',
        bg: '#f3f0ff',
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#6366f1" />
            <rect x="5" y="5" width="6" height="6" rx="1" fill="white" />
            <rect x="13" y="5" width="6" height="6" rx="1" fill="white" />
            <rect x="5" y="13" width="6" height="6" rx="1" fill="white" />
            <rect x="13" y="13" width="6" height="6" rx="1" fill="white" />
          </svg>
        ),
      },
      {
        nombre: 'Trello / Asana',
        desc: 'Gestión de campañas',
        bg: '#ecfdf5',
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#00b884" />
            <path d="M5 8h14M5 12h8M5 16h11" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        nombre: 'Slack',
        desc: 'Comunicación con el equipo',
        bg: '#fffbeb',
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#f59e0b" />
            <path d="M12 4l2 5h5l-4 3 1.5 5L12 14l-4.5 3 1.5-5L5 9h5z" fill="white" />
          </svg>
        ),
      },
    ],
  },
  {
    categoria: 'Automatización',
    color: '#34d399',
    tools: [
      {
        nombre: 'Zapier',
        desc: 'Integración entre plataformas',
        bg: '#fff0f0',
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#ff4a00" />
            <path d="M13 4L5 13h7l-1 7 8-9h-7l1-7z" fill="white" />
          </svg>
        ),
      },
      {
        nombre: 'Make (Integromat)',
        desc: 'Flujos de trabajo automáticos',
        bg: '#f0f9ff',
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#0284c7" />
            <path d="M12 4a8 8 0 100 16A8 8 0 0012 4zm0 3v5l3 3" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        nombre: 'Google Tag Manager',
        desc: 'Gestión de etiquetas y pixels',
        bg: '#f5f3ff',
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#7c3aed" />
            <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="4" y="4" width="16" height="16" rx="3" stroke="white" strokeWidth="1.5" />
          </svg>
        ),
      },
    ],
  },
];

export default function Servicios() {
  return (
    <>
      <PageHero title="SERVICIOS" sectionId="servicios" showSubbrand={false} />

      {/* ── 4 bloques ────────────────────────────────────────────────── */}
      <section id="servicios-nuestros" className={styles.nuestrosSection} data-animate>
        <div className={styles.nuestrosInner}>
          <div className={styles.nuestrosHeader} id="servicios-nuestros-target">
            <h2>Nuestros Servicios</h2>
            <p>Soluciones digitales completas diseñadas para hacer crecer tu negocio y alcanzar tus objetivos.</p>
          </div>
          <div className={styles.nuestrosGrid}>
            {nuestrosServicios.map((s) => (
              <div key={s.id} className={styles.nuestroCard}>
                <div className={`${styles.nuestroIconWrap} ${s.iconClass}`} style={{ backgroundColor: s.iconBg }}>
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
      <section id="servicios-integrales" className={styles.integralSection} data-animate>
        <div className={styles.integralInner}>
          <div className={styles.integralHeader} id="servicios-integrales-target">
            <h2>Soluciones Integrales de Marketing</h2>
            <p>Todo lo que tu marca necesita en un solo lugar para crecer de forma sostenible.</p>
          </div>
          <div className={styles.integralGrid}>
            <div className={styles.integralCardBig}>
              <div className={styles.integralCardBigImg}>
                <Image
                  src="/assets/images/marketing/marketing10.jpg"
                  alt="Gestión de Contenidos"
                  width={500}
                  height={180}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className={styles.integralCardBigBody}>
                <h3>Gestión de Contenidos & Redes</h3>
                <p>Creación de contenido estratégico y ejecución en plataformas sociales para engagement real y comunidades activas.</p>
              </div>
            </div>
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

      {/* ── Herramientas ─────────────────────────────────────────────── */}
      <section id="servicios-herramientas" className={styles.herramientasSection} data-animate>
        <div className={styles.herramientasInner}>
          <div className={styles.herramientasHeader} id="servicios-herramientas-target">
            <h2>Herramientas que potencian tu marca</h2>
            <p>Trabajamos con las plataformas líderes del mercado para garantizar resultados reales</p>
          </div>

          <div className={styles.herramientasGrid}>
            {herramientas.map((cat) => (
              <div key={cat.categoria} className={styles.herCat}>
                <div className={styles.herCatTitle}>
                  <span className={styles.herCatDot} style={{ background: cat.color }}></span>
                  <span className={styles.herCatName}>{cat.categoria}</span>
                </div>
                <div className={styles.herTools}>
                  {cat.tools.map((tool) => (
                    <div key={tool.nombre} className={styles.herTool}>
                      <div className={styles.herToolIcon} style={{ background: tool.bg }}>
                        {tool.icon}
                      </div>
                      <div className={styles.herToolInfo}>
                        <p className={styles.herToolName}>{tool.nombre}</p>
                        <p className={styles.herToolDesc}>{tool.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.herramientasBottom}>
            <div className={styles.herramientasBottomText}>
              <h3>+20 herramientas integradas en tu estrategia</h3>
              <p>Seleccionamos las mejores herramientas según los objetivos de cada cliente</p>
            </div>
            <Link href="/contacto" className={styles.herramientasBottomBadge}>
              Consultá sin costo
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA final ────────────────────────────────────────────────── */}
      <section id="servicios-contacto" className={styles.statsSection} data-animate>
        <div className={styles.statsContainer}>
          <div className={styles.statsContent} id="servicios-contacto-target">
            <h2 className={styles.statsTitle}>¿Listo para llevar tu marca al siguiente nivel?</h2>
            <p className={styles.statsDescription}>
              Trabajamos con enfoque estratégico, resultados medibles y compromiso total con tu éxito.
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
