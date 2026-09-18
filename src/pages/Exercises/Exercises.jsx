import { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FaArrowLeft,
  FaBookOpen,
  FaCode,
  FaLayerGroup,
  FaListAlt,
} from "react-icons/fa";
import styles from "./Exercises.module.scss";

const exerciseAreas = [
  {
    key: "cybersecurity",
    slug: "cybersecurity",
    exercises: ["accessControl", "threatModel"],
  },
  {
    key: "programming",
    slug: "programming",
    exercises: ["javaControlFlow", "recursion"],
  },
  {
    key: "objectOrientedProgramming",
    slug: "object-oriented-programming",
    exercises: ["classDesign", "interfaces"],
  },
  {
    key: "introCs",
    slug: "introductory-computer-science",
    exercises: ["dataRepresentation", "cPointers"],
  },
  {
    key: "dataStructures",
    slug: "data-structures",
    exercises: ["complexity", "stacksAndQueues"],
  },
  {
    key: "databases",
    slug: "database-systems",
    exercises: ["sqlQuery", "normalization"],
  },
  {
    key: "computerArchitecture",
    slug: "computer-architecture",
    exercises: ["binaryArithmetic", "pipeline"],
  },
  {
    key: "discreteMathLogic",
    slug: "discrete-mathematics-logic",
    exercises: ["combinatorics", "graphs"],
  },
  {
    key: "linearAlgebra",
    slug: "linear-algebra-geometry",
    exercises: ["linearSystem", "eigenvalues"],
  },
  {
    key: "analysis",
    slug: "mathematical-analysis",
    exercises: ["functionLimit", "derivative"],
  },
  {
    key: "networking",
    slug: "networking",
    exercises: ["subnetting", "routing"],
  },
  {
    key: "physics",
    slug: "physics",
    exercises: ["newtonLaw", "energy"],
  },
];

const exerciseModes = [
  { key: "review", icon: FaBookOpen },
  { key: "practice", icon: FaCode },
  { key: "mixed", icon: FaLayerGroup },
];

