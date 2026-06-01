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

const herramientas = [
  { categoria: 'Publicidad', color: '#4ade80', tools: [
    { nombre: 'Google Ads', desc: 'Campañas de búsqueda y display', bg: '#e8f0fe', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#1a73e8" strokeWidth="2" strokeLinecap="round" /></svg> },
    { nombre: 'Meta Ads', desc: 'Facebook e Instagram Ads', bg: '#e7f3ff', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" fill="#1877f2" /><path d="M16 8h-2a1 1 0 00-1 1v2h3l-.5 3H13v7h-3v-7H8v-3h2V9a4 4 0 014-4h2v3z" fill="white" /></svg> },
    { nombre: 'LinkedIn Ads', desc: 'Publicidad B2B profesional', bg: '#f0f9ff', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="4" fill="#0077b5" /><path d="M6 8a2 2 0 100-4 2 2 0 000 4zm-2 2h4v10H4V10zm7 0h3.6v1.4c.5-.9 1.7-1.8 3.4-1.8C18.5 9.6 20 11 20 14v6h-4v-5.3c0-1.3-.5-2.2-1.6-2.2-.9 0-1.4.6-1.6 1.2-.1.2-.1.5-.1.8V20h-4V10z" fill="white" /></svg> },
  ]},
  { categoria: 'Analítica', color: '#60a5fa', tools: [
    { nombre: 'Google Analytics 4', desc: 'Métricas y comportamiento web', bg: '#fff3e0', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="2" fill="#f57c00" /><path d="M7 15l3-3 3 3 4-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> },
    { nombre: 'Semrush', desc: 'SEO, keywords y competencia', bg: '#fce4ec', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="4" fill="#e91e63" /><path d="M12 4l2 5h5l-4 3 1.5 5L12 14l-4.5 3 1.5-5L5 9h5z" fill="white" /></svg> },
    { nombre: 'Search Console', desc: 'Posicionamiento orgánico', bg: '#e8f5e9', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="4" fill="#4caf50" /><path d="M5 19h14M5 12h4v7H5zm5-5h4v12h-4zm5-3h4v15h-4z" stroke="white" strokeWidth="1.5" strokeLinecap="round" /></svg> },
  ]},
  { categoria: 'Diseño & Contenido', color: '#f472b6', tools: [
    { nombre: 'Canva', desc: 'Diseño visual y branding', bg: '#fff0f6', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="4" fill="#7c3aed" /><circle cx="12" cy="12" r="5" stroke="white" strokeWidth="2" /><circle cx="12" cy="12" r="2" fill="white" /></svg> },
    { nombre: 'Adobe Creative', desc: 'Photoshop, Illustrator, Premiere', bg: '#fdf4ff', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="4" fill="#ff7262" /><path d="M8 8h8M8 12h8M8 16h5" stroke="white" strokeWidth="2" strokeLinecap="round" /></svg> },
    { nombre: 'Later / Buffer', desc: 'Programación de contenido', bg: '#f0fdf4', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="4" fill="#00c875" /><path d="M7 12l3 3 7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> },
  ]},
  { categoria: 'Gestión & Redes', color: '#a78bfa', tools: [
    { nombre: 'Meta Business Suite', desc: 'Gestión de Facebook e Instagram', bg: '#f0f0ff', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="4" fill="#1877f2" /><path d="M16 8h-2a1 1 0 00-1 1v2h3l-.5 3H13v7h-3v-7H8v-3h2V9a4 4 0 014-4h2v3z" fill="white" /></svg> },
    { nombre: 'Later', desc: 'Programación de contenido', bg: '#f5f0ff', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="4" fill="#7c3aed" /><circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2" /><path d="M12 8v4l2 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" /></svg> },
    { nombre: 'Hootsuite', desc: 'Gestión multi-plataforma', bg: '#fff0f0', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="4" fill="#ef4444" /><path d="M7 12h10M7 8h10M7 16h6" stroke="white" strokeWidth="2" strokeLinecap="round" /></svg> },
  ]},
  { categoria: 'Automatización', color: '#34d399', tools: [
    { nombre: 'Zapier', desc: 'Automatización entre apps', bg: '#fff7f0', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="4" fill="#ff4a00" /><path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z" fill="white" /></svg> },
    { nombre: 'Make (Integromat)', desc: 'Flujos de trabajo automáticos', bg: '#f0fff8', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="4" fill="#00c9a7" /><circle cx="8" cy="12" r="2" fill="white" /><circle cx="16" cy="12" r="2" fill="white" /><path d="M10 12h4" stroke="white" strokeWidth="2" /></svg> },
    { nombre: 'n8n', desc: 'Automatización open source', bg: '#f5fff0', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="4" fill="#22c55e" /><path d="M8 12h8M12 8v8" stroke="white" strokeWidth="2" strokeLinecap="round" /></svg> },
  ]},
  { categoria: 'Email & CRM', color: '#fb923c', tools: [
    { nombre: 'Mailchimp', desc: 'Email marketing y automatización', bg: '#fff8e1', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="4" fill="#ffe01b" /><path d="M4 8l8 5 8-5M4 8v10h16V8M4 8h16" stroke="#1f1f1f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> },
    { nombre: 'HubSpot', desc: 'CRM y automatización de marketing', bg: '#fff5f0', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="4" fill="#ff7a59" /><circle cx="12" cy="12" r="4" fill="white" /><circle cx="12" cy="12" r="2" fill="#ff7a59" /></svg> },
    { nombre: 'ActiveCampaign', desc: 'Automatización avanzada de emails', bg: '#f0fff4', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="4" fill="#356ae6" /><path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> },
  ]},
];

interface ServicioItem { titulo: string; descripcion: string; items: string[]; }
interface FaqItem { pregunta: string; respuesta: string; }

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
  const [faqs, setFaqs] = useState<FaqItem[]>(DEFAULT_FAQS);

  useEffect(() => {
    getServiciosData().then((d: { servicios?: ServicioItem[]; faqItems?: FaqItem[]; integralImagenPrincipal?: string } | null) => {
      if (d?.servicios?.length) setServicios(d.servicios);
      if (d?.faqItems?.length) setFaqs(d.faqItems);
      if (d?.integralImagenPrincipal) setIntegralImg(d.integralImagenPrincipal);
    });
  }, []);

  return (
    <>
      <PageHero title="SERVICIOS" sectionId="servicios" page="servicios" showSubbrand={false}
        subtitle="Soluciones digitales completas para hacer crecer tu negocio y alcanzar tus objetivos."
        ctaText="Conocé nuestros servicios" pills={['Marketing Digital', 'Publicidad Paga', 'Branding']} />

      <section id="servicios-intro" className={styles.introSection} data-animate>
        <div className={styles.introLeft}>
          <span className={styles.introTag}>Lo que hacemos</span>
          <h2 className={styles.introTitle}>Estrategias digitales que mueven tu negocio.</h2>
          <p className={styles.introDesc}>Combinamos creatividad, tecnología y datos para diseñar soluciones que generan resultados reales y medibles para tu marca.</p>
        </div>
        <div className={styles.introRight}>
          <span className={styles.introTagDark}>Por qué Bravas</span>
          <h2 className={styles.introTitleDark}>Marketing claro, efectivo y orientado a resultados.</h2>
          <p className={styles.introDescDark}>No trabajamos con plantillas genéricas. Cada estrategia se diseña desde cero pensando en tu negocio, tu audiencia y tus objetivos.</p>
        </div>
      </section>

      <section id="servicios-nuestros" className={styles.nuestrosSection} data-animate>
        <div className={styles.nuestrosHeader} id="servicios-nuestros-target">
          <h2>Nuestros Servicios</h2>
          <p>Soluciones digitales completas diseñadas para hacer crecer tu negocio y alcanzar tus objetivos.</p>
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
          <h2>Soluciones Integrales de Marketing</h2>
          <p>Todo lo que tu marca necesita en un solo lugar para crecer de forma sostenible.</p>
        </div>
        <div className={styles.integralGrid}>
          <div className={styles.integralCardBig}>
            <div className={styles.integralCardBigImg}>
              <Image src={integralImg} alt="Gestión de Contenidos" width={500} height={180} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className={styles.integralCardBigBody}>
              <h3>Gestión de Contenidos & Redes</h3>
              <p>Creación de contenido estratégico y ejecución en plataformas sociales para engagement real y comunidades activas.</p>
            </div>
          </div>
          <div className={styles.integralCardRight}>
            <div className={styles.integralCardSm}><h3>Analítica y Growth</h3><p>Monitoreo de KPIs clave para optimizar decisiones y escalar resultados de forma continua.</p></div>
            <div className={styles.integralCardSm}><h3>Estrategia de Crecimiento</h3><p>Seguimiento continuo y estrategias para escalar tu negocio de forma sostenible y medible.</p></div>
          </div>
          <div className={styles.integralRowBottom}>
            <div className={styles.integralCardBot}><h3>Branding & Identidad</h3><p>Desarrollo de identidad visual y de marca sólida que conecta emocionalmente con tu audiencia.</p></div>
            <div className={styles.integralCardBot}><h3>Análisis & Métricas</h3><p>Evaluación de datos y reportes de rendimiento para tomar decisiones inteligentes.</p></div>
            <div className={styles.integralCardBot}><h3>SEO & Posicionamiento</h3><p>Mejora de visibilidad orgánica en motores de búsqueda para atraer más clientes.</p></div>
          </div>
        </div>
      </section>

      <section id="servicios-herramientas" className={styles.herramientasSection} data-animate>
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
                    <div className={styles.herToolIcon} style={{ background: tool.bg }}>{tool.icon}</div>
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
      </section>

      <FaqSection faqs={faqs} />
    </>
  );
}