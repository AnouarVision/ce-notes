import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./SectionRelated.module.scss";

export default function TopicRelated({ topics }) {
  const { t } = useTranslation();

  return (
    <section className={styles.related}>
      <h2>{t("topicPage.relatedSectionsTitle")}</h2>

      <div className={styles.grid}>
        {topics.map((item) => (
          <Link
            key={item.slug}
            to={`/topic/physics/${item.slug}`}
            className={styles.button}
          >
            {t(item.titleKey)}
          </Link>
        ))}
      </div>
    </section>
  );
}
