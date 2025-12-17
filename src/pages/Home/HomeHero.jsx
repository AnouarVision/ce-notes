import { useTranslation } from "react-i18next";
import styles from "./HomeHero.module.scss";

export default function HomeHero() {
  const { t } = useTranslation();
  return (
    <section className={styles.hero}>
      <div className={`${styles.inner} container`}>
        <h1 className={styles.title}>
          The <span className={styles.highlight}>Computer Engineer&apos;s</span>{" "}
          Personal
          Study Hub.
        </h1>

        <p className={styles.subtitle}>
          {t("home.hero.subtitle")}
        </p>

        <button className={styles.cta}>{t("home.hero.cta")} →</button>
      </div>
    </section>
  );
}
