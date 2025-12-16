import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
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
          <Link to="/" className={styles.logo}>
            CE notes
          </Link>

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
