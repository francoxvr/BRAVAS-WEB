import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Legal.module.css';
import { getLegalData } from '@/lib/queries';

interface Bloque { titulo: string; contenido: string; }
interface SeccionLegal { bloques?: Bloque[]; }
interface LegalData {
  privacidad?: SeccionLegal;
  cookies?: SeccionLegal;
  terminos?: SeccionLegal;
}

const DEFAULT: LegalData = {
  privacidad: { bloques: [
    { titulo: '1. Información que recopilamos', contenido: 'Bravas Marketing recopila la información que usted nos proporciona voluntariamente a través del formulario de contacto.' },
    { titulo: '2. Uso de la información', contenido: 'La información recopilada se utiliza exclusivamente para responder a sus consultas y brindarle información sobre nuestros servicios.' },
  ]},
  cookies: { bloques: [
    { titulo: '¿Qué son las cookies?', contenido: 'Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web.' },
  ]},
  terminos: { bloques: [
    { titulo: '1. Aceptación de los términos', contenido: 'Al acceder y utilizar el sitio web de Bravas Marketing, usted acepta cumplir con estos términos y condiciones.' },
  ]},
};

function Seccion({ bloques }: { bloques?: Bloque[] }) {
  return (
    <>
      {(bloques ?? []).map((b, i) => (
        <div key={i} className={styles.block}>
          <h3>{b.titulo}</h3>
          <p>{b.contenido}</p>
        </div>
      ))}
    </>
  );
}

export default function Legal() {
  const [data, setData] = useState<LegalData>(DEFAULT);

  useEffect(() => {
    getLegalData().then((d: LegalData | null) => {
      if (d) setData({ ...DEFAULT, ...d });
    });
  }, []);

  return (
    <div className={styles.legalWrapper}>

      <div className={styles.legalHero}>
        <h1 className={styles.legalHeroTitle}>Información Legal</h1>
      </div>

      <div className={styles.legalContent}>

        <section id="privacidad" className={styles.legalSection}>
          <h2 className={styles.sectionTitle}>Política de Privacidad</h2>
          <p className={styles.lastUpdated}>Última actualización: mayo 2026</p>
          <Seccion bloques={data.privacidad?.bloques} />
        </section>

        <div className={styles.divider} />

        <section id="cookies" className={styles.legalSection}>
          <h2 className={styles.sectionTitle}>Política de Cookies</h2>
          <p className={styles.lastUpdated}>Última actualización: mayo 2026</p>
          <Seccion bloques={data.cookies?.bloques} />
        </section>

        <div className={styles.divider} />

        <section id="terminos" className={styles.legalSection}>
          <h2 className={styles.sectionTitle}>Términos y Condiciones</h2>
          <p className={styles.lastUpdated}>Última actualización: mayo 2026</p>
          <Seccion bloques={data.terminos?.bloques} />
        </section>

        <div className={styles.divider} />

        <section id="mapa" className={styles.legalSection}>
          <h2 className={styles.sectionTitle}>Mapa del Sitio</h2>
          <div className={styles.sitemapGrid}>
            <div className={styles.sitemapCard}>
              <h3><Link href="/">🏠 Home</Link></h3>
              <ul>
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
