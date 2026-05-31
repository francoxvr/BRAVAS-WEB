import { useEffect, useState } from 'react';
import { Mail, Instagram, MapPin } from 'lucide-react';
import PageHero from './PageHero';
import WhatsappIcon from '@/components/ui/WhatsappIcon';
import styles from './Contacto.module.css';
import { getContactoData } from '@/lib/queries';

const serviciosOpciones = [
  { value: '', label: 'Seleccioná una opción' },
  { value: 'estrategia', label: 'Estrategia digital integral' },
  { value: 'ads', label: 'Publicidad & performance (Google, Meta…)' },
  { value: 'branding', label: 'Branding e identidad' },
  { value: 'contenido', label: 'Contenido y redes sociales' },
  { value: 'analitica', label: 'Analítica, métricas y growth' },
  { value: 'otro', label: 'Otro / aún no lo definí' },
];

interface ContactoData {
  email?: string;
  whatsapp?: string;
  instagram?: string;
  linkedin?: string;
  direccion?: string;
}

const DEFAULT_CONTACTO: ContactoData = {
  email: 'info@bravas.com',
  whatsapp: '5493518564677',
  instagram: 'bravasmarketing',
  linkedin: 'https://www.linkedin.com/company/bravas-marketing',
  direccion: 'Córdoba, Argentina',
};

export default function Contacto() {
  const [contacto, setContacto] = useState<ContactoData>(DEFAULT_CONTACTO);
  const [formData, setFormData] = useState({ nombre: '', email: '', telefono: '', empresa: '', servicio: '', mensaje: '' });
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    getContactoData().then((d: ContactoData | null) => { if (d) setContacto({ ...DEFAULT_CONTACTO, ...d }); });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);
    setErrorMsg('');
    try {
      const res = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setEnviado(true);
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data.error || 'Ocurrió un error al enviar. Intentá nuevamente.');
      }
    } catch {
      setErrorMsg('No se pudo conectar con el servidor. Verificá tu conexión e intentá nuevamente.');
    } finally {
      setEnviando(false);
    }
  };

  return (
    <>
      <PageHero
        title="CONTACTO" page="contacto"
        sectionId="contacto"
        showSubbrand={false}
        subtitle="¿Listo para llevar tu marca al siguiente nivel? Contanos tu proyecto y arrancamos juntos."
        ctaText="Escribinos ahora"
        pills={['Respuesta en 24hs', 'Consulta sin costo', 'Sin compromiso']}
      />

      <section className={styles.contactoSection} data-animate id="contacto-form">
        <div className={styles.sheen} />
        <div className={styles.leftPanel}>
          <span className={styles.leftTag}>Hablemos</span>
          <h2 className={styles.leftTitle}>Contanos sobre tu proyecto.</h2>
          <p className={styles.leftDesc}>Completá el formulario y nos ponemos en contacto en menos de 24 horas para arrancar juntos.</p>
          <div className={styles.leftItems}>
            <div className={styles.leftItem}><span className={styles.leftItemDot} /><span>Respuesta en menos de 24hs</span></div>
            <div className={styles.leftItem}><span className={styles.leftItemDot} /><span>Primera consulta sin costo</span></div>
            <div className={styles.leftItem}><span className={styles.leftItemDot} /><span>Estrategia personalizada para tu negocio</span></div>
          </div>
          {/* Datos de contacto editables desde Tina */}
          <div className={styles.leftItems} style={{ marginTop: '1.5rem' }}>
            {contacto.email && (
              <a href={`mailto:${contacto.email}`} className={styles.leftContactLink}>
                <span className={styles.leftContactIcon}><Mail size={15} /></span>
                {contacto.email}
              </a>
            )}
            {contacto.whatsapp && (
              <a href={`https://wa.me/${contacto.whatsapp}`} target="_blank" rel="noopener noreferrer" className={styles.leftContactLink}>
                <span className={styles.leftContactIcon}><WhatsappIcon size={15} /></span>
                WhatsApp
              </a>
            )}
            {contacto.instagram && (
              <a href={`https://instagram.com/${contacto.instagram}`} target="_blank" rel="noopener noreferrer" className={styles.leftContactLink}>
                <span className={styles.leftContactIcon}><Instagram size={15} /></span>
                @{contacto.instagram}
              </a>
            )}
            {contacto.direccion && (
              <a href="https://maps.app.goo.gl/WA3gTMN16Wxp2jRJ9?g_st=ac" target="_blank" rel="noopener noreferrer" className={styles.leftContactLink}>
                <span className={styles.leftContactIcon}><MapPin size={15} /></span>
                {contacto.direccion}
              </a>
            )}
          </div>
        </div>

        <div className={styles.rightPanel}>
          {enviado ? (
            <div className={styles.successMsg}>
              <span className={styles.successIcon}>✓</span>
              <h3>¡Mensaje enviado!</h3>
              <p>Nos pondremos en contacto muy pronto.</p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Nombre y apellido *</label>
                  <input className={styles.input} type="text" name="nombre" placeholder="Ej. María González" value={formData.nombre} onChange={handleChange} required />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Correo electrónico *</label>
                  <input className={styles.input} type="email" name="email" placeholder="nombre@empresa.com" value={formData.email} onChange={handleChange} required />
                </div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Teléfono / WhatsApp</label>
                  <input className={styles.input} type="tel" name="telefono" placeholder="+54 9 ..." value={formData.telefono} onChange={handleChange} />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Empresa o marca</label>
                  <input className={styles.input} type="text" name="empresa" placeholder="Opcional" value={formData.empresa} onChange={handleChange} />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>¿Qué necesitás? *</label>
                <select className={styles.input} name="servicio" value={formData.servicio} onChange={handleChange} required>
                  {serviciosOpciones.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                </select>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Contanos más *</label>
                <textarea className={`${styles.input} ${styles.textarea}`} name="mensaje" placeholder="Objetivos, presupuesto aproximado, web actual, público al que apuntás..." value={formData.mensaje} onChange={handleChange} required rows={4} />
              </div>
              {errorMsg && (
                <p style={{ color: '#e05c5c', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{errorMsg}</p>
              )}
              <button className={styles.submitBtn} type="submit" disabled={enviando}>
                {enviando ? 'Enviando...' : 'Enviar mensaje →'}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
