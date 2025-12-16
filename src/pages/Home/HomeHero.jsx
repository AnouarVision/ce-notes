import styles from "./HomeHero.module.scss";

export default function HomeHero() {
  return (
    <section className={styles.hero}>
      <div className={`${styles.inner} container`}>
        <h1 className={styles.title}>
          The <span className={styles.highlight}>Computer Engineer&apos;s</span>{" "}
          Personal
          Study Hub.
        </h1>

        <p className={styles.subtitle}>
          Technical notes and exercises across CE and IT domains.
        </p>

        <button className={styles.cta}>Start Reading →</button>
      </div>
    </section>
  );
}
