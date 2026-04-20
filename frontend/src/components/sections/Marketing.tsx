import styles from './Marketing.module.css';

export default function Marketing() {
  return (
    <section className={styles.section} id="marketing">
      <div className={styles.hero}>
        <div className={styles.text}>
          <h1 className={styles.title}>Marketing Digital</h1>

          <p className={styles.subtitle}>
            Estrategias inteligentes para crecer, vender y posicionar tu marca
            en el mundo digital. Resultados reales, medibles y escalables.
          </p>

          <button className={styles.button}>
            Potenciar mi marca
          </button>

          <div className={styles.features}>
            <span>📱 Redes Sociales</span>
            <span>📊 Analytics</span>
            <span>🎯 Campañas</span>
          </div>
        </div>

        <div className={styles.image}>
          <img
  src="/assets/images/marketing/marketing7.png"
  alt="Estrategias de Marketing Digital"
/>

        </div>
      </div>
    </section>
  );
}