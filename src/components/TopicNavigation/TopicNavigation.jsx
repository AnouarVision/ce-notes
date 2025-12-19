import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styles from "./TopicNavigation.module.scss";

export default function TopicNavigation({ items, active }) {
  const { t } = useTranslation();

  return (
    <nav className={styles.navigation}>
      <h3 className={styles.title}>
        {t("topicPage.navigationTitle")}
      </h3>
      
      <ul className={styles.list}>
        {items.map((item) => {
          const isActive = item.slug === active;

          return (
            <li key={item.slug}>
              <Link
                to={`/topic/${item.slug}`}
                className={`${styles.button} ${
                  isActive ? styles.active : ""
                }`}
              >
                {t(item.titleKey)}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
