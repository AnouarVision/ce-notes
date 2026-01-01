import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { topicContent } from "../../data/topicContent";
import TopicHero from "../../components/TopicHero/TopicHero";
import TopicOverview from "../../components/TopicOverview/TopicOverview";
import SectionRelated from "../../components/SectionRelated/SectionRelated";
import TopicNavigation from "../../components/TopicNavigation/TopicNavigation";
import styles from "./Topic.module.scss";

export default function Topic() {
  const { t } = useTranslation();
  const { topicSlug } = useParams();
  const topic = topicContent[topicSlug];

  if (!topic) return <h1>Topic not found</h1>;

  return (
    <div className={styles.page}>
      {/* Hero */}
      <TopicHero title={t(topic.titleKey)} subtitle={t(topic.subtitleKey)} />

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.main}>
          <TopicOverview text={t(topic.overviewKey)} />
          <SectionRelated
            topicSlug={topicSlug}
            topics={topic.related}
          />
        </div>

        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <TopicNavigation
            items={topic.navigation}
            active={topicSlug}
          />
        </aside>
      </div>
    </div>
  );
}
