import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.inner} container`}>
        <p>
          © {new Date().getFullYear()} CE notes. A personal study tool.
        </p>
      </div>
    </footer>
  );
}
