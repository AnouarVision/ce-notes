import { useMemo, useState } from "react";
import styles from "./RealisticCircuitDemo.module.scss";
import { useTranslation } from "react-i18next";

export default function RealisticCircuitDemo() {
  const { t } = useTranslation();
  const [closed, setClosed] = useState(false);

  const label = useMemo(
    () => ({
      circuit: closed ? t("lowLevelRepresentation.realisticCircuitDemo.status.closed.circuit") : t("lowLevelRepresentation.realisticCircuitDemo.status.open.circuit"),
      voltage: closed ? t("lowLevelRepresentation.realisticCircuitDemo.status.closed.voltage") : t("lowLevelRepresentation.realisticCircuitDemo.status.open.voltage"),
      bit: closed ? t("lowLevelRepresentation.realisticCircuitDemo.status.closed.bit") : t("lowLevelRepresentation.realisticCircuitDemo.status.open.bit"),
    }),
    [closed, t]
  );


  return (
    <section className={styles.demo} aria-label="Realistic Circuit Demo">
      <header className={styles.head}>
        <h4>{t("lowLevelRepresentation.realisticCircuitDemo.title")}</h4>
        <p>
          {t("lowLevelRepresentation.realisticCircuitDemo.description")}
        </p>

      </header>

      <div className={styles.stage}>
        <svg
          className={styles.svg}
          viewBox="0 0 820 260"
          preserveAspectRatio="xMidYMid meet"
          role="img"
          aria-label="Schema: circuit with battery, switch and LED"
        >
          {/* Wires (base) */}
          <path className={styles.wireBase} d="M120 70 H340" />
          <path className={styles.wireBase} d="M480 70 H700" />
          <path className={styles.wireBase} d="M700 70 V190 H120 V70" />

          {/* Animated current overlay */}
          <path
            className={`${styles.wireFlow} ${closed ? styles.flowOn : ""}`}
            d="M120 70 H340 M480 70 H700 M700 70 V190 H120 V70"
          />

          {/* Battery */}
          <g className={styles.battery} transform="translate(70,85)">
            <text x="0" y="-18" className={styles.smallLabel}>
              {t("lowLevelRepresentation.realisticCircuitDemo.battery.label")}
            </text>
            <line x1="20" y1="-30" x2="20" y2="90" className={styles.batLong} />
            <line x1="45" y1="-5" x2="45" y2="65" className={styles.batShort} />
            <text x="8" y="-40" className={styles.polarity}>
              +
            </text>
            <text x="40" y="95" className={styles.polarity}>
              −
            </text>
          </g>

          {/* Switch */}
          <g
            className={styles.switchGroup}
            transform="translate(340,70)"
            onClick={() => setClosed((v) => !v)}
            role="button"
            tabIndex={0}
            aria-label="Toggle Switch"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setClosed((v) => !v);
            }}
          >
            <text x="0" y="-18" className={styles.smallLabel}>
              {t("lowLevelRepresentation.realisticCircuitDemo.switch.label")}
            </text>

            {/* terminals */}
            <circle cx="0" cy="0" r="8" className={styles.node} />
            <circle cx="140" cy="0" r="8" className={styles.node} />

            {/* fixed contact */}
            <line x1="0" y1="0" x2="60" y2="0" className={styles.switchMetal} />

            {/* moving arm */}
            <line
              x1="60"
              y1="0"
              x2={closed ? 140 : 130}
              y2={closed ? 0 : -35}
              className={`${styles.switchArm} ${closed ? styles.armClosed : ""}`}
            />

            {/* click hint */}
            <text x="0" y="34" className={styles.hint}>
              {t("lowLevelRepresentation.realisticCircuitDemo.switch.hint")}
            </text>

          </g>

          {/* LED */}
          <g className={styles.led} transform="translate(700,70)">
            <text x="-10" y="-18" className={styles.smallLabel}>
              LED
            </text>

            {/* diode symbol */}
            <polygon
              points="0,-25 0,25 45,0"
              className={`${styles.diode} ${closed ? styles.diodeOn : ""}`}
            />
            <line x1="55" y1="-28" x2="55" y2="28" className={styles.diodeBar} />

            {/* glow */}
            <circle
              cx="85"
              cy="0"
              r="18"
              className={`${styles.glow} ${closed ? styles.glowOn : ""}`}
            />
            <text x="73" y="5" className={styles.ledText}>
              {closed ? t("lowLevelRepresentation.realisticCircuitDemo.led.on") : t("lowLevelRepresentation.realisticCircuitDemo.led.off")}
            </text>

          </g>
        </svg>

        <div className={styles.readout}>
          <div className={styles.card}>
            <div className={styles.k}>{t("lowLevelRepresentation.realisticCircuitDemo.readout.circuit")}</div>
            <div className={styles.v}>{label.circuit}</div>
          </div>
          <div className={styles.card}>
            <div className={styles.k}>{t("lowLevelRepresentation.realisticCircuitDemo.readout.voltage")}</div>
            <div className={styles.v}>{label.voltage}</div>
          </div>
          <div className={styles.card}>
            <div className={styles.k}>{t("lowLevelRepresentation.realisticCircuitDemo.readout.bit")}</div>
            <div className={styles.v}>{label.bit}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
