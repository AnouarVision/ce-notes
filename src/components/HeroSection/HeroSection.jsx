import { useTranslation } from "react-i18next";
import styles from "./HeroSection.module.scss";

export default function HeroSection({ titleStart, titleHighlight, subtitle }) {
  const { t } = useTranslation();

  const title1 = titleStart || t("lowLevelRepresentation.hero.titleStart");
  const title2 = titleHighlight || t("lowLevelRepresentation.hero.titleHighlight");
  const subtitleText = subtitle || t("lowLevelRepresentation.hero.subtitle");

  return (
    <header className={styles.hero}>
      <h1>
        {title1}
        <span>{title2}</span>
      </h1>
      <p>{subtitleText}</p>
    </header>
  );
}