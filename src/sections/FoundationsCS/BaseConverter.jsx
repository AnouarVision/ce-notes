import { useState } from "react";
import styles from "./BaseConverter.module.scss";
import { useTranslation } from "react-i18next";

export default function BaseConverter() {
  const { t } = useTranslation();
  const [decimal, setDecimal] = useState(10);

  const parsed = Number(decimal);

  const value =
    Number.isInteger(parsed) && parsed >= 0 && parsed <= 255
      ? parsed
      : 0;

  return (
    <div className={styles.demoSection}>
      <h4>{t("lowLevelRepresentation.baseConverter.title")}</h4>

      <p className={styles.hint}>
        {t("lowLevelRepresentation.baseConverter.hint")}
      </p>

      <div className={styles.numberDemo}>
        <div className={styles.inputWrapper}>
          <input
            type="number"
            value={decimal}
            onChange={(e) => setDecimal(e.target.value)}
            className={styles.input}
            placeholder="0-255"
          />
        </div>

        <div className={styles.results}>
          <div className={styles.card}>
            <div className={styles.label}>{t("lowLevelRepresentation.baseConverter.decimal")}</div>
            <div className={styles.main}>{value}</div>
          </div>

          <div className={styles.card}>
            <div className={styles.label}>{t("lowLevelRepresentation.baseConverter.binary")}</div>
            <div className={styles.mono}>
              {value.toString(2).padStart(8, "0")}
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.label}>{t("lowLevelRepresentation.baseConverter.hexadecimal")}</div>
            <div className={styles.main}>
              {value.toString(16).toUpperCase()}
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.label}>{t("lowLevelRepresentation.baseConverter.octal")}</div>
            <div className={styles.main}>
              {value.toString(8)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
