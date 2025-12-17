import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styles from "./MobileMenu.module.scss";

export default function MobileMenu({ open, onClose }) {
  const { t } = useTranslation();
  return (
    <div className={`${styles.overlay} ${open ? styles.open : ""}`}>
      <nav className={styles.menu}>
        <Link to="/" onClick={onClose}>{t("navbar.links.topics")}</Link>
        <Link to="/exercises" onClick={onClose}>{t("navbar.links.exercises")}</Link>
        <Link to="/about" onClick={onClose}>About</Link>
      </nav>
    </div>
  );
}