export default function Exercises() {
  const { t } = useTranslation();
  const { areaSlug, exerciseKey } = useParams();
  const [searchParams] = useSearchParams();
  const [isMobile, setIsMobile] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 600px)");
    const updateViewport = () => setIsMobile(mediaQuery.matches);

    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);

    return () => mediaQuery.removeEventListener("change", updateViewport);
  }, []);

  useEffect(() => {
    if (areaSlug || !isMobile || visibleCount >= exerciseAreas.length) {
      return undefined;
    }

    const sentinel = document.querySelector("[data-exercise-loader]");
    if (!sentinel) {
      return undefined;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || isLoading) {
        return;
      }

      setIsLoading(true);
      window.setTimeout(() => {
        setVisibleCount((currentCount) =>
          Math.min(currentCount + 3, exerciseAreas.length)
        );
        setIsLoading(false);
      }, 350);
    }, { rootMargin: "120px" });

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [areaSlug, isLoading, isMobile, visibleCount]);

  if (areaSlug && exerciseKey) {
    return <ExerciseDetailPage areaSlug={areaSlug} exerciseKey={exerciseKey} t={t} />;
  }

  if (areaSlug) {
    return <ExerciseAreaPage areaSlug={areaSlug} t={t} />;
  }

  const selectedArea = searchParams.get("area");

  const filteredAreas = selectedArea
    ? exerciseAreas.filter((area) => area.key === selectedArea)
    : exerciseAreas;
  const visibleAreas = isMobile
    ? filteredAreas.slice(0, visibleCount)
    : filteredAreas;

  return (
    <main className={styles.exercises}>
      <div className="container">
        <header className={styles.header}>
          <p className={styles.eyebrow}>{t("exercises.eyebrow")}</p>
          <h1>{t("exercises.title")}</h1>
          <p className={styles.intro}>{t("exercises.description")}</p>
        </header>

        <section className={styles.modes} aria-labelledby="exercise-modes-title">
          <h2 id="exercise-modes-title">{t("exercises.modesTitle")}</h2>
          <div className={styles.modeGrid}>
            {exerciseModes.map(({ key, icon: Icon }) => (
              <article className={styles.modeCard} key={key}>
                <div className={styles.modeIcon}><Icon aria-hidden="true" /></div>
                <div>
                  <h3>{t(`exercises.modes.${key}.title`)}</h3>
                  <p>{t(`exercises.modes.${key}.description`)}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.areaSection} aria-labelledby="exercise-areas-title">
          <div className={styles.sectionHeader}>
            <div>
              <h2 id="exercise-areas-title">{t("exercises.areasTitle")}</h2>
              <p>{t("exercises.areasDescription")}</p>
            </div>
          </div>

          <div className={styles.areaGrid}>
            {visibleAreas.map((area) => (
              <article className={styles.areaCard} key={area.key}>
                <span className={styles.areaTag}>{t("exercises.linkedArea")}</span>
                <h3>{t(`home.topics.${area.key}.title`)}</h3>
                <p>{t(`home.topics.${area.key}.description`)}</p>
                <div className={styles.cardActions}>
                  <Link to={`/topic/${area.slug}`} className={`${styles.actionButton} ${styles.notesButton}`}>
                    <FaBookOpen aria-hidden="true" />
                    {t("exercises.openNotes")}
                  </Link>
                  <Link to={`/exercises/${area.slug}`} className={`${styles.actionButton} ${styles.exerciseButton}`}>
                    <FaListAlt aria-hidden="true" />
                    {t("exercises.openExercises")}
                  </Link>
                </div>
              </article>
            ))}
          </div>
          {isMobile && visibleAreas.length < filteredAreas.length && (
            <div
              className={styles.mobileLoader}
              data-exercise-loader
              role="status"
              aria-label={t("exercises.loading")}
              aria-live="polite"
            >
              <span className={styles.loaderDot} aria-hidden="true" />
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

function ExerciseAreaPage({ areaSlug, t }) {
  const area = exerciseAreas.find((item) => item.slug === areaSlug);

  if (!area) {
    return (
      <main className={styles.exercises}>
        <div className="container">
          <h1>{t("exercises.notFound")}</h1>
          <Link to="/exercises" className={styles.backLink}>
            <FaArrowLeft aria-hidden="true" /> {t("exercises.backToExercises")}
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.exercises}>
      <div className="container">
        <Link to="/exercises" className={styles.backLink}>
          <FaArrowLeft aria-hidden="true" /> {t("exercises.backToExercises")}
        </Link>
        <header className={styles.header}>
          <p className={styles.eyebrow}>{t("exercises.eyebrow")}</p>
          <h1>{t(`home.topics.${area.key}.title`)}</h1>
          <p className={styles.intro}>{t(`home.topics.${area.key}.description`)}</p>
        </header>

        <section className={styles.exercisePageSection} aria-labelledby="area-exercises-title">
          <h2 id="area-exercises-title">{t("exercises.topicExercisesTitle")}</h2>
          <div className={styles.exercisePageList}>
            {area.exercises.map((exerciseKey, index) => (
                <Link
                  to={`/exercises/${area.slug}/${exerciseKey}`}
                  className={styles.exercisePageCard}
                  key={exerciseKey}
                >
                <div className={styles.exerciseMeta}>
                  <span>{t("exercises.exerciseLabel")} {index + 1}</span>
                  <span>{t(`exercises.items.${exerciseKey}.difficulty`)}</span>
                </div>
                <h3>{t(`exercises.items.${exerciseKey}.title`)}</h3>
                <p>{t(`exercises.items.${exerciseKey}.description`)}</p>
                </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function ExerciseDetailPage({ areaSlug, exerciseKey, t }) {
  const area = exerciseAreas.find((item) => item.slug === areaSlug);
  const isKnownExercise = area?.exercises.includes(exerciseKey);

  if (!area || !isKnownExercise) {
    return (
      <main className={styles.exercises}>
        <div className="container">
          <h1>{t("exercises.notFound")}</h1>
          <Link to="/exercises" className={styles.backLink}>
            <FaArrowLeft aria-hidden="true" /> {t("exercises.backToExercises")}
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.exercises}>
      <div className="container">
        <Link to={`/exercises/${area.slug}`} className={styles.backLink}>
          <FaArrowLeft aria-hidden="true" /> {t("exercises.backToSubject")}
        </Link>
        <header className={styles.header}>
          <p className={styles.eyebrow}>{t("exercises.exerciseLabel")}</p>
          <h1>{t(`exercises.items.${exerciseKey}.title`)}</h1>
          <p className={styles.intro}>{t(`home.topics.${area.key}.title`)}</p>
        </header>

        <section className={styles.detailLayout}>
          <article className={styles.promptCard}>
            <div className={styles.exerciseMeta}>
              <span>{t("exercises.promptTitle")}</span>
              <span>{t(`exercises.items.${exerciseKey}.difficulty`)}</span>
            </div>
            <h2>{t(`exercises.items.${exerciseKey}.title`)}</h2>
            <p>{t(`exercises.items.${exerciseKey}.description`)}</p>
          </article>

          <section className={styles.solutionCard} aria-labelledby="solution-title">
            <h2 id="solution-title">{t("exercises.solutionTitle")}</h2>
            <p>{t("exercises.solutionIntro")}</p>
            <div className={styles.solutionTemplate}>
              <h3>{t("exercises.approachTitle")}</h3>
              <p>{t("exercises.approachPlaceholder")}</p>
              <h3>{t("exercises.solutionStepsTitle")}</h3>
              <ol>
                <li>{t("exercises.stepPlaceholder")}</li>
                <li>{t("exercises.stepPlaceholder")}</li>
                <li>{t("exercises.stepPlaceholder")}</li>
              </ol>
              <h3>{t("exercises.codeTitle")}</h3>
              <pre><code>{t("exercises.codePlaceholder")}</code></pre>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}
