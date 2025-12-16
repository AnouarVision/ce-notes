import { useEffect, useState } from "react";
import styles from "./UnderMaintenance.module.scss";

export default function UnderMaintenance({
  title = "Exercises under maintenance",
  description = "This section is currently being built and refined. Check back soon.",
  releaseDate,
}) {
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
            UNDER MAINTENANCE
          </div>

          <p className={styles.message}>
            The platform is being improved. This section will be available shortly.
          </p>

          {remaining && (
            <p className={styles.et}>
              Estimated time: {remaining}
            </p>
          )}
        </div>

        <div className={styles.divider} />

        <p className={styles.questions}> Have questions? </p>
        Contact me to:{" "}
        <a
            href="mailto:anouarnaouri904@gmail.com"
            className={styles.email}
        >
            anouarnaouri904@gmail.com
        </a>


        <p className={styles.thanks}>
          Thank you for your patience.
        </p>
      </div>
    </section>
  );
}
