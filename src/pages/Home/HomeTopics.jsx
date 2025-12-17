import { Link } from "react-router-dom";
import styles from "./HomeTopics.module.scss";
import { topics } from "../../data/topics";
import { topicIcons } from "../../data/topicIcons";

export default function HomeTopics() {
  return (
    <section className={styles.topics} id="topics">
      <div className="container">
        <h2 className={styles.title}>Knowledge Domains</h2>

        <div className={styles.grid}>
          {topics.map((topic) => {
            const Icon = topicIcons[topic.slug];

            return (
              <Link
                key={topic.slug}
                to={`/topic/${topic.slug}`}
                className={styles.card}
              >
                <div className={styles.logo}>
                  <Icon />
                </div>

                <h3>{topic.title}</h3>
                <p>{topic.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
