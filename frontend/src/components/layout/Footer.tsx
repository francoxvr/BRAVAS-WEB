import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';
import styles from './Footer.module.css';

const serviceLinks = [
  { href: '/marketing', label: 'Marketing Digital' },
  { href: '/diseno-web', label: 'Diseño Web' },
  { href: '/servicios', label: 'Publicidad Digital' },
  { href: '/servicios', label: 'Redes Sociales' },
  { href: '/servicios', label: 'SEO & Analytics' },
];

const companyLinks = [
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/blog', label: 'Blog' },
  { href: '/contacto', label: 'Contacto' },
  { href: '/servicios', label: 'Portafolio' },
  { href: '/servicios', label: 'Casos de Éxito' },
];

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
    <path
      fill="#EA4335"
      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
    />
    <circle fill="#FFF" cx="12" cy="9" r="2.5" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="site-footer" className={styles.mainFooter}>
      <div className={styles.footerGrid}>
        <div className={styles.footerCard}>
          <h4 className={styles.footerHeader}>Bravas Marketing</h4>
          <p>
            Transformamos tu presencia digital con estrategias innovadoras que
            hacen brillar tu marca en el mundo online.
          </p>
          <div className={styles.footerLogoSmall}>
            <img src="/assets/icons/pwa/logo192.png" alt="Bravas" className={styles.logoImg} />
          </div>
        </div>

        <div className={styles.footerCard}>
          <h4 className={styles.footerHeader}>Servicios</h4>
          <ul>
            {serviceLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.footerCard}>
          <h4 className={styles.footerHeader}>Empresa</h4>
          <ul>
            {companyLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.footerCard}>
          <h4 className={styles.footerHeader}>Contacto</h4>

          <div className={styles.contactItem}>
            <div className={`${styles.contactIcon} ${styles.email}`}>
              <Mail size={18} />
            </div>
            <a href="mailto:info@bravas.com">info@bravas.com</a>
          </div>

          <div className={styles.contactItem}>
            <div className={`${styles.contactIcon} ${styles.phone}`}>
              <Phone size={18} />
            </div>
            <a href="tel:+5493511234567">+54 9 351 123 4567</a>
          </div>

          <div className={styles.contactItem}>
            <div className={`${styles.contactIcon} ${styles.location}`}>
              <MapPinIcon />
            </div>
            <span>Córdoba, Argentina</span>
          </div>

          <div className={styles.footerSocialSection}>
            <h4 className={`${styles.footerHeader} ${styles.socialHeader}`}>
              Síguenos
            </h4>

            <div className={styles.footerSocialMini}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                  alt="Facebook"
                />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733558.png"
                  alt="Instagram"
                />
              </a>
              <a
                href="https://wa.me/5493511234567"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                  alt="WhatsApp"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerLegal}>
        <div className={styles.footerLegalContent}>
          <div className={styles.footerLinks}>
            <a href="#privacidad">Política de Privacidad</a>
            <span className={styles.separator}>•</span>
            <a href="#cookies">Cookies</a>
          </div>

          <div className={styles.copyrightSection}>
            <p className={styles.copyright}>
              &copy; {currentYear} <strong>BRAVAS MARKETING</strong> • Innovación
              Digital • Resultados Reales
            </p>
          </div>

          <div className={styles.footerLinks}>
            <a href="#terminos">Términos y Condiciones</a>
            <span className={styles.separator}>•</span>
            <a href="#sitemap">Mapa del Sitio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
