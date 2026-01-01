import { useTranslation } from "react-i18next";
import styles from "./HeroSection.module.scss";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <header className={styles.hero}>
      <h1>
        {t("lowLevelRepresentation.hero.titleStart")}
        <span>{t("lowLevelRepresentation.hero.titleHighlight")}</span>
      </h1>
      <p>{t("lowLevelRepresentation.hero.subtitle")}</p>
    </header>
  );
}