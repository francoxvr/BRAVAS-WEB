import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import WhatsappIcon from '@/components/ui/WhatsappIcon';
import { SOCIAL_URLS } from '@/constants/socialUrls';
import styles from './Footer.module.css';

const serviceLinks = [
  { href: '/servicios', label: 'Marketing Digital' },
  { href: '/servicios', label: 'Diseño Web' },
  { href: '/servicios', label: 'Publicidad Digital' },
  { href: '/servicios', label: 'Redes Sociales' },
  { href: '/servicios', label: 'SEO & Analytics' },
];

const companyLinks = [
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/#enfoque', label: 'Nuestro Enfoque' },
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
                href={SOCIAL_URLS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerSocialBtn}
                aria-label="Facebook"
              >
                <Facebook size={20} strokeWidth={2} aria-hidden />
              </a>
              <a
                href={SOCIAL_URLS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerSocialBtn}
                aria-label="Instagram"
              >
                <Instagram size={20} strokeWidth={2} aria-hidden />
              </a>
              <a
                href={SOCIAL_URLS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.footerSocialBtn} ${styles.footerSocialBtnWhatsapp}`}
                aria-label="WhatsApp"
              >
                <WhatsappIcon size={20} />
              </a>
              <a
                href={SOCIAL_URLS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerSocialBtn}
                aria-label="LinkedIn"
              >
                <Linkedin size={20} strokeWidth={2} aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerLegal}>
        <div className={styles.footerLegalContent}>
          <div className={styles.footerLinks}>
            <Link href="/contacto">Política de Privacidad</Link>
            <span className={styles.separator}>•</span>
            <Link href="/contacto">Cookies</Link>
          </div>

          <div className={styles.copyrightSection}>
            <p className={styles.copyright}>
              &copy; {currentYear} <strong>BRAVAS MARKETING</strong> • Innovación
              Digital • Resultados Reales
            </p>
          </div>

          <div className={styles.footerLinks}>
            <Link href="/contacto">Términos y Condiciones</Link>
            <span className={styles.separator}>•</span>
            <Link href="/#home">Mapa del Sitio</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
