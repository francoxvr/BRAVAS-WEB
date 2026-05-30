import Link from 'next/link';
import styles from './Legal.module.css';

export default function Legal() {
  return (
    <div className={styles.legalWrapper}>

      {/* HEADER */}
      <div className={styles.legalHero}>
        <h1 className={styles.legalHeroTitle}>Información Legal</h1>
        <p className={styles.legalHeroSub}>Política de Privacidad · Cookies · Términos y Condiciones · Mapa del Sitio</p>
        <nav className={styles.legalNav}>
          <a href="#privacidad">Política de Privacidad</a>
          <span>·</span>
          <a href="#cookies">Cookies</a>
          <span>·</span>
          <a href="#terminos">Términos y Condiciones</a>
          <span>·</span>
          <a href="#mapa">Mapa del Sitio</a>
        </nav>
      </div>

      <div className={styles.legalContent}>

        {/* POLÍTICA DE PRIVACIDAD */}
        <section id="privacidad" className={styles.legalSection}>
          <h2 className={styles.sectionTitle}>Política de Privacidad</h2>
          <p className={styles.lastUpdated}>Última actualización: mayo 2026</p>

          <div className={styles.block}>
            <h3>1. Información que recopilamos</h3>
            <p>Bravas Marketing recopila la información que usted nos proporciona voluntariamente a través del formulario de contacto de nuestro sitio web, incluyendo: nombre y apellido, dirección de correo electrónico, número de teléfono, nombre de empresa y el mensaje que nos envía.</p>
          </div>

          <div className={styles.block}>
            <h3>2. Uso de la información</h3>
            <p>La información recopilada se utiliza exclusivamente para responder a sus consultas, brindarle información sobre nuestros servicios y establecer una relación comercial con usted. No compartimos, vendemos ni cedemos sus datos personales a terceros sin su consentimiento expreso.</p>
          </div>

          <div className={styles.block}>
            <h3>3. Almacenamiento y seguridad</h3>
            <p>Sus datos son procesados de forma segura a través de nuestros sistemas. Implementamos medidas técnicas y organizativas razonables para proteger su información contra accesos no autorizados, pérdida o alteración.</p>
          </div>

          <div className={styles.block}>
            <h3>4. Sus derechos</h3>
            <p>Usted tiene derecho a acceder, rectificar, cancelar u oponerse al tratamiento de sus datos personales. Para ejercer estos derechos, puede contactarnos en <a href="mailto:bravasmarketingintegral@gmail.com">bravasmarketingintegral@gmail.com</a>.</p>
          </div>

          <div className={styles.block}>
            <h3>5. Contacto</h3>
            <p>Si tiene preguntas sobre esta política de privacidad, puede comunicarse con nosotros a través de nuestro <Link href="/contacto#contacto-form">formulario de contacto</Link> o al correo electrónico indicado.</p>
          </div>
        </section>

        <div className={styles.divider} />

        {/* COOKIES */}
        <section id="cookies" className={styles.legalSection}>
          <h2 className={styles.sectionTitle}>Política de Cookies</h2>
          <p className={styles.lastUpdated}>Última actualización: mayo 2026</p>

          <div className={styles.block}>
            <h3>¿Qué son las cookies?</h3>
            <p>Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web. Nos permiten recordar sus preferencias y mejorar su experiencia de navegación.</p>
          </div>

          <div className={styles.block}>
            <h3>Cookies que utilizamos</h3>
            <ul>
              <li><strong>Cookies técnicas:</strong> necesarias para el funcionamiento básico del sitio.</li>
              <li><strong>Cookies de análisis:</strong> nos ayudan a entender cómo los usuarios interactúan con el sitio (Google Analytics).</li>
              <li><strong>Cookies de preferencias:</strong> recuerdan sus ajustes, como el modo oscuro o claro.</li>
            </ul>
          </div>

          <div className={styles.block}>
            <h3>Control de cookies</h3>
            <p>Puede configurar su navegador para rechazar todas las cookies o para que le avise cuando se envía una cookie. Sin embargo, si deshabilita las cookies, algunas funcionalidades del sitio pueden no estar disponibles.</p>
          </div>
        </section>

        <div className={styles.divider} />

        {/* TÉRMINOS Y CONDICIONES */}
        <section id="terminos" className={styles.legalSection}>
          <h2 className={styles.sectionTitle}>Términos y Condiciones</h2>
          <p className={styles.lastUpdated}>Última actualización: mayo 2026</p>

          <div className={styles.block}>
            <h3>1. Aceptación de los términos</h3>
            <p>Al acceder y utilizar el sitio web de Bravas Marketing, usted acepta cumplir con estos términos y condiciones. Si no está de acuerdo con alguno de ellos, le solicitamos que no utilice nuestro sitio.</p>
          </div>

          <div className={styles.block}>
            <h3>2. Servicios</h3>
            <p>Bravas Marketing ofrece servicios de marketing digital, incluyendo estrategia digital, publicidad en redes sociales, branding, contenido y analítica. Los detalles específicos de cada servicio son acordados individualmente con cada cliente mediante contrato escrito.</p>
          </div>

          <div className={styles.block}>
            <h3>3. Propiedad intelectual</h3>
            <p>Todo el contenido de este sitio web (textos, imágenes, logotipos, diseños) es propiedad de Bravas Marketing o de sus respectivos titulares, y está protegido por las leyes de propiedad intelectual aplicables en la República Argentina.</p>
          </div>

          <div className={styles.block}>
            <h3>4. Limitación de responsabilidad</h3>
            <p>Bravas Marketing no se responsabiliza por daños directos o indirectos derivados del uso o imposibilidad de uso de este sitio web, ni de los resultados obtenidos a través de los servicios contratados más allá de lo establecido en cada contrato.</p>
          </div>

          <div className={styles.block}>
            <h3>5. Legislación aplicable</h3>
            <p>Estos términos se rigen por las leyes de la República Argentina. Cualquier controversia será sometida a los tribunales competentes de la ciudad de Córdoba, Argentina.</p>
          </div>
        </section>

        <div className={styles.divider} />

        {/* MAPA DEL SITIO */}
        <section id="mapa" className={styles.legalSection}>
          <h2 className={styles.sectionTitle}>Mapa del Sitio</h2>

          <div className={styles.sitemapGrid}>
            <div className={styles.sitemapCard}>
              <h3><Link href="/">🏠 Home</Link></h3>
              <ul>
                <li><Link href="/#home">Inicio</Link></li>
                <li><Link href="/#propuesta">Nuestra Propuesta</Link></li>
                <li><Link href="/#enfoque">Nuestro Enfoque</Link></li>
                <li><Link href="/#crecimiento">Casos de Crecimiento</Link></li>
                <li><Link href="/#proceso">Proceso de Trabajo</Link></li>
                <li><Link href="/#innovacion">Innovación</Link></li>
              </ul>
            </div>

            <div className={styles.sitemapCard}>
              <h3><Link href="/servicios">⚙️ Servicios</Link></h3>
              <ul>
                <li><Link href="/servicios#servicios-intro">Lo que hacemos</Link></li>
                <li><Link href="/servicios#servicios-nuestros">Nuestros Servicios</Link></li>
                <li><Link href="/servicios#servicios-integrales">Soluciones Integrales</Link></li>
                <li><Link href="/servicios#servicios-herramientas">Herramientas</Link></li>
                <li><Link href="/servicios#servicios-faq">Preguntas Frecuentes</Link></li>
              </ul>
            </div>

            <div className={styles.sitemapCard}>
              <h3><Link href="/nosotros">👥 Nosotros</Link></h3>
              <ul>
                <li><Link href="/nosotros#nosotros-quienes">Quiénes Somos</Link></li>
                <li><Link href="/nosotros#nosotros-mision">Misión y Visión</Link></li>
                <li><Link href="/nosotros#nosotros-equipo">Nuestro Equipo</Link></li>
                <li><Link href="/nosotros#nosotros-porque">Por Qué Elegirnos</Link></li>
              </ul>
            </div>

            <div className={styles.sitemapCard}>
              <h3><Link href="/contacto">📞 Contacto</Link></h3>
              <ul>
                <li><Link href="/contacto#contacto-form">Formulario de Contacto</Link></li>
                <li><a href="mailto:bravasmarketingintegral@gmail.com">Email</a></li>
                <li><a href="https://wa.me/5493518564677" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              </ul>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
