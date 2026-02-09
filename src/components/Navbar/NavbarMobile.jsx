import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import logo from "../../assets/icons/logo_ce_notes.png";
import styles from "./NavbarMobile.module.scss";
import Search from "../Search/Search";
import { useTranslation } from "react-i18next";

export default function NavbarMobile() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 769px)");

    const handleChange = () => {
      if (mediaQuery.matches) {
        setOpen(false);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (searchOpen && open) {
      setOpen(false);
    }
  }, [searchOpen, open]);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={`${styles.inner} container`}>
          <div className={styles.brand}>
            <img
              src={logo}
              alt="CE notes logo"
              width={40}
              height={40}
            />

            <Link to="/" className={styles.logo}>
              CE notes
            </Link>
          </div>

          <div className={styles.actions}>
            <button
              className={styles.search}
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
            >
              <span className="material-symbols-outlined">search</span>
            </button>

            <button
              className={styles.menuButton}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              ☰
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
      <Search isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
