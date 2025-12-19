import styles from "./TopicOverview.module.scss";
import { useTranslation } from "react-i18next";

export default function TopicOverview({ text }) {
  const { t } = useTranslation();
  return (
    <section className={styles.overview}>
      <h2>{t("topicPage.overviewTitle")}</h2>
      <p>{text}</p>
    </section>
  );
}
