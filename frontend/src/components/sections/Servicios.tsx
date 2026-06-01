import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Activity, Globe, BarChart3, TrendingUp } from 'lucide-react';
import PageHero from './PageHero';
import styles from './Servicios.module.css';
import { getServiciosData } from '@/lib/queries';

const iconConfig = [
  { iconBg: '#f0e8fa', iconClass: styles.iconTrend, icon: <TrendingUp size={26} color="#4e1a6b" /> },
  { iconBg: '#fef5dc', iconClass: styles.iconPulse, icon: <Activity size={26} color="#b45309" /> },
  { iconBg: '#dbeafe', iconClass: styles.iconGlobe, icon: <Globe size={26} color="#1d4ed8" /> },
  { iconBg: '#d1fae5', iconClass: styles.iconBar, icon: <BarChart3 size={26} color="#065f46" /> },
];

const DEFAULT_SERVICIOS = [
  { titulo: 'Marketing Digital', descripcion: 'Estrategias personalizadas para aumentar tu visibilidad y ventas en los canales digitales más efectivos.', items: ['Gestión de redes sociales', 'SEO & posicionamiento', 'Email marketing', 'Copywriting & contenido'] },
  { titulo: 'Publicidad Digital', descripcion: 'Campañas pagas optimizadas en Google, Meta y más plataformas con ROI comprobable y mejora continua.', items: ['Google Ads & Search', 'Meta Ads (Facebook/Instagram)', 'Remarketing', 'Reportes de performance'] },
  { titulo: 'Branding & Identidad', descripcion: 'Creamos y fortalecemos la personalidad única de tu marca para destacar y conectar emocionalmente con tu audiencia.', items: ['Identidad visual & logo', 'Manual de marca', 'Estrategia de posicionamiento', 'Diseño gráfico'] },
  { titulo: 'Analítica & Growth', descripcion: 'Seguimiento continuo y estrategias de crecimiento acelerado con datos reales para escalar tu negocio de forma sostenible.', items: ['Google Analytics & Tag Manager', 'Dashboards de métricas', 'A/B testing', 'Estrategia de crecimiento'] },
];

const DEFAULT_FAQS = [
  { pregunta: '¿Cuánto tiempo tarda en verse resultados?', respuesta: 'Depende de la estrategia, pero en campañas de publicidad paga los primeros resultados se ven entre 2 y 4 semanas. En SEO y contenido orgánico, el impacto significativo suele aparecer entre los 3 y 6 meses.' },
  { pregunta: '¿Qué incluye el servicio de gestión de redes sociales?', respuesta: 'Incluye creación de contenido (diseño + copywriting), programación de publicaciones, gestión de comentarios y mensajes, reportes mensuales de métricas y ajuste de estrategia según resultados.' },
  { pregunta: '¿Tienen contratos mínimos de permanencia?', respuesta: 'Manejamos contratos mensuales renovables. No exigimos permanencia mínima, aunque recomendamos al menos 3 meses para poder medir resultados reales y optimizar la estrategia.' },
  { pregunta: '¿Cómo es el proceso para empezar a trabajar juntos?', respuesta: 'Primero hacemos una consulta gratuita para entender tu negocio y objetivos. Luego preparamos una propuesta personalizada. Una vez aprobada, arrancamos con un onboarding donde definimos accesos, canales y el plan de acción.' },
  { pregunta: '¿Puedo ver reportes del trabajo que hacen?', respuesta: 'Sí, todos los clientes reciben reportes mensuales detallados con métricas clave, análisis de resultados y recomendaciones. También tenés acceso a dashboards en tiempo real según el servicio contratado.' },
];


