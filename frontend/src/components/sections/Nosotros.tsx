import { useEffect, useState } from 'react';
import Image from 'next/image';
import PageHero from './PageHero';
import homeStyles from './Home.module.css';
import styles from './Nosotros.module.css';
import { getNosotrosData } from '@/lib/queries';

interface NosotrosData {
  quienesTitulo?: string;
  quienesDesc1?: string;
  quienesDesc2?: string;
  statProyectos?: string;
  statSatisfaccion?: string;
  statAnios?: string;
  quienesImagen?: string;
  misionTitulo?: string;
  misionDesc?: string;
  visionTitulo?: string;
  visionDesc?: string;
  porqueItems?: string[];
  teamMembers?: TeamMember[];
}

interface TeamMember {
  nombre: string;
  rol: string;
  descripcion: string;
  foto?: string;
}

const DEFAULT_NOSOTROS: NosotrosData = {
  quienesTitulo: 'Somos Bravas.\nY lo damos todo.',
  quienesDesc1: 'Una agencia digital nacida con la misión de transformar marcas a través de estrategias creativas, datos y tecnología. Creemos que el marketing debe ser claro, medible y sobre todo, efectivo.',
  quienesDesc2: 'Trabajamos junto a cada cliente como si el negocio fuera nuestro. Con compromiso total y orientación a resultados desde el primer día.',
  statProyectos: '+150',
  statSatisfaccion: '92%',
  statAnios: '5+',
  misionTitulo: 'Potenciar marcas que dejan huella.',
  misionDesc: 'Diseñamos estrategias digitales claras, creativas y medibles que generan resultados reales y sostenibles para cada negocio que acompaña a Bravas.',
  visionTitulo: 'Ser el partner que toda marca necesita.',
  visionDesc: 'Convertirnos en el referente estratégico de PyMEs y emprendedores en Latinoamérica que buscan transformar su presencia digital con resultados reales.',
  porqueItems: [
    'Resultados medibles desde la primera semana',
    'Transparencia total en cada reporte',
    'Estrategia personalizada, no genérica',
    'Equipo ágil sin burocracia',
    'Comunicación directa y constante',
    'Foco en el largo plazo de tu negocio',
  ],
};

const DEFAULT_TEAM: TeamMember[] = [
  { nombre: 'Valentina Cruz', rol: 'Directora Creativa', descripcion: 'Lidera la visión creativa de cada proyecto con más de 8 años de experiencia en branding y comunicación digital.', foto: '/assets/images/marketing/marketing13.png' },
  { nombre: 'Matías Romero', rol: 'Especialista en Ads', descripcion: 'Experto en Google y Meta Ads con foco en maximizar el ROI de cada campaña publicitaria.', foto: '/assets/images/marketing/redes2.png' },
];

export default function Nosotros() {
  const [data, setData] = useState<NosotrosData>(DEFAULT_NOSOTROS);
  const [team, setTeam] = useState<TeamMember[]>(DEFAULT_TEAM);

  useEffect(() => {
    getNosotrosData().then((d: NosotrosData | null) => {
      if (!d) return;
      setData({ ...DEFAULT_NOSOTROS, ...d });
      if (d.teamMembers?.length) setTeam(d.teamMembers);
    });
  }, []);

  const tituloLines = (data.quienesTitulo ?? '').split('\n');

  return (
    <>
      <PageHero
        title="NOSOTROS" page="nosotros"
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
          <h2 className={styles.quienesTitle}>
            {tituloLines.map((line, i) => (
              <span key={i}>{line}{i < tituloLines.length - 1 && <br />}</span>
            ))}
          </h2>
          <p className={styles.quienesDesc}>{data.quienesDesc1}</p>
          <p className={styles.quienesDesc}>{data.quienesDesc2}</p>
          <div className={styles.quienesStats}>
            <div className={styles.quienesStat}>
              <span className={styles.quienesStatNum}>{data.statProyectos}</span>
              <span className={styles.quienesStatLabel}>proyectos</span>
            </div>
            <div className={styles.quienesStat}>
              <span className={styles.quienesStatNum}>{data.statSatisfaccion}</span>
              <span className={styles.quienesStatLabel}>satisfacción</span>
            </div>
            <div className={styles.quienesStat}>
              <span className={styles.quienesStatNum}>{data.statAnios}</span>
              <span className={styles.quienesStatLabel}>años</span>
            </div>
          </div>
        </div>
        <div className={styles.quienesImage}>
          <div className={styles.quienesImageInner}>
            <img
              src={data.quienesImagen ?? '/assets/images/marketing/redes4.png'}
              alt="Bravas Marketing"
              className={styles.quienesImg}
            />
          </div>
          <div className={styles.quienesImgBadge}>Marketing que transforma</div>
        </div>
      </section>

      <section className={styles.misionSection} data-animate id="nosotros-mision">
        <div className={styles.misionBlock}>
          <span className={styles.misionTag}>Misión</span>
          <h2 className={styles.misionTitle}>{data.misionTitulo}</h2>
          <p className={styles.misionDesc}>{data.misionDesc}</p>
        </div>
        <div className={styles.visionBlock}>
          <span className={styles.visionTag}>Visión</span>
          <h2 className={styles.visionTitle}>{data.visionTitulo}</h2>
          <p className={styles.visionDesc}>{data.visionDesc}</p>
        </div>
      </section>

      <section className={styles.nosSection} data-animate id="nosotros-equipo">
        <div className={homeStyles.enfoqueHeader} id="nosotros-equipo-target">
          <h2 className={homeStyles.enfoqueTitle}>Nuestro Equipo</h2>
          <p className={homeStyles.enfoqueSubtitle}>Las personas detrás de cada estrategia que transforma marcas.</p>
        </div>
        <div className={styles.teamGrid}>
          {team.map((member, i) => (
            <div key={i} className={styles.teamCard}>
              <div className={styles.teamPhoto}>
                <Image
                  src={member.foto ?? '/assets/images/marketing/redes4.png'}
                  alt={member.rol}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.teamBody}>
                <span className={styles.teamRole}>{member.rol}</span>
                <h3 className={styles.teamName}>{member.nombre}</h3>
                <p className={styles.teamDesc}>{member.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.porqueSection} data-animate id="nosotros-porque">
        <div className={styles.porqueSheen} />
        <span className={styles.porqueTag}>¿Por qué elegirnos?</span>
        <h2 className={styles.porqueTitulo}>Diferente desde<br />el primer día.</h2>
        <p className={styles.porqueSubtitle}>No somos una agencia más. Estas son las razones.</p>
        <div className={styles.porqueGrid}>
          {(data.porqueItems ?? []).map((texto, i) => (
            <div key={i} className={styles.porqueItem}>
              <span className={styles.porqueNum}>{String(i + 1).padStart(2, '0')}</span>
              <span className={styles.porqueTexto}>{texto}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}