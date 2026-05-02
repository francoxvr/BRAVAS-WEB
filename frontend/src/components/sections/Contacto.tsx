import { useState } from 'react';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import PageHero from './PageHero';
import WhatsappIcon from '@/components/ui/WhatsappIcon';
import { SOCIAL_URLS } from '@/constants/socialUrls';
import homeStyles from './Home.module.css';
import styles from './Contacto.module.css';

const serviciosOpciones = [
  { value: '', label: 'Seleccioná una opción' },
  { value: 'estrategia', label: 'Estrategia digital integral' },
  { value: 'ads', label: 'Publicidad & performance (Google, Meta…)' },
  { value: 'branding', label: 'Branding e identidad' },
  { value: 'contenido', label: 'Contenido y redes sociales' },
  { value: 'analitica', label: 'Analítica, métricas y growth' },
  { value: 'otro', label: 'Otro / aún no lo definí' },
];

const urgenciaOpciones = [
  { value: '', label: '¿Cuándo te gustaría arrancar?' },
  { value: 'ya', label: 'Lo antes posible' },
  { value: 'mes', label: 'En las próximas semanas' },
  { value: 'explorando', label: 'Solo estoy explorando' },
];

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    servicio: '',
    urgencia: '',
    mensaje: '',
    aceptaPrivacidad: false,
  });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.aceptaPrivacidad) return;

    const subject = encodeURIComponent(
      `Consulta web — ${formData.nombre || 'Cliente'} (${formData.servicio || 'sin servicio'})`
    );
    const body = encodeURIComponent(
      [
        `Nombre: ${formData.nombre}`,
        `Email: ${formData.email}`,
        `Teléfono: ${formData.telefono || '—'}`,
        `Empresa / marca: ${formData.empresa || '—'}`,
        `Interés: ${serviciosOpciones.find((o) => o.value === formData.servicio)?.label || '—'}`,
        `Plazo: ${urgenciaOpciones.find((o) => o.value === formData.urgencia)?.label || '—'}`,
        '',
        'Mensaje:',
        formData.mensaje,
      ].join('\n')
    );

    window.location.href = `mailto:info@bravas.com?subject=${subject}&body=${body}`;
    setEnviado(true);
    setTimeout(() => setEnviado(false), 5000);
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      empresa: '',
      servicio: '',
      urgencia: '',
      mensaje: '',
      aceptaPrivacidad: false,
    });
  };

  return (
    <>
      <PageHero title="CONTACTO" sectionId="contacto" showSubbrand={false} />

      <section className={`${homeStyles.enfoqueSection} ${styles.contactoFormSection}`} id="contacto-form">
        <div className={homeStyles.enfoqueHeader} id="contacto-form-target">
          <h2 className={homeStyles.enfoqueTitle}>Escribinos</h2>
          <p className={`${homeStyles.enfoqueSubtitle} ${styles.enfoqueSubtitleWrap}`}>
            Contanos tu idea o tu desafío. Respondemos por correo en menos de 24 horas hábiles.
          </p>
        </div>

        <div className={styles.formShell}>
          {enviado && (
            <div className={styles.noticeOk} role="status">
              Abrimos tu cliente de correo para que envíes el mensaje. Si no se abre, escribinos a{' '}
              <a href="mailto:info@bravas.com">info@bravas.com</a>.
            </div>
          )}

          <form className={styles.formModern} onSubmit={handleSubmit} noValidate>
            <fieldset className={styles.fieldset}>
              <legend className={styles.legend}>Tus datos</legend>
              <div className={styles.fieldGrid}>
                <label className={styles.field}>
                  <span className={styles.label}>Nombre y apellido *</span>
                  <input
                    name="nombre"
                    type="text"
                    autoComplete="name"
                    value={formData.nombre}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="Ej. María González"
                    required
                  />
                </label>
                <label className={styles.field}>
                  <span className={styles.label}>Correo electrónico *</span>
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="nombre@empresa.com"
                    required
                  />
                </label>
              </div>
              <div className={styles.fieldGrid}>
                <label className={styles.field}>
                  <span className={styles.label}>Teléfono / WhatsApp</span>
                  <input
                    name="telefono"
                    type="tel"
                    autoComplete="tel"
                    value={formData.telefono}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="+54 9 …"
                  />
                </label>
                <label className={styles.field}>
                  <span className={styles.label}>Empresa o marca</span>
                  <input
                    name="empresa"
                    type="text"
                    autoComplete="organization"
                    value={formData.empresa}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="Opcional"
                  />
                </label>
              </div>
            </fieldset>

            <fieldset className={styles.fieldset}>
              <legend className={styles.legend}>Tu proyecto</legend>
              <div className={styles.fieldGrid}>
                <label className={styles.field}>
                  <span className={styles.label}>¿Qué necesitás? *</span>
                  <select
                    name="servicio"
                    value={formData.servicio}
                    onChange={handleChange}
                    className={styles.select}
                    required
                  >
                    {serviciosOpciones.map((o) => (
                      <option key={o.value || 'empty'} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </label>
                <label className={styles.field}>
                  <span className={styles.label}>Plazo</span>
                  <select
                    name="urgencia"
                    value={formData.urgencia}
                    onChange={handleChange}
                    className={styles.select}
                  >
                    {urgenciaOpciones.map((o) => (
                      <option key={o.value || 'u-empty'} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className={styles.field}>
                <span className={styles.label}>Contanos más *</span>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  className={styles.textarea}
                  rows={6}
                  placeholder="Objetivos, presupuesto aproximado, web actual, público al que apuntás…"
                  required
                />
                <span className={styles.hint}>Cuanto más contexto, mejor podemos orientarte.</span>
              </label>
            </fieldset>

            <label className={styles.checkRow}>
              <input
                type="checkbox"
                name="aceptaPrivacidad"
                checked={formData.aceptaPrivacidad}
                onChange={handleChange}
                className={styles.checkbox}
                required
              />
              <span>
                Acepto que mis datos se usen solo para responder esta consulta. *
              </span>
            </label>

            <button type="submit" className={styles.submitCta}>
              <Send size={18} aria-hidden />
              Enviar consulta
            </button>
          </form>

          <div className={styles.contactStrip} aria-label="Datos de contacto Bravas">
            <a href="mailto:info@bravas.com" className={styles.stripItem}>
              <Mail size={18} strokeWidth={2} aria-hidden />
              <span>info@bravas.com</span>
            </a>
            <a href="tel:+5493511234567" className={styles.stripItem}>
              <Phone size={18} strokeWidth={2} aria-hidden />
              <span>+54 9 351 123 4567</span>
            </a>
            <span className={styles.stripItem}>
              <MapPin size={18} strokeWidth={2} aria-hidden />
              <span>Córdoba, Argentina · Lun–Vie 9–18 hs</span>
            </span>
            <a
              href={SOCIAL_URLS.facebook}
              className={styles.stripItem}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook size={18} strokeWidth={2} aria-hidden />
              <span>Facebook</span>
            </a>
            <a
              href={SOCIAL_URLS.instagram}
              className={styles.stripItem}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={18} strokeWidth={2} aria-hidden />
              <span>Instagram</span>
            </a>
            <a
              href={SOCIAL_URLS.whatsapp}
              className={`${styles.stripItem} ${styles.stripWhatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <WhatsappIcon size={18} />
              <span>WhatsApp</span>
            </a>
            <a
              href={SOCIAL_URLS.linkedin}
              className={styles.stripItem}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} strokeWidth={2} aria-hidden />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
