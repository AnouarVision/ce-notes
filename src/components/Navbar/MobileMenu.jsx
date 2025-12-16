import { Link } from "react-router-dom";
import styles from "./MobileMenu.module.scss";

export default function MobileMenu({ open, onClose }) {
  return (
    <div className={`${styles.overlay} ${open ? styles.open : ""}`}>
      <nav className={styles.menu}>
        <Link to="/" onClick={onClose}>Topics</Link>
        <Link to="/exercises" onClick={onClose}>Exercises</Link>
        <Link to="/about" onClick={onClose}>About</Link>
      </nav>
    </div>
  );
}
