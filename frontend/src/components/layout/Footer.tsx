import { Fragment, useEffect, useState } from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import WhatsappIcon from '@/components/ui/WhatsappIcon';
import styles from './Footer.module.css';
import { getContactoData, getFooterData } from '@/lib/queries';

interface ContactoData {
  email?: string;
  whatsapp?: string;
  instagram?: string;
  linkedin?: string;
  direccion?: string;
}

interface FooterLink {
  label: string;
  href: string;
}

interface FooterData {
  descripcion?: string;
  copyright?: string;
  facebook?: string;
  serviciosLinks?: FooterLink[];
  empresaLinks?: FooterLink[];
  legalLinksIzquierda?: FooterLink[];
  legalLinksDerecha?: FooterLink[];
}

const DEFAULT_CONTACTO: ContactoData = {
  email: 'info@bravas.com',
  whatsapp: '5493518564677',
  instagram: 'bravasmarketing',
  linkedin: 'https://www.linkedin.com/company/bravas-marketing',
  direccion: 'Córdoba, Argentina',
};

const DEFAULT_FOOTER: Required<FooterData> = {
  descripcion: 'Agencia de marketing digital enfocada en resultados reales para tu negocio.',
  copyright: 'BRAVAS MARKETING • Innovación Digital • Resultados Reales',
  facebook: 'https://www.facebook.com/bravasmarketing',
  serviciosLinks: [
    { href: '/servicios#servicios-intro', label: 'Lo que hacemos' },
    { href: '/servicios#servicios-nuestros', label: 'Nuestros Servicios' },
    { href: '/servicios#servicios-integrales', label: 'Soluciones Integrales' },
    { href: '/servicios#servicios-herramientas', label: 'Herramientas' },
    { href: '/servicios#servicios-faq', label: 'Preguntas Frecuentes' },
  ],
  empresaLinks: [
    { href: '/nosotros#nosotros-quienes', label: 'Quiénes Somos' },
    { href: '/nosotros#nosotros-mision', label: 'Misión y Visión' },
    { href: '/nosotros#nosotros-equipo', label: 'Nuestro Equipo' },
    { href: '/nosotros#nosotros-porque', label: 'Por Qué Elegirnos' },
    { href: '/contacto#contacto-form', label: 'Contacto' },
  ],
  legalLinksIzquierda: [
    { href: '/legal#privacidad', label: 'Política de Privacidad' },
    { href: '/legal#cookies', label: 'Cookies' },
  ],
  legalLinksDerecha: [
    { href: '/legal#terminos', label: 'Términos y Condiciones' },
    { href: '/legal#mapa', label: 'Mapa del Sitio' },
  ],
};

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
    <path fill="#EA4335" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    <circle fill="#FFF" cx="12" cy="9" r="2.5" />
  </svg>
);

export default function Footer() {
  const [contacto, setContacto] = useState<ContactoData>(DEFAULT_CONTACTO);
  const [footer, setFooter] = useState<Required<FooterData>>(DEFAULT_FOOTER);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    getContactoData().then((d: ContactoData | null) => {
      if (d) setContacto({ ...DEFAULT_CONTACTO, ...d });
    });

    getFooterData().then((d: FooterData | null) => {
      if (!d) return;

      setFooter({
        ...DEFAULT_FOOTER,
        ...d,
        serviciosLinks: d.serviciosLinks?.length ? d.serviciosLinks : DEFAULT_FOOTER.serviciosLinks,
        empresaLinks: d.empresaLinks?.length ? d.empresaLinks : DEFAULT_FOOTER.empresaLinks,
        legalLinksIzquierda: d.legalLinksIzquierda?.length
          ? d.legalLinksIzquierda
          : DEFAULT_FOOTER.legalLinksIzquierda,
        legalLinksDerecha: d.legalLinksDerecha?.length ? d.legalLinksDerecha : DEFAULT_FOOTER.legalLinksDerecha,
      });
    });
  }, []);

  const instagramUrl = `https://www.instagram.com/${contacto.instagram ?? 'bravasmarketing'}`;
  const whatsappUrl = `https://wa.me/${contacto.whatsapp ?? '5493518564677'}`;
  const linkedinUrl = contacto.linkedin ?? 'https://www.linkedin.com/company/bravas-marketing';

  return (
    <footer id="site-footer" className={styles.mainFooter}>
      <div className={styles.footerGrid}>
        <div className={styles.footerCard}>
          <h4 className={styles.footerHeader}>Bravas Marketing</h4>
          <p>{footer.descripcion}</p>
          <div className={styles.footerLogoSmall}>
            <img src="/assets/icons/pwa/logo192.png" alt="Bravas" className={styles.logoImg} />
          </div>
        </div>

        <div className={styles.footerCard}>
          <h4 className={styles.footerHeader}>Servicios</h4>
          <ul>
            {footer.serviciosLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.footerCard}>
          <h4 className={styles.footerHeader}>Empresa</h4>
          <ul>
            {footer.empresaLinks.map((link) => (
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
            <a href={`mailto:${contacto.email}`}>{contacto.email}</a>
          </div>
          <div className={styles.contactItem}>
            <div className={`${styles.contactIcon} ${styles.phone}`}>
              <WhatsappIcon size={18} />
            </div>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </div>
          <div className={styles.contactItem}>
            <div className={`${styles.contactIcon} ${styles.location}`}>
              <MapPinIcon />
            </div>
            <a href="https://maps.app.goo.gl/WA3gTMN16Wxp2jRJ9?g_st=ac" target="_blank" rel="noopener noreferrer">Córdoba, Argentina</a>
          </div>

          <div className={styles.footerSocialSection}>
            <h4 className={`${styles.footerHeader} ${styles.socialHeader}`}>Síguenos</h4>
            <div className={styles.footerSocialMini}>
              <a
                href={footer.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.footerSocialBtn} ${styles.footerSocialBtnFacebook}`}
                aria-label="Facebook"
              >
                <Facebook size={20} strokeWidth={2} aria-hidden />
              </a>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.footerSocialBtn} ${styles.footerSocialBtnInstagram}`}
                aria-label="Instagram"
              >
                <Instagram size={20} strokeWidth={2} aria-hidden />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.footerSocialBtn} ${styles.footerSocialBtnWhatsapp}`}
                aria-label="WhatsApp"
              >
                <WhatsappIcon size={20} />
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.footerSocialBtn} ${styles.footerSocialBtnLinkedin}`}
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
            {footer.legalLinksIzquierda.map((link, index) => (
              <Fragment key={link.label}>
                {index > 0 && <span className={styles.separator}>•</span>}
                <Link href={link.href}>{link.label}</Link>
              </Fragment>
            ))}
          </div>
          <div className={styles.copyrightSection}>
            <p className={styles.copyright}>
              &copy; {currentYear} <strong>{footer.copyright}</strong>
            </p>
          </div>
          <div className={styles.footerLinks}>
            {footer.legalLinksDerecha.map((link, index) => (
              <Fragment key={link.label}>
                {index > 0 && <span className={styles.separator}>•</span>}
                <Link href={link.href}>{link.label}</Link>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
