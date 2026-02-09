import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";
import styles from "./AlgorithmAnalysis.module.scss";
import HeroSection from "../../components/HeroSection/HeroSection";
import LayoutSection from "../../components/LayoutSection/LayoutSection";
import { algorithmAnalysisTOC } from "../../data/tocSections";

export default function AlgorithmAnalysis() {
  const { t } = useTranslation();

  return (
    <article className={styles.page}>
      {/* HERO */}
      <HeroSection />

      {/* LAYOUT */}
      <LayoutSection toc={algorithmAnalysisTOC}>
        <section className={styles.section}>
          <h2 id="introduction">{t("algorithmAnalysis.content.introductionTitle")}</h2>

          <p>
            <Trans i18nKey="algorithmAnalysis.content.introduction.0" components={{ strong: <strong /> }} />
          </p>

          <p>
            <Trans i18nKey="algorithmAnalysis.content.introduction.1" components={{ strong: <strong /> }} />
          </p>
        </section>

        <section className={styles.section}>
          <h2 id="complexity">{t("algorithmAnalysis.content.complexityTitle")}</h2>

          <p>
            <Trans i18nKey="algorithmAnalysis.content.complexity.0" components={{ strong: <strong /> }} />
          </p>

          <p>
            <Trans i18nKey="algorithmAnalysis.content.complexity.1" components={{ strong: <strong /> }} />
          </p>
        </section>

        <section className={styles.section}>
          <h2 id="big-o">{t("algorithmAnalysis.content.bigOTitle")}</h2>

          <p>
            <Trans i18nKey="algorithmAnalysis.content.bigO.0" components={{ strong: <strong /> }} />
          </p>

          <p>
            <Trans i18nKey="algorithmAnalysis.content.bigO.1" components={{ strong: <strong /> }} />
          </p>

          <p>
            <Trans i18nKey="algorithmAnalysis.content.bigO.2" components={{ strong: <strong /> }} />
          </p>
        </section>

        <section className={styles.section}>
          <h2 id="examples">{t("algorithmAnalysis.content.examplesTitle")}</h2>

          <p>
            <Trans i18nKey="algorithmAnalysis.content.examples.0" components={{ strong: <strong /> }} />
          </p>

          <p>
            <Trans i18nKey="algorithmAnalysis.content.examples.1" components={{ strong: <strong /> }} />
          </p>
        </section>
      </LayoutSection>
    </article>
  );
}
