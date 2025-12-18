import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styles from "./MobileMenu.module.scss";
import LanguageSelectorMobile from "../LanguageSelector/LanguageSelectorMobile";

export default function MobileMenu({ open, onClose }) {
  const { t } = useTranslation();

  return (
    <div className={`${styles.overlay} ${open ? styles.open : ""}`}>
      <nav className={styles.menu}>

        {/* Search bar */}
        <div className={styles.searchContainer}>
          <span className={`material-symbols-outlined ${styles.searchIcon}`}>
            search
          </span>
          <input
            type="text"
            placeholder={t("navbar.actions.search")}
            className={styles.searchInput}
          />
        </div>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Links */}
        <Link to="/" onClick={onClose}>
          {t("navbar.links.topics")}
        </Link>
        <Link to="/exercises" onClick={onClose}>
          {t("navbar.links.exercises")}
        </Link>
        <Link to="/about" onClick={onClose}>
          About
        </Link>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Language */}
        <LanguageSelectorMobile />
      </nav>
    </div>
  );
}
