import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import logo from "../../assets/icons/logo_ce_notes.png";
import styles from "./NavbarMobile.module.scss";

export default function NavbarMobile() {
  const [open, setOpen] = useState(false);

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

          <button
            className={styles.menuButton}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </nav>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
