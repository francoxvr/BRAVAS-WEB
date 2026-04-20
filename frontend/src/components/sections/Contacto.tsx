import ContactForm from '../ui/ContactForm';
import styles from './Contacto.module.css';

export default function Contacto() {
  const scrollToForm = () => {
    const formSection = document.getElementById('contacto-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* HERO */}
      <section className={styles.heroSection} id="contacto">
        <div className={styles.heroContainer}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>Contacto</h1>
            <p className={styles.heroSubtitle}>
              Estamos acá para ayudarte. Escribinos, llamanos o visitanos.
              Tu próximo proyecto empieza hoy.
            </p>

            <button className={styles.btnCta} onClick={scrollToForm}>
              Escribir mensaje
            </button>

            <p className={styles.heroExtra}>
              📱 WhatsApp · 📧 Email · 🏢 Oficina
            </p>
          </div>

          <div className={styles.heroImage}>
            <img
              src="/assets/images/marketing/marketing9.jpg"
              alt="Contacto Bravas Marketing"
              className={styles.fadeInImage}
            />
          </div>
        </div>
      </section>

      {/* FORMULARIO */}
      <section id="contacto-form" className={styles.formSection}>
        <ContactForm />
      </section>
    </>
  );
}
