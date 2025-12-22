import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import styles from "./UnderMaintenance.module.scss";

export default function UnderMaintenance({
  titleKey = "maintenance.title",
  descriptionKey = "maintenance.description",
  releaseDate,
}) {
  const { t } = useTranslation();

  const title = t(titleKey);
  const description = t(descriptionKey);

  const words = title.split(" ");
  const lastWord = words.pop();
  const baseTitle = words.join(" ");

  const [remaining, setRemaining] = useState("");

  useEffect(() => {
    if (!releaseDate) return;

    const target = new Date(releaseDate).getTime();

    const update = () => {
      const now = Date.now();
      const diff = target - now;

      if (diff <= 0) {
        setRemaining("Available now");
        return;
      }

      const days = Math.floor(diff / 86400000);
      const hours = Math.floor((diff / 3600000) % 24);
      const minutes = Math.floor((diff / 60000) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      if (days > 0) {
        setRemaining(`${days}d ${hours}h`);
      } else if (hours > 0) {
        setRemaining(`${hours}h ${minutes}m`);
      } else if (minutes > 0) {
        setRemaining(`${minutes}m ${seconds}s`);
      } else {
        setRemaining(`${seconds}s`);
      }
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [releaseDate]);

  return (
    <section className={styles.maintenance}>
      <div className={styles.inner}>
        <h1 className={styles.title}>
          {baseTitle}{" "}
          <span className={styles.highlight}>{lastWord}</span>
        </h1>

        <p className={styles.subtitle}>{description}</p>

        <div className={styles.card}>
          <div className={styles.status}>
            <span className={styles.dot} />
            {t("maintenance.status").toUpperCase()}
          </div>

          <p className={styles.message}>
            {t("maintenance.message")}
          </p>

          {remaining && (
            <p className={styles.et}>
              {t("maintenance.eta.label")}: {remaining}
            </p>
          )}
        </div>

        <div className={styles.divider} />

        <p className={styles.questions}> {t("maintenance.questions")} </p>
        {t("maintenance.contact")}{" "}
        <a
            href="mailto:ce-notes@outlook.it"
            className={styles.email}
        >
            ce-notes@outlook.it
        </a>


        <p className={styles.thanks}>
          {t("maintenance.thanks")}
        </p>
      </div>
    </section>
  );
}
