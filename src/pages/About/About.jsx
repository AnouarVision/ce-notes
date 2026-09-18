import { useTranslation } from "react-i18next";
import styles from "./About.module.scss";

const emphasizeText = (text, words) => {
  if (!words?.length) return text;

  const escaped = words.map((word) => word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const pattern = new RegExp(`(${escaped.join("|")})`, "gi");

  return text.split(pattern).map((part, index) => {
    const matched = words.some(
      (word) => part.toLowerCase() === word.toLowerCase()
    );

    return matched ? (
      <strong key={`${part}-${index}`} className={styles.emphasis}>
        {part}
      </strong>
    ) : (
      <span key={`${part}-${index}`}>{part}</span>
    );
  });
};

export default function About() {
  const { t } = useTranslation();

  return (
    <section className={styles.about}>
      <div className={`${styles.inner} container`}>
        <div className={styles.hero}>
          <h1>
            {t("about.hero.title")}
            <span className={styles.highlight}>CS Notes</span>
          </h1>
          <p className={styles.subtitle}>{t("about.hero.subtitle")}</p>
        </div>

        <div className={styles.card}>
          <h2>{t("about.mission.title")}</h2>
          <p>{emphasizeText(t("about.mission.p1"), ["uno posto", "chiara", "ordinata"])}</p>
          <p>{emphasizeText(t("about.mission.p2"), ["scorciatoia", "base", "solida"])}</p>
        </div>

        <section className={styles.values}>
          <h2 className={styles.valuesTitle}>{t("about.values.title")}</h2>

          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <span className={styles.check}>✓</span>
              <h3>{t("about.values.clarity.title")}</h3>
              <p>{emphasizeText(t("about.values.clarity.description"), ["semplice", "diretto"])}</p>
            </div>

            <div className={styles.valueCard}>
              <span className={styles.check}>✓</span>
              <h3>{t("about.values.practicality.title")}</h3>
              <p>{emphasizeText(t("about.values.practicality.description"), ["Teoria", "pratica", "codice"])}</p>
            </div>

            <div className={styles.valueCard}>
              <span className={styles.check}>✓</span>
              <h3>{t("about.values.organization.title")}</h3>
              <p>{emphasizeText(t("about.values.organization.description"), ["facile", "trovare"])}</p>
            </div>

            <div className={styles.valueCard}>
              <span className={styles.check}>✓</span>
              <h3>{t("about.values.completeness.title")}</h3>
              <p>{emphasizeText(t("about.values.completeness.description"), ["fondamenti", "avanzati", "base solida"])}</p>
            </div>
          </div>
        </section>

        <div className={styles.card}>
          <h2>{t("about.coverage.title")}</h2>
          <p>{emphasizeText(t("about.coverage.description"), ["principali", "informatica"])}</p>
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

        <div className={styles.cardMuted}>
          <h2>{t("about.audience.title")}</h2>
          <p>{emphasizeText(t("about.audience.description"), ["studenti", "reference", "chiaro"])}</p>
        </div>
      </div>
    </section>
  );
}
