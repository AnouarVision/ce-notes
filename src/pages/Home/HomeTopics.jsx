import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styles from "./HomeTopics.module.scss";
import { topics } from "../../data/topics";
import { topicIcons } from "../../data/topicIcons";

export default function HomeTopics() {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);
  const [isLoading, setIsLoading] = useState(false);
  const loadMoreRef = useRef(null);
  const sortedTopics = [...topics].sort((firstTopic, secondTopic) =>
    t(`home.topics.${firstTopic.key}.title`).localeCompare(
      t(`home.topics.${secondTopic.key}.title`),
      undefined,
      { sensitivity: "base" }
    )
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 600px)");
    const updateViewport = () => setIsMobile(mediaQuery.matches);

    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);

    return () => mediaQuery.removeEventListener("change", updateViewport);
  }, []);

  useEffect(() => {
    if (!isMobile || visibleCount >= sortedTopics.length || !loadMoreRef.current) {
      return undefined;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || isLoading) {
        return;
      }

      setIsLoading(true);
      window.setTimeout(() => {
        setVisibleCount((currentCount) =>
          Math.min(currentCount + 3, sortedTopics.length)
        );
        setIsLoading(false);
      }, 350);
    }, { rootMargin: "120px" });

    observer.observe(loadMoreRef.current);

    return () => observer.disconnect();
  }, [isLoading, isMobile, sortedTopics.length, visibleCount]);

  return (
    <section className={styles.topics} id="topics">
      <div className="container">
        <h2 className={styles.title}>{t("home.topics.title")}</h2>

        <div className={styles.grid}>
          {sortedTopics.map((topic, index) => {
            const Icon = topicIcons[topic.slug];

            return (
              <Link
                key={topic.slug}
                to={`/topic/${topic.slug}`}
                className={`${styles.card} ${index >= visibleCount ? styles.mobileHidden : ""}`}
              >
                <div className={styles.logo}>
                  <Icon />
                </div>

                <h3>{t(`home.topics.${topic.key}.title`)}</h3>
                <p>{t(`home.topics.${topic.key}.description`)}</p>
              </Link>
            );
          })}
        </div>

        {isMobile && visibleCount < sortedTopics.length && (
          <div
            ref={loadMoreRef}
            className={styles.mobileLoader}
            role="status"
            aria-label={t("home.topics.loading")}
            aria-live="polite"
          >
            <span className={styles.loaderDot} aria-hidden="true" />
          </div>
        )}
      </div>
    </section>
  );
}
