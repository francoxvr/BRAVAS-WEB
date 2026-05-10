import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import WhatsappIcon from '@/components/ui/WhatsappIcon';
import styles from './Footer.module.css';
import { getContactoData, getSiteConfig } from '@/lib/queries';

interface ContactoData {
  email?: string;
  whatsapp?: string;
  instagram?: string;
  linkedin?: string;
  direccion?: string;
}

const DEFAULT_CONTACTO: ContactoData = {
  email: 'info@bravas.com',
  whatsapp: '5493511234567',
  instagram: 'bravasmarketing',
  linkedin: 'https://www.linkedin.com/company/bravas-marketing',
  direccion: 'Córdoba, Argentina',
};

const serviceLinks = [
  { href: '/servicios#servicios-intro', label: 'Lo que hacemos' },
  { href: '/servicios#servicios-nuestros', label: 'Nuestros Servicios' },
  { href: '/servicios#servicios-integrales', label: 'Soluciones Integrales' },
  { href: '/servicios#servicios-herramientas', label: 'Herramientas' },
  { href: '/servicios#servicios-faq', label: 'Preguntas Frecuentes' },
];

const companyLinks = [
  { href: '/nosotros#nosotros-quienes', label: 'Quiénes Somos' },
  { href: '/nosotros#nosotros-mision', label: 'Misión y Visión' },
  { href: '/nosotros#nosotros-equipo', label: 'Nuestro Equipo' },
  { href: '/nosotros#nosotros-porque', label: 'Por Qué Elegirnos' },
  { href: '/contacto', label: 'Contacto' },
];

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
    <path fill="#EA4335" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    <circle fill="#FFF" cx="12" cy="9" r="2.5" />
  </svg>
);

export default function Footer() {
  const [contacto, setContacto] = useState<ContactoData>(DEFAULT_CONTACTO);
  const [footerDesc, setFooterDesc] = useState("{footerDesc}");
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    getContactoData().then((d: ContactoData | null) => { if (d) setContacto({ ...DEFAULT_CONTACTO, ...d }); });
    getSiteConfig().then((d: { footerDescripcion?: string } | null) => { if (d?.footerDescripcion) setFooterDesc(d.footerDescripcion); });
  }, []);

  const instagramUrl = `https://www.instagram.com/${contacto.instagram ?? 'bravasmarketing'}`;
  const whatsappUrl = `https://wa.me/${contacto.whatsapp ?? '5493511234567'}`;
  const linkedinUrl = contacto.linkedin ?? 'https://www.linkedin.com/company/bravas-marketing';

  return (
    <footer id="site-footer" className={styles.mainFooter}>
      <div className={styles.footerGrid}>
        <div className={styles.footerCard}>
          <h4 className={styles.footerHeader}>Bravas Marketing</h4>
          <p>{footerDesc}</p>
          <div className={styles.footerLogoSmall}>
            <img src="/assets/icons/pwa/logo192.png" alt="Bravas" className={styles.logoImg} />
          </div>
        </div>

        <div className={styles.footerCard}>
          <h4 className={styles.footerHeader}>Servicios</h4>
          <ul>
            {serviceLinks.map((link) => (
              <li key={link.label}><Link href={link.href}>{link.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className={styles.footerCard}>
          <h4 className={styles.footerHeader}>Empresa</h4>
          <ul>
            {companyLinks.map((link) => (
              <li key={link.label}><Link href={link.href}>{link.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className={styles.footerCard}>
          <h4 className={styles.footerHeader}>Contacto</h4>
          <div className={styles.contactItem}>
            <div className={`${styles.contactIcon} ${styles.email}`}><Mail size={18} /></div>
            <a href={`mailto:${contacto.email}`}>{contacto.email}</a>
          </div>
          <div className={styles.contactItem}>
            <div className={`${styles.contactIcon} ${styles.phone}`}><Phone size={18} /></div>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
          <div className={styles.contactItem}>
            <div className={`${styles.contactIcon} ${styles.location}`}><MapPinIcon /></div>
            <span>{contacto.direccion}</span>
          </div>

          <div className={styles.footerSocialSection}>
            <h4 className={`${styles.footerHeader} ${styles.socialHeader}`}>Síguenos</h4>
            <div className={styles.footerSocialMini}>
              <a href="https://www.facebook.com/bravasmarketing" target="_blank" rel="noopener noreferrer"
                className={`${styles.footerSocialBtn} ${styles.footerSocialBtnFacebook}`} aria-label="Facebook">
                <Facebook size={20} strokeWidth={2} aria-hidden />
              </a>
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer"
                className={`${styles.footerSocialBtn} ${styles.footerSocialBtnInstagram}`} aria-label="Instagram">
                <Instagram size={20} strokeWidth={2} aria-hidden />
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                className={`${styles.footerSocialBtn} ${styles.footerSocialBtnWhatsapp}`} aria-label="WhatsApp">
                <WhatsappIcon size={20} />
              </a>
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer"
                className={`${styles.footerSocialBtn} ${styles.footerSocialBtnLinkedin}`} aria-label="LinkedIn">
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
            <p className={styles.copyright}>&copy; {currentYear} <strong>BRAVAS MARKETING</strong> • Innovación Digital • Resultados Reales</p>
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