interface ServicioItem { titulo: string; descripcion: string; items: string[]; }
interface FaqItem { pregunta: string; respuesta: string; }
interface IntegralCard { titulo: string; descripcion: string; }
interface Herramienta { nombre: string; descripcion: string; emoji: string; bg: string; }
interface HerramientaCategoria { categoria: string; color: string; herramientas: Herramienta[]; }
interface ServiciosData {
  servicios?: ServicioItem[];
  faqItems?: FaqItem[];
  integralImagenPrincipal?: string;
  integralCards?: IntegralCard[];
  herramientasCategorias?: HerramientaCategoria[];
  introTitulo?: string;
  introSubtitulo?: string;
  introDesc?: string;
  introPorqueTitulo?: string;
  introPorqueSubtitulo?: string;
  introPorqueDesc?: string;
  nuestrosServiciosTitulo?: string;
  nuestrosServiciosSubtitulo?: string;
  integralTitulo?: string;
  integralSubtitulo?: string;
  herramientasTitulo?: string;
  herramientasSubtitulo?: string;
}

const DEFAULT_INTEGRAL_CARDS: IntegralCard[] = [
  { titulo: 'Gestión de Contenidos & Redes', descripcion: 'Creación de contenido estratégico y ejecución en plataformas sociales para engagement real y comunidades activas.' },
  { titulo: 'Analítica y Growth', descripcion: 'Monitoreo de KPIs clave para optimizar decisiones y escalar resultados de forma continua.' },
  { titulo: 'Estrategia de Crecimiento', descripcion: 'Seguimiento continuo y estrategias para escalar tu negocio de forma sostenible y medible.' },
  { titulo: 'Branding & Identidad', descripcion: 'Desarrollo de identidad visual y de marca sólida que conecta emocionalmente con tu audiencia.' },
  { titulo: 'Análisis & Métricas', descripcion: 'Evaluación de datos y reportes de rendimiento para tomar decisiones inteligentes.' },
  { titulo: 'SEO & Posicionamiento', descripcion: 'Mejora de visibilidad orgánica en motores de búsqueda para atraer más clientes.' },
];

const DEFAULT_HERRAMIENTAS: HerramientaCategoria[] = [
  { categoria: 'Publicidad', color: '#4ade80', herramientas: [
    { nombre: 'Google Ads', descripcion: 'Campañas de búsqueda y display', emoji: '🔍', bg: '#e8f0fe' },
    { nombre: 'Meta Ads', descripcion: 'Facebook e Instagram Ads', emoji: '📘', bg: '#e7f3ff' },
    { nombre: 'LinkedIn Ads', descripcion: 'Publicidad B2B profesional', emoji: '💼', bg: '#f0f9ff' },
  ]},
  { categoria: 'Analítica', color: '#60a5fa', herramientas: [
    { nombre: 'Google Analytics 4', descripcion: 'Métricas y comportamiento web', emoji: '📊', bg: '#fff3e0' },
    { nombre: 'Semrush', descripcion: 'SEO, keywords y competencia', emoji: '🔎', bg: '#fce4ec' },
    { nombre: 'Search Console', descripcion: 'Posicionamiento orgánico', emoji: '📈', bg: '#e8f5e9' },
  ]},
  { categoria: 'Diseño & Contenido', color: '#f472b6', herramientas: [
    { nombre: 'Canva', descripcion: 'Diseño visual y branding', emoji: '🎨', bg: '#fff0f6' },
    { nombre: 'Adobe Creative', descripcion: 'Photoshop, Illustrator, Premiere', emoji: '✏️', bg: '#fdf4ff' },
    { nombre: 'Later / Buffer', descripcion: 'Programación de contenido', emoji: '📅', bg: '#f0fdf4' },
  ]},
  { categoria: 'Gestión & Redes', color: '#a78bfa', herramientas: [
    { nombre: 'Meta Business Suite', descripcion: 'Gestión de Facebook e Instagram', emoji: '📱', bg: '#f0f0ff' },
    { nombre: 'Later', descripcion: 'Programación de contenido', emoji: '⏰', bg: '#f5f0ff' },
    { nombre: 'Hootsuite', descripcion: 'Gestión multi-plataforma', emoji: '🛠️', bg: '#fff0f0' },
  ]},
  { categoria: 'Automatización', color: '#34d399', herramientas: [
    { nombre: 'Zapier', descripcion: 'Automatización entre apps', emoji: '⚡', bg: '#fff7f0' },
    { nombre: 'Make (Integromat)', descripcion: 'Flujos de trabajo automáticos', emoji: '🔄', bg: '#f0fff8' },
    { nombre: 'n8n', descripcion: 'Automatización open source', emoji: '🧩', bg: '#f5fff0' },
  ]},
  { categoria: 'Email & CRM', color: '#fb923c', herramientas: [
    { nombre: 'Mailchimp', descripcion: 'Email marketing y automatización', emoji: '📧', bg: '#fff8e1' },
    { nombre: 'HubSpot', descripcion: 'CRM y automatización de marketing', emoji: '🏆', bg: '#fff5f0' },
    { nombre: 'ActiveCampaign', descripcion: 'Automatización avanzada de emails', emoji: '🚀', bg: '#f0fff4' },
  ]},
];

