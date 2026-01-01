import { useState } from "react";
import styles from "./ByteComposer.module.scss";
import { useTranslation } from "react-i18next";

export default function ByteComposer() {
  const { t } = useTranslation();
  const [bits, setBits] = useState(Array(8).fill(0));

  const toggleBit = (index) => {
    setBits((prev) =>
      prev.map((bit, i) => (i === index ? (bit ? 0 : 1) : bit))
    );
  };

  const decimalValue = bits.reduce(
    (acc, bit, i) => acc + bit * Math.pow(2, 7 - i),
    0
  );

  return (
    <div className={styles.demoSection}>
      <h4>{t("lowLevelRepresentation.byteComposer.title")}</h4>

      <p className={styles.hint}>
        {t("lowLevelRepresentation.byteComposer.hint")}
      </p>

      <div className={styles.byteWrapper}>
        <div className={styles.byte}>
          {bits.map((bit, index) => (
            <button
              key={index}
              className={`${styles.bit} ${bit ? styles.on : ""}`}
              onClick={() => toggleBit(index)}
              aria-label={`Bit ${7 - index}`}
            >
              {bit}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.byteInfo}>
        <div>
          {t("lowLevelRepresentation.byteComposer.decimalValue")}:
          <span className={styles.value}> {decimalValue}</span>
        </div>

        <div className={styles.note}>
          {t("lowLevelRepresentation.byteComposer.note")}
        </div>
      </div>
    </div>
  );
}
