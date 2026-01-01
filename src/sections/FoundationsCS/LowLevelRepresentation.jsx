import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";
import styles from "./LowLevelRepresentation.module.scss";
import RealisticCircuitDemo from "./RealisticCircuitDemo";
import SignalDiscretizationDemo from "./SignalDiscretizationDemo";
import ByteComposer from "./ByteComposer";
import AsciiConverter from "./AsciiConverter";
import BaseConverter from "./BaseConverter";
import HeroSection from "../../components/HeroSection/HeroSection";
import LayoutSection from "../../components/LayoutSection/LayoutSection";
import { lowLevelRepresentationTOC } from "../../data/tocSections";

export default function LowLevelRepresentation() {
  const { t } = useTranslation();

  return (
    <article className={styles.page}>
      {/* HERO */}
      <HeroSection />

      {/* LAYOUT */}
      <LayoutSection toc={lowLevelRepresentationTOC}>
        <section className={styles.section}>
          <h2 id="why-computers">{t("lowLevelRepresentation.content.whyComputersTitle")}</h2>

          <p>
            <Trans i18nKey="lowLevelRepresentation.content.whyComputers.0" components={{ strong: <strong /> }} />
          </p>

          <p>
            <Trans i18nKey="lowLevelRepresentation.content.whyComputers.1" components={{ strong: <strong /> }} />
          </p>
          <RealisticCircuitDemo />

          <p>
            <Trans i18nKey="lowLevelRepresentation.content.whyComputers.2" components={{ strong: <strong /> }} />
          </p>

          <p>
            <Trans i18nKey="lowLevelRepresentation.content.whyComputers.3" components={{ strong: <strong /> }} />
          </p>
          <SignalDiscretizationDemo />
          <p>
            <Trans i18nKey="lowLevelRepresentation.content.whyComputers.4" components={{ strong: <strong /> }} />
          </p>

          <p>
            <Trans i18nKey="lowLevelRepresentation.content.whyComputers.5" components={{ strong: <strong /> }} />
          </p>

          <p>
            <Trans i18nKey="lowLevelRepresentation.content.whyComputers.6" components={{ strong: <strong /> }} />
          </p>
        </section>

        <section className={styles.section}>
          <h2 id="bits-bytes">{t("lowLevelRepresentation.content.bitsBytesTitle")}</h2>
          <p>
            <Trans i18nKey="lowLevelRepresentation.content.bitsBytes.0" components={{ strong: <strong /> }} />
          </p>

          <p>
            <Trans i18nKey="lowLevelRepresentation.content.bitsBytes.1" components={{ strong: <strong /> }} />
          </p>
          <ByteComposer />
          <p>
            <Trans i18nKey="lowLevelRepresentation.content.bitsBytes.2" components={{ strong: <strong /> }} />
          </p>

          <p>
            <Trans i18nKey="lowLevelRepresentation.content.bitsBytes.3" components={{ strong: <strong /> }} />
          </p>

          <p>
            <Trans i18nKey="lowLevelRepresentation.content.bitsBytes.4" components={{ strong: <strong /> }} />
          </p>
        </section>
        <section className={styles.section}>
          <h2 id="numbers-to-symbols">{t("lowLevelRepresentation.content.numbersToSymbolsTitle")}</h2>
          <p>
            <Trans i18nKey="lowLevelRepresentation.content.numbersToSymbols.0" components={{ strong: <strong /> }} />
          </p>
          <AsciiConverter />
          <p>
            <Trans i18nKey="lowLevelRepresentation.content.numbersToSymbols.1" components={{ strong: <strong /> }} />
          </p>
        </section>
        <section className={styles.section}>
          <h2 id="data-representation">{t("lowLevelRepresentation.content.dataRepresentationTitle")}</h2>
          <p>
            <Trans i18nKey="lowLevelRepresentation.content.dataRepresentation.0" />
          </p>
          <p>
            <Trans i18nKey="lowLevelRepresentation.content.dataRepresentation.1" />
          </p>
          <p>
            <Trans i18nKey="lowLevelRepresentation.content.dataRepresentation.2" />
          </p>
        </section>
        <section>
          <h3 id="numeric-types">{t("lowLevelRepresentation.content.numericTypesTitle")}</h3>
          <p>
            <Trans i18nKey="lowLevelRepresentation.content.numericTypes.0" />
          </p>
          <p>
            <Trans i18nKey="lowLevelRepresentation.content.numericTypes.1" />
          </p>
        </section>
        <section>
          <h3 id="char-type">{t("lowLevelRepresentation.content.charTypeTitle")}</h3>
          <p>
            <Trans i18nKey="lowLevelRepresentation.content.charType.0" />
          </p>
          <p>
            <Trans i18nKey="lowLevelRepresentation.content.charType.1" />
          </p>
        </section>
        <section>
          <h3 id="conventions">{t("lowLevelRepresentation.content.conventionsTitle")}</h3>
          <p>
            <Trans i18nKey="lowLevelRepresentation.content.conventions.0" />
          </p>
        </section>
        <section>
          <h4 id="positional-coding">{t("lowLevelRepresentation.content.positionalCodingTitle")}</h4>
          <p>
            <Trans i18nKey="lowLevelRepresentation.content.positionalCoding.0" />
          </p>

          <p>
            <Trans i18nKey="lowLevelRepresentation.content.positionalCoding.1" />
          </p>

          <BaseConverter />

          <p>
            <Trans i18nKey="lowLevelRepresentation.content.positionalCoding.2" />
          </p>
        </section>
      </LayoutSection>
    </article>
  );
}
