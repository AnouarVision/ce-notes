import { useState } from "react";
import styles from "./AsciiConverter.module.scss";
import { useTranslation } from "react-i18next";

const CHARACTERS = ["A", "B", "a", "0", "!", "?"];

export default function AsciiConverter() {
  const { t } = useTranslation();
  const [selectedChar, setSelectedChar] = useState(null);

  const asciiValue =
    selectedChar !== null ? selectedChar.charCodeAt(0) : null;

  return (
    <div className={styles.demoSection}>
      <h4>{t("lowLevelRepresentation.asciiConverter.title")}</h4>

      <p className={styles.hint}>
        {t("lowLevelRepresentation.asciiConverter.hint")}
      </p>

      <div className={styles.asciiInput}>
        {CHARACTERS.map((char) => (
          <button
            key={char}
            className={`${styles.charBtn} ${selectedChar === char ? styles.active : ""
              }`}
            onClick={() => setSelectedChar(char)}
            aria-label={`Character ${char}`}
          >
            {char}
          </button>
        ))}
      </div>

      {selectedChar !== null && (
        <div className={styles.asciiOutput}>
          <div className={styles.card}>
            <div className={styles.main}>{selectedChar}</div>
            <div className={styles.label}>{t("lowLevelRepresentation.asciiConverter.characterLabel")}</div>
          </div>

          <div className={styles.card}>
            <div className={styles.main}>{asciiValue}</div>
            <div className={styles.label}>{t("lowLevelRepresentation.asciiConverter.decimalLabel")}</div>
          </div>

          <div className={styles.card}>
            <div className={styles.mono}>
              {asciiValue.toString(2).padStart(8, "0")}
            </div>
            <div className={styles.label}>{t("lowLevelRepresentation.asciiConverter.binaryLabel")}</div>
          </div>

          <div className={styles.card}>
            <div className={styles.main}>
              {asciiValue.toString(16).toUpperCase().padStart(2, "0")}
            </div>
            <div className={styles.label}>{t("lowLevelRepresentation.asciiConverter.hexLabel")}</div>
          </div>
        </div>
      )}
    </div>
  );
}
