import styles from "./About.module.scss";

export default function About() {
  return (
    <section className={styles.about}>
      <div className={`${styles.inner} container`}>

        {/* Hero */}
        <div className={styles.hero}>
          <h1>
            About <span className={styles.highlight}>CE Notes</span>
          </h1>
          <p className={styles.subtitle}>
            A personal study hub for Computer Engineering and Computer Science,
            focused on clarity, structure and long-term understanding.
          </p>
        </div>


        {/* Mission */}
        <div className={styles.card}>
          <h2>Mission</h2>
          <p>
            CE Notes was created to collect and organize fundamental topics in
            computer engineering and related disciplines in a single, coherent
            place.
          </p>
          <p>
            The goal is not speed or shortcuts, but building solid foundations
            through well-structured explanations and rigorous reasoning.
          </p>
        </div>

        {/* Core Values */}
        <section className={styles.values}>
            <h2 className={styles.valuesTitle}>Core Values</h2>

        <div className={styles.valuesGrid}>
        <div className={styles.valueCard}>
        <span className={styles.check}>✓</span>
        <h3>Clarity</h3>
        <p>
            Complex concepts are explained in a clear and accessible way.
            No unnecessary jargon, just straightforward knowledge.
        </p>
        </div>

        <div className={styles.valueCard}>
        <span className={styles.check}>✓</span>
        <h3>Practicality</h3>
        <p>
            Theory meets practice. Every concept is backed by real-world
            examples and working code implementations.
        </p>
        </div>

        <div className={styles.valueCard}>
        <span className={styles.check}>✓</span>
        <h3>Organization</h3>
        <p>
            Content is carefully structured for both quick reference and
            deep learning. Find what you need, when you need it.
        </p>
        </div>

        <div className={styles.valueCard}>
        <span className={styles.check}>✓</span>
        <h3>Completeness</h3>
        <p>
            From fundamentals to advanced topics, the essential knowledge every engineer should know is covered.
        </p>
        </div>
        </div>
        </section>

        {/* What it covers */}
        <div className={styles.card}>
          <h2>What CE Notes Covers</h2>
          <p>
            The platform spans the core areas of computer engineering and
            scientific foundations, including:
          </p>
          <ul className={styles.list}>
            <li>Cybersecurity</li>
            <li>Data Structures & Algorithms</li>
            <li>Databases</li>
            <li>Introductory Computer Science</li>
            <li>Linear Algebra & Geometry</li>
            <li>Mathematical Analysis</li>
            <li>Networking</li>
            <li>Physics</li>
          </ul>
        </div>

        {/* Audience */}
        <div className={styles.cardMuted}>
          <h2>Who This Is For</h2>
          <p>
            CE Notes is designed as a structured, long-term reference for students, self-learners and professionals, focusing on fundamental concepts rather than fragmented tutorials.
          </p>
        </div>

      </div>
    </section>
  );
}