function FaqSection({ faqs }: { faqs: FaqItem[] }) {
  const [abierto, setAbierto] = useState<number | null>(null);
  return (
    <section id="servicios-faq" className={styles.faqSection} data-animate>
      <div className={styles.faqHeader} id="servicios-faq-target">
        <h2>Preguntas Frecuentes</h2>
        <p>Todo lo que necesitás saber antes de empezar a trabajar con nosotros.</p>
      </div>
      <div className={styles.faqList}>
        {faqs.map((faq, i) => (
          <div key={i} className={`${styles.faqItem} ${abierto === i ? styles.faqItemOpen : ''}`} onClick={() => setAbierto(abierto === i ? null : i)}>
            <div className={styles.faqQuestion}>
              <span>{faq.pregunta}</span>
              <span className={styles.faqIcon}>{abierto === i ? '−' : '+'}</span>
            </div>
            {abierto === i && <div className={styles.faqAnswer}>{faq.respuesta}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Servicios() {
  const [servicios, setServicios] = useState<ServicioItem[]>(DEFAULT_SERVICIOS);
  const [integralImg, setIntegralImg] = useState<string>("/assets/images/marketing/marketing10.jpg");
  const [integralCards, setIntegralCards] = useState<IntegralCard[]>(DEFAULT_INTEGRAL_CARDS);
  const [herramientas, setHerramientas] = useState<HerramientaCategoria[]>(DEFAULT_HERRAMIENTAS);
  const [faqs, setFaqs] = useState<FaqItem[]>(DEFAULT_FAQS);
  const [textos, setTextos] = useState<ServiciosData>({});

  useEffect(() => {
    getServiciosData().then((d: ServiciosData | null) => {
      if (!d) return;
      if (d.servicios?.length) setServicios(d.servicios);
      if (d.faqItems?.length) setFaqs(d.faqItems);
      if (d.integralImagenPrincipal) setIntegralImg(d.integralImagenPrincipal);
      if (d.integralCards?.length) setIntegralCards(d.integralCards);
      if (d.herramientasCategorias?.length) setHerramientas(d.herramientasCategorias);
      setTextos(d);
    });
  }, []);

  return (
    <>
      <PageHero title="SERVICIOS" sectionId="servicios" page="servicios" showSubbrand={false}
        subtitle="Soluciones digitales completas para hacer crecer tu negocio y alcanzar tus objetivos."
        ctaText="Conocé nuestros servicios" pills={['Marketing Digital', 'Publicidad Paga', 'Branding']} />

      <section id="servicios-intro" className={styles.introSection} data-animate>
        <div className={styles.introLeft}>
          <span className={styles.introTag}>{textos.introTitulo ?? 'Lo que hacemos'}</span>
          <h2 className={styles.introTitle}>{textos.introSubtitulo ?? 'Estrategias digitales que mueven tu negocio.'}</h2>
          <p className={styles.introDesc}>{textos.introDesc ?? 'Combinamos creatividad, tecnología y datos para diseñar soluciones que generan resultados reales y medibles para tu marca.'}</p>
        </div>
        <div className={styles.introRight}>
          <span className={styles.introTagDark}>{textos.introPorqueTitulo ?? 'Por qué Bravas'}</span>
          <h2 className={styles.introTitleDark}>{textos.introPorqueSubtitulo ?? 'Marketing claro, efectivo y orientado a resultados.'}</h2>
          <p className={styles.introDescDark}>{textos.introPorqueDesc ?? 'No trabajamos con plantillas genéricas. Cada estrategia se diseña desde cero pensando en tu negocio, tu audiencia y tus objetivos.'}</p>
        </div>
      </section>

      <section id="servicios-nuestros" className={styles.nuestrosSection} data-animate>
        <div className={styles.nuestrosHeader} id="servicios-nuestros-target">
          <h2>{textos.nuestrosServiciosTitulo ?? 'Nuestros Servicios'}</h2>
          <p>{textos.nuestrosServiciosSubtitulo ?? 'Soluciones digitales completas diseñadas para hacer crecer tu negocio.'}</p>
        </div>
        <div className={styles.nuestrosGrid}>
          {servicios.map((s, i) => {
            const cfg = iconConfig[i] ?? iconConfig[0];
            return (
              <div key={i} className={styles.nuestroCard}>
                <div className={`${styles.nuestroIconWrap} ${cfg.iconClass}`} style={{ backgroundColor: cfg.iconBg }}>{cfg.icon}</div>
                <h3>{s.titulo}</h3>
                <ul>{s.items.map((item, j) => <li key={j}>{item}</li>)}</ul>
              </div>
            );
          })}
        </div>
      </section>

      <section id="servicios-integrales" className={styles.integralSection} data-animate>
        <div className={styles.integralHeader} id="servicios-integrales-target">
          <h2>{textos.integralTitulo ?? 'Soluciones Integrales de Marketing'}</h2>
          <p>{textos.integralSubtitulo ?? 'Todo lo que tu marca necesita en un solo lugar para crecer de forma sostenible.'}</p>
        </div>
        <div className={styles.integralGrid}>
          <div className={styles.integralCardBig}>
            <div className={styles.integralCardBigImg}>
              <Image src={integralImg || "/assets/images/marketing/marketing10.jpg"} alt={integralCards[0]?.titulo ?? ''} width={500} height={180} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className={styles.integralCardBigBody}>
              <h3>{integralCards[0]?.titulo}</h3>
              <p>{integralCards[0]?.descripcion}</p>
            </div>
          </div>
          <div className={styles.integralCardRight}>
            {integralCards.slice(1, 3).map((c, i) => (
              <div key={i} className={styles.integralCardSm}><h3>{c.titulo}</h3><p>{c.descripcion}</p></div>
            ))}
          </div>
          <div className={styles.integralRowBottom}>
            {integralCards.slice(3, 6).map((c, i) => (
              <div key={i} className={styles.integralCardBot}><h3>{c.titulo}</h3><p>{c.descripcion}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section id="servicios-herramientas" className={styles.herramientasSection} data-animate>
        <div className={styles.herramientasHeader} id="servicios-herramientas-target">
          <h2>{textos.herramientasTitulo ?? 'Herramientas que potencian tu marca'}</h2>
          <p>{textos.herramientasSubtitulo ?? 'Trabajamos con las plataformas líderes del mercado para garantizar resultados reales.'}</p>
        </div>
        <div className={styles.herramientasGrid}>
          {herramientas.map((cat) => (
            <div key={cat.categoria} className={styles.herCat}>
              <div className={styles.herCatTitle}>
                <span className={styles.herCatDot} style={{ background: cat.color }}></span>
                <span className={styles.herCatName}>{cat.categoria}</span>
              </div>
              <div className={styles.herTools}>
                {cat.herramientas.map((tool) => (
                  <div key={tool.nombre} className={styles.herTool}>
                    <div className={styles.herToolIcon} style={{ background: tool.bg, fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{tool.emoji}</div>
                    <div className={styles.herToolInfo}>
                      <p className={styles.herToolName}>{tool.nombre}</p>
                      <p className={styles.herToolDesc}>{tool.descripcion}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <FaqSection faqs={faqs} />
    </>
  );
}