import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";
import { useState } from "react";
import { MdContentCopy, MdCheck } from "react-icons/md";
import styles from "./AlgorithmAnalysis.module.scss";
import HeroSection from "../../components/HeroSection/HeroSection";
import LayoutSection from "../../components/LayoutSection/LayoutSection";
import { algorithmAnalysisTOC } from "../../data/tocSections";

export default function AlgorithmAnalysis() {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(null);

  const handleCopyCode = (index) => {
    const terminalCards = document.querySelectorAll(`.${styles.terminalCard}`);
    if (terminalCards[index]) {
      const codeElement = terminalCards[index].querySelector(`.${styles.terminalCode}`);
      if (codeElement) {
        const text = codeElement.innerText;
        navigator.clipboard.writeText(text).then(() => {
          setCopied(index);
          setTimeout(() => setCopied(null), 2000);
        });
      }
    }
  };

  return (
    <article className={styles.page}>
      <HeroSection
        titleStart={t("algorithmAnalysis.hero.titleStart")}
        titleHighlight={t("algorithmAnalysis.hero.titleHighlight")}
        subtitle={t("algorithmAnalysis.hero.subtitle")}
      />

      <LayoutSection toc={algorithmAnalysisTOC}>
        {/* PART 0: Objective of the course */}
        <section className={styles.section}>
          <h2 id="why-this-course">{t("algorithmAnalysis.why_this_course.title")}</h2>

          <p>
            <Trans i18nKey="algorithmAnalysis.why_this_course.p1" />
          </p>

          <p>
            <Trans i18nKey="algorithmAnalysis.why_this_course.p2_intro" />

            <p><Trans i18nKey="algorithmAnalysis.why_this_course.p3_intro" />
              <ul>
                <li>{t("algorithmAnalysis.why_this_course.p2_item1")}</li>
                <li>{t("algorithmAnalysis.why_this_course.p2_item2")}</li>
                <li>{t("algorithmAnalysis.why_this_course.p2_item3")}</li>
              </ul>
            </p>
          </p>
        </section>

        {/* PART 1: Fundamentals */}
        <section className={styles.section}>
          <h2 id="fundamentals">{t("algorithmAnalysis.fundamentals.title")}</h2>

          <h3 id="algorithms">{t("algorithmAnalysis.fundamentals.chapter1.title")}</h3>

          <h4>{t("algorithmAnalysis.fundamentals.chapter1.section1.title")}</h4>

          <div className={styles.definitionsGrid}>
            <div className={styles.definitionCard}>
              <h5 className={styles.definitionCardTitle}>
                {t("algorithmAnalysis.fundamentals.chapter1.section1.subsection1.title")}
              </h5>
              <div className={styles.definitionCardContent}>
                <p>
                  <Trans i18nKey="algorithmAnalysis.fundamentals.chapter1.section1.subsection1.p1" />
                </p>
                <div className={styles.definitionFormula}>
                  <Trans i18nKey="algorithmAnalysis.fundamentals.chapter1.section1.subsection1.p2" />
                </div>
                <p>
                  <Trans i18nKey="algorithmAnalysis.fundamentals.chapter1.section1.subsection1.p3" />
                </p>
                <p>
                  <Trans i18nKey="algorithmAnalysis.fundamentals.chapter1.section1.subsection1.p4" />
                </p>
              </div>
            </div>

            <div className={`${styles.definitionCard} ${styles.algorithmCard}`}>
              <h5 className={styles.definitionCardTitle}>
                {t("algorithmAnalysis.fundamentals.chapter1.section1.subsection2.title")}
              </h5>
              <div className={styles.definitionCardContent}>
                <p>
                  <Trans i18nKey="algorithmAnalysis.fundamentals.chapter1.section1.subsection2.p1" />
                </p>
                <p>
                  <Trans i18nKey="algorithmAnalysis.fundamentals.chapter1.section1.subsection2.p2" />
                </p>
                <ul className={styles.definitionList}>
                  <li><Trans i18nKey="algorithmAnalysis.fundamentals.chapter1.section1.subsection2.p2_item1" /></li>
                  <li><Trans i18nKey="algorithmAnalysis.fundamentals.chapter1.section1.subsection2.p2_item2" /></li>
                  <li><Trans i18nKey="algorithmAnalysis.fundamentals.chapter1.section1.subsection2.p2_item3" /></li>
                  <li><Trans i18nKey="algorithmAnalysis.fundamentals.chapter1.section1.subsection2.p2_item4" /></li>
                  <li><Trans i18nKey="algorithmAnalysis.fundamentals.chapter1.section1.subsection2.p2_item5" /></li>
                  <li><Trans i18nKey="algorithmAnalysis.fundamentals.chapter1.section1.subsection2.p2_item6" /></li>
                  <li><Trans i18nKey="algorithmAnalysis.fundamentals.chapter1.section1.subsection2.p2_item7" /></li>
                </ul>
              </div>
            </div>
          </div>

          <h4>{t("algorithmAnalysis.fundamentals.chapter1.section2.title")}</h4>

          <ul>
            <li>
              <Trans i18nKey="algorithmAnalysis.fundamentals.chapter1.section2.p1_item1" />
              <ul>
                <li><Trans i18nKey="algorithmAnalysis.fundamentals.chapter1.section2.p1_item1_children_0" /></li>
                <li><Trans i18nKey="algorithmAnalysis.fundamentals.chapter1.section2.p1_item1_children_1" /></li>
              </ul>
            </li>
            <li>
              <Trans i18nKey="algorithmAnalysis.fundamentals.chapter1.section2.p2_item2" />
              <ul>
                <li><Trans i18nKey="algorithmAnalysis.fundamentals.chapter1.section2.p2_item2_children_0" /></li>
                <li><Trans i18nKey="algorithmAnalysis.fundamentals.chapter1.section2.p2_item2_children_1" /></li>
                <li><Trans i18nKey="algorithmAnalysis.fundamentals.chapter1.section2.p2_item2_children_2" /></li>
              </ul>
            </li>
          </ul>

          <h4>{t("algorithmAnalysis.fundamentals.chapter1.section3.title")}</h4>

          <div className={styles.examplesGrid}>
            {[0, 1, 2, 3].map((index) => (
              <div key={index} className={styles.exampleCard}>
                <h5 className={styles.exampleTitle}>
                  {t(`algorithmAnalysis.fundamentals.chapter1.section3.list.${index}.problem`)}
                </h5>
                <div className={styles.exampleSection}>
                  <strong>{t('algorithmAnalysis.fundamentals.chapter1.section3.definitionLabel')}:</strong>
                  <p>
                    <Trans i18nKey={`algorithmAnalysis.fundamentals.chapter1.section3.list.${index}.definition`} />
                  </p>
                </div>
                <div className={styles.exampleSection}>
                  <strong>{t('algorithmAnalysis.fundamentals.chapter1.section3.algorithmLabel')}:</strong>
                  <p>
                    <Trans i18nKey={`algorithmAnalysis.fundamentals.chapter1.section3.list.${index}.algorithm`} />
                  </p>
                </div>
              </div>
            ))}
          </div>


          <div className={styles.examplesCarousel}>
            <div className={styles.carouselTrack}>
              {[0, 1, 2, 3].map((index) => (
                <div key={index} className={styles.exampleCard}>
                  <h5 className={styles.exampleTitle}>
                    {t(`algorithmAnalysis.fundamentals.chapter1.section3.list.${index}.problem`)}
                  </h5>
                  <div className={styles.exampleSection}>
                    <strong>{t('algorithmAnalysis.fundamentals.chapter1.section3.definitionLabel')}:</strong>
                    <p>
                      <Trans i18nKey={`algorithmAnalysis.fundamentals.chapter1.section3.list.${index}.definition`} />
                    </p>
                  </div>
                  <div className={styles.exampleSection}>
                    <strong>{t('algorithmAnalysis.fundamentals.chapter1.section3.algorithmLabel')}:</strong>
                    <p>
                      <Trans i18nKey={`algorithmAnalysis.fundamentals.chapter1.section3.list.${index}.algorithm`} />
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h3 id="describing-algorithms">{t("algorithmAnalysis.fundamentals.chapter2.title")}</h3>

          <h4>{t("algorithmAnalysis.fundamentals.chapter2.section1.title")}</h4>

          <p>
            <Trans i18nKey="algorithmAnalysis.fundamentals.chapter2.section1.p1" />
          </p>

          <p>
            <Trans i18nKey="algorithmAnalysis.fundamentals.chapter2.section1.p2" />
          </p>

          <ul>
            <li>
              <Trans i18nKey="algorithmAnalysis.fundamentals.chapter2.section1.p2_item1_children_0" />
            </li>
            <li>
              <Trans i18nKey="algorithmAnalysis.fundamentals.chapter2.section1.p2_item1_children_1" />
            </li>
          </ul>

          <h4>{t("algorithmAnalysis.fundamentals.chapter2.section2.title")}</h4>

          <p>
            <Trans i18nKey="algorithmAnalysis.fundamentals.chapter2.section2.p1" />
          </p>

          <div className={styles.terminalContainer}>

            <div className={styles.terminalCard}>
              <div className={styles.terminalHeader}>
                <div className={styles.terminalDots}>
                  <span></span><span></span><span></span>
                </div>
                <span className={styles.terminalTitle}>Deletion(S, t)</span>
                <button
                  className={`${styles.copyButton} ${copied === 0 ? styles.copied : ''}`}
                  onClick={() => handleCopyCode(0)}
                  title="Copy code"
                >
                  {copied === 0 ? <MdCheck size={20} /> : <MdContentCopy size={20} />}
                </button>
              </div>
              <div className={styles.terminalBody}>
                <pre className={styles.terminalCode}>
                  <span className={styles.synKeyword}>function</span> <span className={styles.synFunction}>delete</span>(<span className={styles.synVariable}>S</span>: <span className={styles.synType}>integer[]</span>, <span className={styles.synVariable}>n</span>: <span className={styles.synType}>integer</span>, <span className={styles.synVariable}>t</span>: <span className={styles.synType}>integer</span>) <span className={styles.synOperator}>→</span> <span className={styles.synType}>integer[]</span>, <span className={styles.synType}>integer</span>{`
`}  <span className={styles.synKeyword}>variable</span> <span className={styles.synVariable}>i</span>: <span className={styles.synType}>integer</span> <span className={styles.synOperator}>←</span> <span className={styles.synNumber}>0</span>{`
`}  <span className={styles.synKeyword}>variable</span> <span className={styles.synVariable}>j</span>: <span className={styles.synType}>integer</span>{`
`}  <span className={styles.synKeyword}>for</span> <span className={styles.synVariable}>i</span> <span className={styles.synKeyword}>to</span> <span className={styles.synVariable}>n</span><span className={styles.synOperator}>-</span><span className={styles.synNumber}>1</span> <span className={styles.synKeyword}>do</span>{`
`}    <span className={styles.synKeyword}>if</span> <span className={styles.synVariable}>S</span>[<span className={styles.synVariable}>i</span>] <span className={styles.synOperator}>==</span> <span className={styles.synVariable}>t</span> <span className={styles.synKeyword}>then</span>{`
`}      <span className={styles.synKeyword}>for</span> <span className={styles.synVariable}>j</span> <span className={styles.synOperator}>←</span> <span className={styles.synVariable}>i</span> <span className={styles.synKeyword}>to</span> <span className={styles.synVariable}>n</span><span className={styles.synOperator}>-</span><span className={styles.synNumber}>2</span> <span className={styles.synKeyword}>do</span>{`
`}        <span className={styles.synVariable}>S</span>[<span className={styles.synVariable}>j</span>] <span className={styles.synOperator}>←</span> <span className={styles.synVariable}>S</span>[<span className={styles.synVariable}>j</span><span className={styles.synOperator}>+</span><span className={styles.synNumber}>1</span>]{`
`}      <span className={styles.synKeyword}>end for</span>{`
`}      <span className={styles.synVariable}>n</span> <span className={styles.synOperator}>←</span> <span className={styles.synVariable}>n</span><span className={styles.synOperator}>-</span><span className={styles.synNumber}>1</span>{`
`}      <span className={styles.synKeyword}>return</span> <span className={styles.synVariable}>S</span>, <span className={styles.synVariable}>n</span>{`
`}    <span className={styles.synKeyword}>end if</span>{`
`}  <span className={styles.synKeyword}>end for</span>{`
`}  <span className={styles.synKeyword}>return</span> <span className={styles.synVariable}>S</span>, <span className={styles.synVariable}>n</span>
                </pre>
              </div>
            </div>

            <div className={styles.terminalCard}>
              <div className={styles.terminalHeader}>
                <div className={styles.terminalDots}>
                  <span></span><span></span><span></span>
                </div>
                <span className={styles.terminalTitle}>Sort(S) - Bubble Sort</span>
                <button
                  className={`${styles.copyButton} ${copied === 1 ? styles.copied : ''}`}
                  onClick={() => handleCopyCode(1)}
                  title="Copy code"
                >
                  {copied === 1 ? <MdCheck size={20} /> : <MdContentCopy size={20} />}
                </button>
              </div>
              <div className={styles.terminalBody}>
                <pre className={styles.terminalCode}>
                  <span className={styles.synKeyword}>function</span> <span className={styles.synFunction}>sort</span>(<span className={styles.synVariable}>S</span>: <span className={styles.synType}>integer[]</span>, <span className={styles.synVariable}>n</span>: <span className={styles.synType}>integer</span>) <span className={styles.synOperator}>→</span> <span className={styles.synType}>integer[]</span>{`
`}  <span className={styles.synKeyword}>variable</span> <span className={styles.synVariable}>i</span>: <span className={styles.synType}>integer</span> <span className={styles.synOperator}>←</span> <span className={styles.synNumber}>0</span>{`
`}  <span className={styles.synKeyword}>variable</span> <span className={styles.synVariable}>j</span>: <span className={styles.synType}>integer</span> <span className={styles.synOperator}>←</span> <span className={styles.synNumber}>0</span>{`
`}  <span className={styles.synKeyword}>variable</span> <span className={styles.synVariable}>temp</span>: <span className={styles.synType}>integer</span>{`
`}  <span className={styles.synKeyword}>for</span> <span className={styles.synVariable}>i</span> <span className={styles.synKeyword}>to</span> <span className={styles.synVariable}>n</span><span className={styles.synOperator}>-</span><span className={styles.synNumber}>2</span> <span className={styles.synKeyword}>do</span>{`
`}    <span className={styles.synKeyword}>for</span> <span className={styles.synVariable}>j</span> <span className={styles.synKeyword}>to</span> <span className={styles.synVariable}>n</span><span className={styles.synOperator}>-</span><span className={styles.synNumber}>2</span><span className={styles.synOperator}>-</span><span className={styles.synVariable}>i</span> <span className={styles.synKeyword}>do</span>{`
`}      <span className={styles.synKeyword}>if</span> <span className={styles.synVariable}>S</span>[<span className={styles.synVariable}>j</span>] <span className={styles.synOperator}>{'>'}</span> <span className={styles.synVariable}>S</span>[<span className={styles.synVariable}>j</span><span className={styles.synOperator}>+</span><span className={styles.synNumber}>1</span>] <span className={styles.synKeyword}>then</span>{`
`}        <span className={styles.synVariable}>temp</span> <span className={styles.synOperator}>←</span> <span className={styles.synVariable}>S</span>[<span className={styles.synVariable}>j</span>]{`
`}        <span className={styles.synVariable}>S</span>[<span className={styles.synVariable}>j</span>] <span className={styles.synOperator}>←</span> <span className={styles.synVariable}>S</span>[<span className={styles.synVariable}>j</span><span className={styles.synOperator}>+</span><span className={styles.synNumber}>1</span>]{`
`}        <span className={styles.synVariable}>S</span>[<span className={styles.synVariable}>j</span><span className={styles.synOperator}>+</span><span className={styles.synNumber}>1</span>] <span className={styles.synOperator}>←</span> <span className={styles.synVariable}>temp</span>{`
`}      <span className={styles.synKeyword}>end if</span>{`
`}    <span className={styles.synKeyword}>end for</span>{`
`}  <span className={styles.synKeyword}>end for</span>{`
`}  <span className={styles.synKeyword}>return</span> <span className={styles.synVariable}>S</span>
                </pre>
              </div>
            </div>

            <div className={styles.terminalCard}>
              <div className={styles.terminalHeader}>
                <div className={styles.terminalDots}>
                  <span></span><span></span><span></span>
                </div>
                <span className={styles.terminalTitle}>Search(A, v)</span>
                <button
                  className={`${styles.copyButton} ${copied === 2 ? styles.copied : ''}`}
                  onClick={() => handleCopyCode(2)}
                  title="Copy code"
                >
                  {copied === 2 ? <MdCheck size={20} /> : <MdContentCopy size={20} />}
                </button>
              </div>
              <div className={styles.terminalBody}>
                <pre className={styles.terminalCode}>
                  <span className={styles.synKeyword}>function</span> <span className={styles.synFunction}>lookup</span>(<span className={styles.synVariable}>A</span>: <span className={styles.synType}>integer[]</span>, <span className={styles.synVariable}>n</span>: <span className={styles.synType}>integer</span>, <span className={styles.synVariable}>v</span>: <span className={styles.synType}>integer</span>) <span className={styles.synOperator}>→</span> <span className={styles.synType}>integer</span>{`
`}  <span className={styles.synKeyword}>variable</span> <span className={styles.synVariable}>i</span>: <span className={styles.synType}>integer</span> <span className={styles.synOperator}>←</span> <span className={styles.synNumber}>0</span>{`
`}  <span className={styles.synKeyword}>for</span> <span className={styles.synVariable}>i</span> <span className={styles.synKeyword}>to</span> <span className={styles.synVariable}>n</span><span className={styles.synOperator}>-</span><span className={styles.synNumber}>1</span> <span className={styles.synKeyword}>do</span>{`
`}    <span className={styles.synKeyword}>if</span> <span className={styles.synVariable}>A</span>[<span className={styles.synVariable}>i</span>] <span className={styles.synOperator}>==</span> <span className={styles.synVariable}>v</span> <span className={styles.synKeyword}>then</span>{`
`}      <span className={styles.synKeyword}>return</span> <span className={styles.synVariable}>i</span>{`
`}    <span className={styles.synKeyword}>end if</span>{`
`}  <span className={styles.synKeyword}>end for</span>{`
`}  <span className={styles.synKeyword}>return</span> <span className={styles.synOperator}>-</span><span className={styles.synNumber}>1</span>
                </pre>
              </div>
            </div>

            <div className={styles.terminalCard}>
              <div className={styles.terminalHeader}>
                <div className={styles.terminalDots}>
                  <span></span><span></span><span></span>
                </div>
                <span className={styles.terminalTitle}>Maximum(A)</span>
                <button
                  className={`${styles.copyButton} ${copied === 3 ? styles.copied : ''}`}
                  onClick={() => handleCopyCode(3)}
                  title="Copy code"
                >
                  {copied === 3 ? <MdCheck size={20} /> : <MdContentCopy size={20} />}
                </button>
              </div>
              <div className={styles.terminalBody}>
                <pre className={styles.terminalCode}>
                  <span className={styles.synKeyword}>function</span> <span className={styles.synFunction}>max</span>(<span className={styles.synVariable}>A</span>: <span className={styles.synType}>integer[]</span>, <span className={styles.synVariable}>n</span>: <span className={styles.synType}>integer</span>) <span className={styles.synOperator}>→</span> <span className={styles.synType}>integer</span>{`
`}  <span className={styles.synKeyword}>variable</span> <span className={styles.synVariable}>m</span>: <span className={styles.synType}>integer</span> <span className={styles.synOperator}>←</span> <span className={styles.synVariable}>A</span>[<span className={styles.synNumber}>0</span>]{`
`}  <span className={styles.synKeyword}>variable</span> <span className={styles.synVariable}>i</span>: <span className={styles.synType}>integer</span>{`
`}  <span className={styles.synKeyword}>for</span> <span className={styles.synVariable}>i</span> <span className={styles.synOperator}>←</span> <span className={styles.synNumber}>1</span> <span className={styles.synKeyword}>to</span> <span className={styles.synVariable}>n</span><span className={styles.synOperator}>-</span><span className={styles.synNumber}>1</span> <span className={styles.synKeyword}>do</span>{`
`}    <span className={styles.synKeyword}>if</span> <span className={styles.synVariable}>A</span>[<span className={styles.synVariable}>i</span>] <span className={styles.synOperator}>{'>'}</span> <span className={styles.synVariable}>m</span> <span className={styles.synKeyword}>then</span>{`
`}      <span className={styles.synVariable}>m</span> <span className={styles.synOperator}>←</span> <span className={styles.synVariable}>A</span>[<span className={styles.synVariable}>i</span>]{`
`}    <span className={styles.synKeyword}>end if</span>{`
`}  <span className={styles.synKeyword}>end for</span>{`
`}  <span className={styles.synKeyword}>return</span> <span className={styles.synVariable}>m</span>
                </pre>
              </div>
            </div>

          </div>


          <h4>{t("algorithmAnalysis.fundamentals.chapter2.section3.title")}</h4>

          <p>
            <Trans i18nKey="algorithmAnalysis.fundamentals.chapter2.section3.p1" />
          </p>

          <table className={styles.symbolsTable}>
            <thead>
              <tr>
                <th>{t("algorithmAnalysis.fundamentals.chapter2.section3.tableHeaders.pseudocode")}</th>
                <th>{t("algorithmAnalysis.fundamentals.chapter2.section3.tableHeaders.description")}</th>
                <th>{t("algorithmAnalysis.fundamentals.chapter2.section3.tableHeaders.example")}</th>
              </tr>
            </thead>
            <tbody>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
                <tr key={index}>
                  <td><code>{t(`algorithmAnalysis.fundamentals.chapter2.section3.items.${index}.pseudocode`)}</code></td>
                  <td>{t(`algorithmAnalysis.fundamentals.chapter2.section3.items.${index}.description`)}</td>
                  <td><code>{t(`algorithmAnalysis.fundamentals.chapter2.section3.items.${index}.example`)}</code></td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* PART 2: Algorithm Evaluation */}
        <section className={styles.section}>
          <h2 id="algorithm-evaluation">{t("algorithmAnalysis.algorithm_evaluation.title")}</h2>

          <h3 id="time-measurement">{t("algorithmAnalysis.algorithm_evaluation.chapter3.title")}</h3>

          <div className={styles.chapterBlock}>
            <div className={`${styles.accentBlock} ${styles.accentGreen}`}>
              <h4 className={styles.accentTitle}>{t("algorithmAnalysis.algorithm_evaluation.chapter3.section1.title")}</h4>

              <p>
                <Trans i18nKey="algorithmAnalysis.algorithm_evaluation.chapter3.section1.p1" />
              </p>

              <ol className={styles.orderedList}>
                <li><Trans i18nKey="algorithmAnalysis.algorithm_evaluation.chapter3.section1.p1_item1" /></li>
                <li><Trans i18nKey="algorithmAnalysis.algorithm_evaluation.chapter3.section1.p1_item2" /></li>
              </ol>

              <p>
                <Trans i18nKey="algorithmAnalysis.algorithm_evaluation.chapter3.section1.p2" />
              </p>

              <ul>
                <li><Trans i18nKey="algorithmAnalysis.algorithm_evaluation.chapter3.section1.p2_item1" /></li>
                <li><Trans i18nKey="algorithmAnalysis.algorithm_evaluation.chapter3.section1.p2_item2" /></li>
              </ul>

              <p>
                <Trans i18nKey="algorithmAnalysis.algorithm_evaluation.chapter3.section1.p3" />
              </p>

              <ul>
                <li><Trans i18nKey="algorithmAnalysis.algorithm_evaluation.chapter3.section1.p3_item1" /></li>
                <li><Trans i18nKey="algorithmAnalysis.algorithm_evaluation.chapter3.section1.p3_item2" /></li>
                <li><Trans i18nKey="algorithmAnalysis.algorithm_evaluation.chapter3.section1.p3_item3" /></li>
              </ul>
            </div>

            <div className={`${styles.accentBlock} ${styles.accentBlue}`}>
              <h4 className={styles.accentTitle}>{t("algorithmAnalysis.algorithm_evaluation.chapter3.section2.title")}</h4>

              <p>
                <Trans i18nKey="algorithmAnalysis.algorithm_evaluation.chapter3.section2.p1" />
              </p>

              <p>
                <Trans i18nKey="algorithmAnalysis.algorithm_evaluation.chapter3.section2.p2" />
              </p>
            </div>

            <div className={`${styles.accentBlock} ${styles.accentPurple}`}>
              <h4 className={styles.accentTitle}>{t("algorithmAnalysis.algorithm_evaluation.chapter3.section3.title")}</h4>

              <p>
                <Trans i18nKey="algorithmAnalysis.algorithm_evaluation.chapter3.section3.p1" />
              </p>

              <ul>
                <li><Trans i18nKey="algorithmAnalysis.algorithm_evaluation.chapter3.section3.p1_item1" /></li>
                <li><Trans i18nKey="algorithmAnalysis.algorithm_evaluation.chapter3.section3.p1_item2" /></li>
              </ul>

              <p>
                <Trans i18nKey="algorithmAnalysis.algorithm_evaluation.chapter3.section3.p2" />
              </p>

              <ul>
                <li><Trans i18nKey="algorithmAnalysis.algorithm_evaluation.chapter3.section3.p2_item1" /></li>
                <li><Trans i18nKey="algorithmAnalysis.algorithm_evaluation.chapter3.section3.p2_item2" /></li>
                <li><Trans i18nKey="algorithmAnalysis.algorithm_evaluation.chapter3.section3.p2_item3" /></li>
              </ul>
            </div>
          </div>

          <h3 id="big-o-notation">{t("algorithmAnalysis.algorithm_evaluation.chapter4.title")}</h3>

          <p>
            <Trans i18nKey="algorithmAnalysis.algorithm_evaluation.chapter4.p1" />
          </p>

          <p>
            <Trans i18nKey="algorithmAnalysis.algorithm_evaluation.chapter4.p2" />
          </p>

          <ul>
            <li><Trans i18nKey="algorithmAnalysis.algorithm_evaluation.chapter4.p2_item1" /></li>
            <li><Trans i18nKey="algorithmAnalysis.algorithm_evaluation.chapter4.p2_item2" /></li>
            <li><Trans i18nKey="algorithmAnalysis.algorithm_evaluation.chapter4.p2_item3" /></li>
          </ul>

          <p>
            <Trans i18nKey="algorithmAnalysis.algorithm_evaluation.chapter4.p3" />
          </p>

          {/* Section 1: What is an invariant? */}
          <h4>{t("algorithmAnalysis.algorithm_evaluation.chapter4.section1.title")}</h4>

          <p>
            <Trans i18nKey="algorithmAnalysis.algorithm_evaluation.chapter4.section1.p1" />
          </p>

          <div className={styles.definitionsGrid}>
            <div className={styles.definitionCard}>
              <h5 className={styles.definitionCardTitle}>
                {t("algorithmAnalysis.algorithm_evaluation.chapter4.section1.subsection1.title")}
              </h5>
              <div className={styles.definitionCardContent}>
                <p>
                  <Trans i18nKey="algorithmAnalysis.algorithm_evaluation.chapter4.section1.subsection1.p1" />
                </p>
                <p>
                  <Trans i18nKey="algorithmAnalysis.algorithm_evaluation.chapter4.section1.subsection1.p2" />
                </p>
              </div>
            </div>

            <div className={`${styles.definitionCard} ${styles.algorithmCard}`}>
              <h5 className={styles.definitionCardTitle}>
                {t("algorithmAnalysis.algorithm_evaluation.chapter4.section1.subsection2.title")}
              </h5>
              <div className={styles.definitionCardContent}>
                <p>
                  <Trans i18nKey="algorithmAnalysis.algorithm_evaluation.chapter4.section1.subsection2.p1" />
                </p>
                <p>
                  <Trans i18nKey="algorithmAnalysis.algorithm_evaluation.chapter4.section1.subsection2.p2" />
                </p>
                <div className={styles.definitionFormula}>
                  {t("algorithmAnalysis.algorithm_evaluation.chapter4.section1.subsection2.formula")}
                </div>
                <p>
                  <Trans i18nKey="algorithmAnalysis.algorithm_evaluation.chapter4.section1.subsection2.p3" />
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: How to use an invariant to prove correctness */}
          <h4>{t("algorithmAnalysis.algorithm_evaluation.chapter4.section2.title")}</h4>

          <p>
            <Trans i18nKey="algorithmAnalysis.algorithm_evaluation.chapter4.section2.p1" />
          </p>

          <div className={styles.chapterBlock}>
            <div className={`${styles.accentBlock} ${styles.accentGreen}`}>
              <h4 className={styles.accentTitle}>
                <Trans i18nKey="algorithmAnalysis.algorithm_evaluation.chapter4.section2.step1_title" />
              </h4>
              <p>
                <Trans i18nKey="algorithmAnalysis.algorithm_evaluation.chapter4.section2.step1_text" />
              </p>
            </div>

            <div className={`${styles.accentBlock} ${styles.accentBlue}`}>
              <h4 className={styles.accentTitle}>
                <Trans i18nKey="algorithmAnalysis.algorithm_evaluation.chapter4.section2.step2_title" />
              </h4>
              <p>
                <Trans i18nKey="algorithmAnalysis.algorithm_evaluation.chapter4.section2.step2_text" />
              </p>
            </div>

            <div className={`${styles.accentBlock} ${styles.accentPurple}`}>
              <h4 className={styles.accentTitle}>
                <Trans i18nKey="algorithmAnalysis.algorithm_evaluation.chapter4.section2.step3_title" />
              </h4>
              <p>
                <Trans i18nKey="algorithmAnalysis.algorithm_evaluation.chapter4.section2.step3_text" />
              </p>
            </div>
          </div>

          {/* Section 3: Example - Proving the correctness of a maximum-finding algorithm /*/}
          <h4>{t("algorithmAnalysis.algorithm_evaluation.chapter4.section3.title")}</h4>

          <div className={styles.terminalCard}>
            <div className={styles.terminalHeader}>
              <div className={styles.terminalDots}>
                <span></span><span></span><span></span>
              </div>
              <span className={styles.terminalTitle}>max(A, n)</span>
              <button
                className={`${styles.copyButton} ${copied === 4 ? styles.copied : ''}`}
                onClick={() => handleCopyCode(4)}
                title="Copy code"
              >
                {copied === 4 ? <MdCheck size={20} /> : <MdContentCopy size={20} />}
              </button>
            </div>
            <div className={styles.terminalBody}>
              <pre className={styles.terminalCode}>
                <span className={styles.synKeyword}>function</span> <span className={styles.synFunction}>max</span>(<span className={styles.synVariable}>A</span>: <span className={styles.synType}>integer[]</span>, <span className={styles.synVariable}>n</span>: <span className={styles.synType}>integer</span>) <span className={styles.synOperator}>→</span> <span className={styles.synType}>integer</span>{`
`}  <span className={styles.synKeyword}>variable</span> <span className={styles.synVariable}>maxSoFar</span>: <span className={styles.synType}>integer</span> <span className={styles.synOperator}>←</span> <span className={styles.synVariable}>A</span>[<span className={styles.synNumber}>0</span>]{`
`}  <span className={styles.synKeyword}>variable</span> <span className={styles.synVariable}>i</span>: <span className={styles.synType}>integer</span>{`
`}  <span className={styles.synKeyword}>for</span> <span className={styles.synVariable}>i</span> <span className={styles.synOperator}>←</span> <span className={styles.synNumber}>1</span> <span className={styles.synKeyword}>to</span> <span className={styles.synVariable}>n</span><span className={styles.synOperator}>-</span><span className={styles.synNumber}>1</span> <span className={styles.synKeyword}>do</span>{`
`}    <span className={styles.synKeyword}>if</span> <span className={styles.synVariable}>A</span>[<span className={styles.synVariable}>i</span>] <span className={styles.synOperator}>{'>'}</span> <span className={styles.synVariable}>maxSoFar</span> <span className={styles.synKeyword}>then</span>{`
`}      <span className={styles.synVariable}>maxSoFar</span> <span className={styles.synOperator}>←</span> <span className={styles.synVariable}>A</span>[<span className={styles.synVariable}>i</span>]{`
`}    <span className={styles.synKeyword}>end if</span>{`
`}  <span className={styles.synKeyword}>end for</span>{`
`}  <span className={styles.synKeyword}>return</span> <span className={styles.synVariable}>maxSoFar</span>
              </pre>
            </div>
          </div>

          <div className={styles.chapterBlock}>
            <div className={`${styles.accentBlock} ${styles.accentBlue}`}>
              <h4 className={styles.accentTitle}>
                <Trans i18nKey="algorithmAnalysis.algorithm_evaluation.chapter4.section3.invariant_title" />
              </h4>
              <p>
                <Trans i18nKey="algorithmAnalysis.algorithm_evaluation.chapter4.section3.invariant_text" />
              </p>
            </div>

            <div className={`${styles.accentBlock} ${styles.accentGreen}`}>
              <h4 className={styles.accentTitle}>
                <Trans i18nKey="algorithmAnalysis.algorithm_evaluation.chapter4.section3.init_title" />
              </h4>
              <p>
                <Trans i18nKey="algorithmAnalysis.algorithm_evaluation.chapter4.section3.init_text" />
              </p>
            </div>

            <div className={`${styles.accentBlock} ${styles.accentGreen}`}>
              <h4 className={styles.accentTitle}>
                <Trans i18nKey="algorithmAnalysis.algorithm_evaluation.chapter4.section3.conservation_title" />
              </h4>
              <p>
                <Trans i18nKey="algorithmAnalysis.algorithm_evaluation.chapter4.section3.conservation_text" />
              </p>
            </div>

            <div className={`${styles.accentBlock} ${styles.accentGreen}`}>
              <h4 className={styles.accentTitle}>
                <Trans i18nKey="algorithmAnalysis.algorithm_evaluation.chapter4.section3.conclusion_title" />
              </h4>
              <p>
                <Trans i18nKey="algorithmAnalysis.algorithm_evaluation.chapter4.section3.conclusion_text" />
              </p>
            </div>
          </div>

          {/* Section 4: Correctness of Recursive Algorithms */}
          <h4>{t("algorithmAnalysis.algorithm_evaluation.chapter4.section4.title")}</h4>

          <p>
            <Trans i18nKey="algorithmAnalysis.algorithm_evaluation.chapter4.section4.p1" />
          </p>

          <h5>{t("algorithmAnalysis.algorithm_evaluation.chapter4.section4.subsection1.title")}</h5>

          <div className={styles.terminalCard}>
            <div className={styles.terminalHeader}>
              <div className={styles.terminalDots}>
                <span></span><span></span><span></span>
              </div>
              <span className={styles.terminalTitle}>binarySearch(A, v, start, end)</span>
              <button
                className={`${styles.copyButton} ${copied === 5 ? styles.copied : ''}`}
                onClick={() => handleCopyCode(5)}
                title="Copy code"
              >
                {copied === 5 ? <MdCheck size={20} /> : <MdContentCopy size={20} />}
              </button>
            </div>
            <div className={styles.terminalBody}>
              <pre className={styles.terminalCode}>
                <span className={styles.synKeyword}>function</span> <span className={styles.synFunction}>binarySearch</span>(<span className={styles.synVariable}>A</span>: <span className={styles.synType}>integer[]</span>, <span className={styles.synVariable}>v</span>: <span className={styles.synType}>integer</span>, <span className={styles.synVariable}>start</span>: <span className={styles.synType}>integer</span>, <span className={styles.synVariable}>end</span>: <span className={styles.synType}>integer</span>) <span className={styles.synOperator}>→</span> <span className={styles.synType}>integer</span>{`
`}  <span className={styles.synKeyword}>if</span> <span className={styles.synVariable}>start</span> <span className={styles.synOperator}>{'>'}</span> <span className={styles.synVariable}>end</span> <span className={styles.synKeyword}>then</span>{`
`}    <span className={styles.synKeyword}>return</span> <span className={styles.synOperator}>-</span><span className={styles.synNumber}>1</span>{`
`}  <span className={styles.synKeyword}>end if</span>{`
`}  <span className={styles.synKeyword}>variable</span> <span className={styles.synVariable}>m</span>: <span className={styles.synType}>integer</span> <span className={styles.synOperator}>←</span> <span className={styles.synFunction}>floor</span>((<span className={styles.synVariable}>start</span> <span className={styles.synOperator}>+</span> <span className={styles.synVariable}>end</span>)<span className={styles.synOperator}>/</span><span className={styles.synNumber}>2</span>){`
`}  <span className={styles.synKeyword}>if</span> <span className={styles.synVariable}>A</span>[<span className={styles.synVariable}>m</span>] <span className={styles.synOperator}>==</span> <span className={styles.synVariable}>v</span> <span className={styles.synKeyword}>then</span>{`
`}    <span className={styles.synKeyword}>return</span> <span className={styles.synVariable}>m</span>{`
`}  <span className={styles.synKeyword}>else if</span> <span className={styles.synVariable}>A</span>[<span className={styles.synVariable}>m</span>] <span className={styles.synOperator}>{'<'}</span> <span className={styles.synVariable}>v</span> <span className={styles.synKeyword}>then</span>{`
`}    <span className={styles.synKeyword}>return</span> <span className={styles.synFunction}>binarySearch</span>(<span className={styles.synVariable}>A</span>, <span className={styles.synVariable}>v</span>, <span className={styles.synVariable}>m</span><span className={styles.synOperator}>+</span><span className={styles.synNumber}>1</span>, <span className={styles.synVariable}>end</span>){`
`}  <span className={styles.synKeyword}>else</span>{`
`}    <span className={styles.synKeyword}>return</span> <span className={styles.synFunction}>binarySearch</span>(<span className={styles.synVariable}>A</span>, <span className={styles.synVariable}>v</span>, <span className={styles.synVariable}>start</span>, <span className={styles.synVariable}>m</span><span className={styles.synOperator}>-</span><span className={styles.synNumber}>1</span>){`
`}  <span className={styles.synKeyword}>end if</span>
              </pre>
            </div>
          </div>

          <p>
            <Trans i18nKey="algorithmAnalysis.algorithm_evaluation.chapter4.section4.subsection1.p1" />
          </p>

          <div className={styles.chapterBlock}>
            <div className={`${styles.accentBlock} ${styles.accentGreen}`}>
              <h4 className={styles.accentTitle}>
                <Trans i18nKey="algorithmAnalysis.algorithm_evaluation.chapter4.section4.subsection1.base_title" />
              </h4>
              <p>
                <Trans i18nKey="algorithmAnalysis.algorithm_evaluation.chapter4.section4.subsection1.base_text" />
              </p>
            </div>

            <div className={`${styles.accentBlock} ${styles.accentBlue}`}>
              <h4 className={styles.accentTitle}>
                <Trans i18nKey="algorithmAnalysis.algorithm_evaluation.chapter4.section4.subsection1.hypothesis_title" />
              </h4>
              <p>
                <Trans i18nKey="algorithmAnalysis.algorithm_evaluation.chapter4.section4.subsection1.hypothesis_text" />
              </p>
            </div>

            <div className={`${styles.accentBlock} ${styles.accentPurple}`}>
              <h4 className={styles.accentTitle}>
                <Trans i18nKey="algorithmAnalysis.algorithm_evaluation.chapter4.section4.subsection1.step_title" />
              </h4>
              <p>
                <Trans i18nKey="algorithmAnalysis.algorithm_evaluation.chapter4.section4.subsection1.step_text" />
              </p>
            </div>
          </div>
        </section>
      </LayoutSection>
    </article>
  );
}
