import styles from "./SignalDiscretizationDemo.module.scss";
import { useTranslation, Trans } from "react-i18next";

export default function SignalDiscretizationDemo() {
  const { t } = useTranslation();

  return (
    <section className={styles.demo}>
      <h4>{t("lowLevelRepresentation.signalDiscretizationDemo.title")}</h4>

      <div className={styles.grid}>
        {/* ANALOG */}
        <div className={styles.chart}>
          <h5>{t("lowLevelRepresentation.signalDiscretizationDemo.analog.title")}</h5>
          <svg viewBox="0 0 300 160">
            {/* axes */}
            <line x1="30" y1="10" x2="30" y2="140" />
            <line x1="30" y1="140" x2="290" y2="140" />

            {/* noisy signal */}
            <path
              d="
                M30 90
                C60 30, 90 140, 120 80
                C150 20, 180 150, 210 70
                C240 40, 270 120, 290 60
              "
              className={styles.analog}
            />

            <text x="5" y="20">{t("lowLevelRepresentation.signalDiscretizationDemo.analog.yAxis")}</text>
            <text x="260" y="155">{t("lowLevelRepresentation.signalDiscretizationDemo.analog.xAxis")}</text>
          </svg>
          <p>
            <Trans
              i18nKey="lowLevelRepresentation.signalDiscretizationDemo.analog.description"
              components={{ strong: <strong /> }}
            />
          </p>
        </div>

        {/* DIGITAL */}
        <div className={styles.chart}>
          <h5>{t("lowLevelRepresentation.signalDiscretizationDemo.digital.title")}</h5>
          <svg viewBox="0 0 300 160">
            {/* axes */}
            <line x1="30" y1="10" x2="30" y2="140" />
            <line x1="30" y1="140" x2="290" y2="140" />

            {/* threshold */}
            <line
              x1="30"
              y1="70"
              x2="290"
              y2="70"
              className={styles.threshold}
            />
            <text x="35" y="65">{t("lowLevelRepresentation.signalDiscretizationDemo.digital.threshold")}</text>

            {/* digital signal */}
            <path
              d="
                M30 120 H80
                V40 H150
                V120 H220
                V40 H290
              "
              className={styles.digital}
            />

            <text x="5" y="20">{t("lowLevelRepresentation.signalDiscretizationDemo.digital.yAxis")}</text>
            <text x="260" y="155">{t("lowLevelRepresentation.signalDiscretizationDemo.digital.xAxis")}</text>
          </svg>
          <p>
            <Trans
              i18nKey="lowLevelRepresentation.signalDiscretizationDemo.digital.description"
              components={{ strong: <strong /> }}
            />
          </p>
        </div>
      </div>
    </section>
  );
}
