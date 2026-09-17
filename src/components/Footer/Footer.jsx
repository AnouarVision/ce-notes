import { useTranslation } from "react-i18next";
import styles from "./Footer.module.scss";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
      <div className={`${styles.inner} container`}>
        <p>
          © {new Date().getFullYear()} CS notes. {t("footer.tagline")}
        </p>
      </div>
    </footer>
  );
}
