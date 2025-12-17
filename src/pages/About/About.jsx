import { useTranslation } from "react-i18next";
import styles from "./About.module.scss";

export default function About() {
  const { t } = useTranslation();
  return (
    <section className={styles.about}>
      <div className={`${styles.inner} container`}>

        {/* Hero */}
        <div className={styles.hero}>
          <h1>
            {t("about.hero.title")}{""}
            <span className={styles.highlight}>CE Notes</span>
          </h1>
          <p className={styles.subtitle}>
            {t("about.hero.subtitle")}
          </p>
        </div>

        {/* Mission */}
        <div className={styles.card}>
          <h2>{t("about.mission.title")}</h2>
          <p>
            {t("about.mission.p1")}
          </p>
          <p>
            {t("about.mission.p2")}
          </p>
        </div>

        {/* Core Values */}
        <section className={styles.values}>
            <h2 className={styles.valuesTitle}>
              {t("about.values.title")}
            </h2>

        <div className={styles.valuesGrid}>
        <div className={styles.valueCard}>
        <span className={styles.check}>✓</span>
        <h3>{t("about.values.clarity.title")}</h3>
        <p>
            {t("about.values.clarity.description")}
        </p>
        </div>

        <div className={styles.valueCard}>
        <span className={styles.check}>✓</span>
        <h3>{t("about.values.practicality.title")}</h3>
        <p>
            {t("about.values.practicality.description")}
        </p>
        </div>

        <div className={styles.valueCard}>
        <span className={styles.check}>✓</span>
        <h3>{t("about.values.organization.title")}</h3>
        <p>
            {t("about.values.organization.description")}
        </p>
        </div>

        <div className={styles.valueCard}>
        <span className={styles.check}>✓</span>
        <h3>{t("about.values.completeness.title")}</h3>
        <p>
            {t("about.values.completeness.description")}
        </p>
        </div>
        </div>
        </section>

        {/* What it covers */}
        <div className={styles.card}>
          <h2>{t("about.coverage.title")}</h2>
          <p>
            {t("about.coverage.description")}
          </p>
          <ul className={styles.list}>
            <li>{t("about.coverage.list.cybersecurity")}</li>
            <li>{t("about.coverage.list.dsa")}</li>
            <li>{t("about.coverage.list.databases")}</li>
            <li>{t("about.coverage.list.cs")}</li>
            <li>{t("about.coverage.list.algebra")}</li>
            <li>{t("about.coverage.list.analysis")}</li>
            <li>{t("about.coverage.list.networking")}</li>
            <li>{t("about.coverage.list.physics")}</li>
          </ul>
        </div>

        {/* Audience */}
        <div className={styles.cardMuted}>
          <h2>{t("about.audience.title")}</h2>
          <p>
            {t("about.audience.description")}
          </p>
        </div>

      </div>
    </section>
  );
}
