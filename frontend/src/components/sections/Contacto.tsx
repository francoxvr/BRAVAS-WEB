import { useState } from 'react';
import styles from '@/components/sections/Contacto.module.css';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    servicio: '',
    mensaje: '',
  });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Consulta de ${formData.nombre} sobre ${formData.servicio || 'Bravas Marketing'}`
    );
    const body = encodeURIComponent(
      [
        `Nombre: ${formData.nombre}`,
        `Email: ${formData.email}`,
        `Teléfono: ${formData.telefono || 'No informado'}`,
        `Servicio: ${formData.servicio || 'No especificado'}`,
        '',
        'Mensaje:',
        formData.mensaje,
      ].join('\n')
    );

    window.location.href = `mailto:info@bravas.com?subject=${subject}&body=${body}`;
    setEnviado(true);
    setTimeout(() => setEnviado(false), 4000);
    setFormData({ nombre: '', email: '', telefono: '', servicio: '', mensaje: '' });
  };

  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              Hablemos de tu <span className={styles.heroTitleAccent}>Proyecto</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Estamos listos para transformar tu presencia digital. Contanos qué necesitás y te respondemos en menos de 24 hs.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNumber}>+100</span>
                <span className={styles.heroStatLabel}>Clientes satisfechos</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNumber}>24hs</span>
                <span className={styles.heroStatLabel}>Tiempo de respuesta</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNumber}>5★</span>
                <span className={styles.heroStatLabel}>Calificación promedio</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contactoSection}>
        <div className={styles.contactoHeader}>
          <h2 className={styles.contactoTitle}>Contactanos</h2>
          <p className={styles.contactoSubtitle}>
            Completá el formulario o usá nuestros canales directos.
          </p>
        </div>

        <div className={styles.contactoGrid}>
          <div className={styles.formContainer}>
            {enviado && (
              <div className={styles.successMessage}>
                Abrimos tu app de correo para que envíes el mensaje.
              </div>
            )}
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Nombre completo</label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className={styles.input}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    className={styles.input}
                    required
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Teléfono</label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="+54 9 351 000 0000"
                    className={styles.input}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Servicio de interés</label>
                  <select
                    name="servicio"
                    value={formData.servicio}
                    onChange={handleChange}
                    className={styles.select}
                    required
                  >
                    <option value="">Seleccioná un servicio</option>
                    <option value="estrategia">Estrategia Digital</option>
                    <option value="branding">Branding & Identidad</option>
                    <option value="performance">Performance Ads</option>
                    <option value="contenido">Contenido Creativo</option>
                    <option value="analitica">Analítica & Métricas</option>
                    <option value="growth">Growth Marketing</option>
                  </select>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Mensaje</label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder="Contanos sobre tu proyecto..."
                  className={styles.textarea}
                  rows={5}
                  required
                />
              </div>

              <button type="submit" className={styles.submitBtn}>
                Enviar mensaje
              </button>
            </form>
          </div>

          <div className={styles.infoContainer}>
            <div className={styles.infoCard}>
              <div className={styles.infoHeader}>
                <h3 className={styles.infoTitle}>Información de Contacto</h3>
                <p className={styles.infoSubtitle}>También podés contactarnos directamente</p>
              </div>

              <div className={styles.infoItems}>
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>📧</div>
                  <div className={styles.infoText}>
                    <span className={styles.infoLabel}>Email</span>
                    <a href="mailto:info@bravas.com" className={styles.infoValue}>info@bravas.com</a>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>📱</div>
                  <div className={styles.infoText}>
                    <span className={styles.infoLabel}>Teléfono</span>
                    <a href="tel:+5493511234567" className={styles.infoValue}>+54 9 351 123 4567</a>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>📍</div>
                  <div className={styles.infoText}>
                    <span className={styles.infoLabel}>Ubicación</span>
                    <span className={styles.infoValue}>Córdoba, Argentina</span>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>🕐</div>
                  <div className={styles.infoText}>
                    <span className={styles.infoLabel}>Horario</span>
                    <span className={styles.infoValue}>Lun - Vie: 9:00 a 18:00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.quickServices}>
              <h4 className={styles.quickTitle}>¿Qué podemos hacer por vos?</h4>
              <div className={styles.quickGrid}>
                <div className={styles.quickCard}>
                  <span className={styles.quickIcon}>🎯</span>
                  <span className={styles.quickLabel}>Estrategia Digital</span>
                </div>
                <div className={styles.quickCard}>
                  <span className={styles.quickIcon}>✨</span>
                  <span className={styles.quickLabel}>Branding</span>
                </div>
                <div className={styles.quickCard}>
                  <span className={styles.quickIcon}>🚀</span>
                  <span className={styles.quickLabel}>Performance Ads</span>
                </div>
                <div className={styles.quickCard}>
                  <span className={styles.quickIcon}>📊</span>
                  <span className={styles.quickLabel}>Analítica</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
