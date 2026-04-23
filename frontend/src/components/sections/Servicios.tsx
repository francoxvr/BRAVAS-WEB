import {
  Monitor,
  TrendingUp,
  Megaphone,
  Mail,
  BarChart3,
  Palette
} from 'lucide-react';
import styles from './Servicios.module.css';

interface ServicioProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

function Servicio({ icon, title, children }: ServicioProps) {
  return (
    <div className={styles.servicioCard} data-animate>
      <div className={styles.servicioIcon}>{icon}</div>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}

export default function Servicios() {
  return (
    <>
      {/* HERO */}
      <section className={styles.heroSection} id="servicios" data-animate>
        <div className={styles.heroContainer}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>Servicios</h1>
            <p className={styles.heroSubtitle}>
              Soluciones digitales completas diseñadas para hacer crecer tu
              negocio y alcanzar tus objetivos.
            </p>

            <button className={styles.ctaButton}>
              Solicitar asesoría gratuita
            </button>

            <p className={styles.heroExtra}>
              🎯 Estrategia · 🚀 Crecimiento · 📊 Resultados
            </p>
          </div>

          <div className={styles.heroImage}>
            <img
              src="/assets/images/marketing/marketing10.jpg"
              alt="Servicios digitales profesionales"
              className={styles.fadeInImage}
            />
          </div>
        </div>
      </section>

      {/* LISTADO DE SERVICIOS */}
      <section className={styles.serviciosSection} data-animate>
        <div className={styles.serviciosGrid}>
          <Servicio icon={<TrendingUp size={44} />} title="Marketing Digital">
            Estrategias personalizadas para aumentar ventas y visibilidad online.
          </Servicio>

          <Servicio icon={<Monitor size={44} />} title="Diseño Web">
            Sitios modernos, rápidos y optimizados para convertir visitantes en clientes.
          </Servicio>

          <Servicio icon={<Megaphone size={44} />} title="Publicidad Digital">
            Campañas pagas en Google y redes sociales enfocadas en ROI.
          </Servicio>

          <Servicio icon={<Mail size={44} />} title="Email Marketing">
            Comunicación efectiva que fideliza y convierte clientes.
          </Servicio>

          <Servicio icon={<BarChart3 size={44} />} title="Analítica & Métricas">
            Datos claros y accionables para tomar mejores decisiones.
          </Servicio>

          <Servicio icon={<Palette size={44} />} title="Branding">
            Identidad visual coherente, memorable y profesional.
          </Servicio>
        </div>
      </section>

      {/* CTA FINAL */}
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

            <button className={styles.statsBadge}>
              💜 Contactar con Bravas
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
