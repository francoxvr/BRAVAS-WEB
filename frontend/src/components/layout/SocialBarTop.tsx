import { MapPin } from 'lucide-react';
import styles from './SocialBarTop.module.css';

export default function SocialBarTop() {
  return (
    <div className={styles.socialBarTop}>
      <div className={styles.socialBarContainer}>
        <a
          href="https://wa.me/5493511234567"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
            alt="WhatsApp"
            className={styles.socialIcon}
          />
          <span>WhatsApp</span>
        </a>

        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
            alt="Facebook"
            className={styles.socialIcon}
          />
          <span>Facebook</span>
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733558.png"
            alt="Instagram"
            className={styles.socialIcon}
          />
          <span>Instagram</span>
        </a>

        <a
          href="https://maps.google.com/?q=Av.+Hipólito+Yrigoyen+146,+Córdoba"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.socialLink} ${styles.mapLink}`}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
            alt="Ubicación"
            className={styles.mapIcon}
          />
          <span>Av. Hipólito Yrigoyen 146, Córdoba</span>
        </a>


      </div>
    </div>
  );
}
