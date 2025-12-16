import { NavLink, Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
import logo from "../../assets/icons/logo_ce_notes.png";
import LanguageSelector from "../LanguageSelector/LanguageSelector";

export default function Navbar() {
  return (
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

        <ul className={styles.nav}>
          <li>
            <NavLink to="/" end>
              Topics
            </NavLink>
          </li>
          <li>
            <NavLink to="/exercises">
              Exercises
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              About
            </NavLink>
          </li>
        </ul>

        <div className={styles.actions}>
          <LanguageSelector />
          <button className={styles.search} aria-label="Search">
            <span className="material-symbols-outlined">search</span>
            <span className={styles.searchText}>Search</span>
          </button>

        </div>

      </div>
    </nav>
  );
}
